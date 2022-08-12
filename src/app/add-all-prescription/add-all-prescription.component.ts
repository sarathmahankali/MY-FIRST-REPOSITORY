import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
//import { PrescriptionServiceService } from '../prescription-service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MedicineModel } from '../Model/medicine';
import { PrescriptionServiceService } from '../Services/prescription-service.service';



@Component({
  selector: 'app-add-all-prescription',
  templateUrl: './add-all-prescription.component.html',
  styleUrls: ['./add-all-prescription.component.scss'],
})
export class AddAllPrescriptionComponent implements OnInit {
  isChecked = true;
  allMedicine: MedicineModel[];
  appointmentId = 1;

  // toggle = new FormControl({
  //   beforeFood: new FormControl('true'),
  //   afterFood: new FormControl('false'),
  // });

  // get beforeFood(): any {
  //   return this.toggle.get('true');
  // }

  onSubmit(): void {
    //console.log(this.toggle.value);
  }

  // setValue() {
  //   this.toggle.setValue({ beforeFood: 'true', afterFood: 'false'});
  // }

  addMedicineForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: PrescriptionServiceService,
    private dialogRef: MatDialogRef<AddAllPrescriptionComponent>
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
    this.service
      .saveMedicine(this.appointmentId, prescription)
      .subscribe((result) => {
        console.warn(result);
      });
  }
}
