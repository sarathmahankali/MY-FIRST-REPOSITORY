import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Vet } from '../Model/Vet';
import { Contact } from '../Model/VetContact';
//import { Contact } from '../Model/DoctorContact';
import { VetFieldService } from '../Services/vet-field.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  vetId = JSON.parse(localStorage.getItem('vetId'));
  vetform: FormGroup;
  editable: boolean;
  vet: any;
  
  temp: string | ArrayBuffer | null = '';

  constructor(
    private formBuilder: FormBuilder,
    private service: VetFieldService,
    public vetservice: VetFieldService
  ) {}

  ngOnInit(): void {
    this.vetform = this.formBuilder.group({
      vet_profile_image: new FormControl(),
      id: new FormControl(),
      vet_name: new FormControl(''),
      Id: new FormControl(),
      vet_phone_number: new FormControl(''),
      vet_email_id: new FormControl(''),
      vet_speciality: new FormControl(''),
      vet_npi_no: new FormControl(''),
      vet_practice_location: new FormControl(''),
    });

    this.service.getVetprofile(this.vetId).subscribe({
      next: (d) => {
        this.vet = d;
      },
      complete: () => {
        console.log('Docotor Data', this.vet);
        this.vetform.patchValue({
          id: this.vet.id,
          vet_name: this.vet.vet_name,
          vet_profile_image: this.vet.vet_profile_image,
          Id: this.vet.ContactDetails.Id,
          vet_phone_number: this.vet.ContactDetails.vet_phone_number,
          vet_email_id: this.vet.ContactDetails.vet_email_id,
          vet_speciality: this.vet.vet_speciality,
          vet_npi_no: this.vet.vet_npi_no,
          vet_practice_location: this.vet.vet_practice_location,
        });
        //img
      },
    });
  }
  OnClick1() {
    this.editable = !this.editable;
  }
  OnClick2() {
    this.editable = !this.editable;
    var data = new Vet(
      this.vetform.get('id').value,
      this.vetform.get('vet_profile_image').value,
      this.vetform.get('vet_name').value,
      this.vetform.get('vet_speciality').value,
      this.vetform.get('vet_practice_location').value,
      this.vetform.get('vet_npi_no').value,
      new Contact(
        this.vetform.get('Id').value,
        this.vetform.get('vet_phone_number').value,
        this.vetform.get('vet_email_id').value
      )
    );

    this.service.updateVetprofile(this.vet.id, data);
    console.log(this.vetform.value);
  }
}
