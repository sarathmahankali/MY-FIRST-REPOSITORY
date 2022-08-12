import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PrescriptionServiceService } from 'src/app/Services/prescription-service.service';

@Component({
  selector: 'app-editprescription',
  templateUrl: './editprescription.component.html',
  styleUrls: ['./editprescription.component.scss'],
})
export class EditprescriptionComponent implements OnInit {
  isChecked = true;
  addMedicineForm: FormGroup;

  prescription: any;
  // pre:PrescriptionModel[]=presdetail;
  constructor(
    private dialogRef: MatDialogRef<EditprescriptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private service: PrescriptionServiceService
  ) {}

  ngOnInit(): void {
    this.addMedicineForm = this.formBuilder.group({
      Id: new FormControl(''),
      Medicine: new FormControl(''),
      Span: new FormControl(''),
      TimeOfDay: new FormControl(''),
      Intake: ['', Validators.required],
      AdditionalComment: new FormControl(''),
    });
    console.log(this.data.prescriptionData);
    this.prescription = this.data.prescriptionData;
    this.addMedicineForm.patchValue({
      Medicine: this.prescription.Medicine,
      Id: this.prescription.Id,
      Span: this.prescription.Span,
      TimeOfDay: this.prescription.TimeOfDay,
      Intake: this.prescription.Intake,
      AdditionalComment: this.prescription.AdditionalComment,
    });
  }
  OnClick2() {
    this.service
      .updateMedicine(this.prescription.Id, this.addMedicineForm.value)
      .subscribe({
        next: (result) => console.log(result),

        error: (err) => console.log(err),
        complete: () => this.dialogRef.close(),
      });
  }
}
