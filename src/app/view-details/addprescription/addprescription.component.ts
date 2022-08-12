import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddAllPrescriptionComponent } from 'src/app/add-all-prescription/add-all-prescription.component';
import { MedicineModel } from 'src/app/Model/medicine';
import { PrescriptionServiceService } from 'src/app/Services/prescription-service.service';

@Component({
  selector: 'app-addprescription',
  templateUrl: './addprescription.component.html',
  styleUrls: ['./addprescription.component.scss'],
})
export class AddprescriptionComponent implements OnInit {
  isChecked = true;
  allMedicine!: MedicineModel[];

  toggle = new FormControl({
    beforeFood: new FormControl('true'),
    afterFood: new FormControl('false'),
  });

  // get beforeFood(): any {
  //   return this.toggle.get('true');
  // }

  onSubmit(): void {
    // console.log(this.toggle.value);
  }

  setValue() {
    // this.toggle.setValue({ beforeFood: 'true', afterFood: 'false' });
  }

  addMedicineForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: PrescriptionServiceService,
    private dialogRef: MatDialogRef<AddprescriptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.addMedicineForm = this.formBuilder.group({
      Medicine: new FormControl(),
      Span: new FormControl(''),
      TimeOfDay: new FormControl(''),
      Intake: new FormControl(2),

      AdditionalComment: new FormControl(''),
    });

    this.service.getAllMedicine().subscribe({
      next: (data) => (this.allMedicine = data),
      complete: () => console.log(this.allMedicine),
    });
  }

  displayMed(med: MedicineModel): string {
    // med = new MedicineModel(med.Id, med.Name);
    return med && med.Name ? med.Name : '';
  }

  OnClick1() {
    var prescription = {
      //Id:this.prescription.Id,

      Id: this.addMedicineForm.get('Medicine').value,
      Span: this.addMedicineForm.get('Span').value,
      TimeOfDay: this.addMedicineForm.get('TimeOfDay').value,
      Intake: this.addMedicineForm.get('Intake').value,
      AdditionalComment: this.addMedicineForm.get('AdditionalComment').value,
    };
    console.log(prescription);
    this.service.saveMedicine(this.data.appointmentId, prescription).subscribe({
      error: (err) => console.log(err),
      complete: () => this.dialogRef.close(),
    });
  }
}
