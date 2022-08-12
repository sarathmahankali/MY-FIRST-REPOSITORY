import { Component, OnInit } from '@angular/core';
import { VetProfileDataService } from '../Services/vet-profile-data.service';

@Component({
  selector: 'app-doctor-profile-photo',
  templateUrl: './doctor-profile-photo.component.html',
  styleUrls: ['./doctor-profile-photo.component.scss'],
})
export class DoctorProfilePhotoComponent implements OnInit {
  vetId = JSON.parse(localStorage.getItem('vetId'));
  constructor(public vetservice: VetProfileDataService) {}
  vets: any;
  temp: string | ArrayBuffer | null = '';

  ngOnInit(): void {
    this.vetservice.getData(this.vetId).subscribe((e) => {
      this.vets = e;
    });
    if (this.vets == undefined) {
      console.log('--------------------------------------');
    }
  }

  //profile image
  //vetProfileImage:string = "https://img.freepik.com/free-photo/portrait-smiling-male-vet_171337-1532.jpg?size=626&ext=jpg";
  removevetProfile() {
    this.vets.vet_profile_image =
      'https://www.kimshospitals.com/images/vet_default.png';
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
      this.vets.vet_profile_image =
        'https://img.freepik.com/free-photo/portrait-smiling-male-vet_171337-1532.jpg?size=626&ext=jpg&ga=GA1.1.683797051.1649916745';
      console.log(this.vets.vet_profile_image);
    };
    // this.vets.vetProfileImage = this.temp?.toString() || ""
    this.vetservice.putData(this.vets);
    // console.log(this.vets)
  }
}
