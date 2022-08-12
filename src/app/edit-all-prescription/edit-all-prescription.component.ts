import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,Validators, FormControl} from '@angular/forms';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PrescriptionServiceService } from '../Services/prescription-service.service';


@Component({
  selector: 'app-edit-all-prescription',
  templateUrl: './edit-all-prescription.component.html',
  styleUrls: ['./edit-all-prescription.component.scss']
})
export class EditAllPrescriptionComponent implements OnInit {
  isChecked=true;
  addMedicineForm :FormGroup;

  prescription:any;
  // pre:PrescriptionModel[]=presdetail;
  constructor(@Inject(MAT_DIALOG_DATA) public data : any,private formBuilder:FormBuilder,private service:PrescriptionServiceService) { }

  ngOnInit(): void {
    this.addMedicineForm=this.formBuilder.group({
      Id:new FormControl(''),
      Medicine:new FormControl(''),
      Span:new FormControl(''),
      TimeOfDay:new FormControl(''),
      Intake:['',Validators.required],
      AdditionalComment:new FormControl('')
    });
     console.log(this.data.prescriptionData);
     this.prescription=this.data.prescriptionData;
     this.addMedicineForm.patchValue({
      Medicine:this.prescription.Medicine,
      Id:this.prescription.Id,
      Span:this.prescription.Span,
      TimeOfDay:this.prescription.TimeOfDay,
      Intake:this.prescription.Intake,
      AdditionalComment:this.prescription.AdditionalComment
     })

    
  }
  OnClick2() {
    this.service.updateMedicine(this.prescription.Id,this.addMedicineForm.value)

  }

  }
