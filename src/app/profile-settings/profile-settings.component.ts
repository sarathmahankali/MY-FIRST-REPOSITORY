import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Vet } from '../Model/Vet';
import { Contact } from '../Model/VetContact';
//import { Contact } from '../Model/DoctorContact';
import { VetFieldService } from '../Services/vet-field.service';
import { VetProfileDataService } from '../Services/vet-profile-data.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss'],
})
export class ProfileSettingsComponent implements OnInit {
  vetId = JSON.parse(localStorage.getItem('vetId'));
  vets: any;
  temp: string | ArrayBuffer | null = '';
  vetform: FormGroup;
  editable: boolean;
  vet: any;
  // doctors:any;
  // temp: string | ArrayBuffer | null = "";
  constructor(
    private formBuilder: FormBuilder,
    private service: VetFieldService,
    public vetservice: VetProfileDataService
  ) {}

  ngOnInit(): void {
    //gagana's code
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

    //Akash's Code
    this.vetservice.getData(this.vetId).subscribe((e) => {
      this.vets = e;
    });
    if (this.vets == undefined) {
      console.log('--------------------------------------');
    }
  }
  //Gagana's code
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

  //Akash'code
  removeVetProfile() {
    this.vets.vet_profile_image =
      'https://www.kimshospitals.com/images/doctor_default.png';
    this.vetservice.putData(this.vets);
  }
  changeListener($event: any): void {
    this.readThis($event.target);
  }
  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();
    myReader.readAsDataURL(file);
    myReader.onloadend = (e) => {
      this.vets.vet_profile_image = myReader.result.toString();
      //this.temp = myReader.result.toString();
      console.log(this.vets.vet_profile_image);
    };
    // this.vets.vetProfileImage = this.temp?.toString() || ""
    this.vets.vet_profile_image =
      'https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?size=626&ext=jpg&ga=GA1.1.683797051.1649916745';
    this.vetservice.putData(this.vets);
    console.log(this.vets.vet_profile_image);
  }
}
