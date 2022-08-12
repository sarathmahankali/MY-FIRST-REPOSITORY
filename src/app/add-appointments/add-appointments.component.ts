import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';
import { Pet } from '../Model/appointmentPet.model';
import { PetParent } from '../Model/appointmentPetparent.model';
import { Vet } from '../Model/appointmentVet.model';
import { PetSearching } from '../Model/petforsearch.model';
import { AddAppointmentService } from './add-appointment.service';

@Component({
  selector: 'app-add-appointments',
  templateUrl: './add-appointments.component.html',
  styleUrls: ['./add-appointments.component.scss'],
})
export class AddAppointmentsComponent implements OnInit {
  inputValue: string = '';
  vetId = '';
  vetName = '';

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  appointmentForm: FormGroup;

  petRecommended: PetSearching[];

  issues: string[];
  petIssue: string;

  selected: Date | null;
  timeArray = [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
  ];

  petParents: PetParent[];
  petList:Pet[];

  constructor(
    private fb: FormBuilder,
    private service: AppointmentService,
    private datepipe: DatePipe,
    private router: Router,
    private addAppointmentService: AddAppointmentService
  ) {}

  ngOnInit() {
    this.appointmentForm = this.fb.group({
      appointmentDate: new FormControl(),
      appointmentTime: new FormControl(),
      issue: new FormControl(),
      reason: new FormControl(),
      pet: new FormControl(),
      parent: new FormControl(),
      vet: new FormControl(),

    })
    this.petList = this.addAppointmentService.getAllPetsByParent();
    this.petParents = this.addAppointmentService.getAllParent();
    this.appointmentForm.patchValue({
      vet: new Vet(1, "Dr. Kumar", "Navle", "99999")
    })

    this.vetId = JSON.parse(localStorage.getItem('vetId'));
    this.vetName = JSON.parse(localStorage.getItem('vetName'));
  }

  displayFnForpet(pet: Pet): string {
    return pet && pet.petName ? pet.petName : '';
  }
  displayFnParent(parent: PetParent) {
    return parent && parent.parentName ? parent.parentName : "";
  }

  submitForm(){
    console.log(this.appointmentForm.value);  
    this.addAppointmentService.createAppointment(this.appointmentForm.value).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)              
    })  
  }

  OnInput($event) {
    this.petIssue = $event.target.value;
  }
  removeIssue() {
    this.petIssue = null;
  }
  removeReason() {
    this.secondFormGroup.patchValue({
      reason: '',
    });
  }
  OnIssuesSelect() {
    this.secondFormGroup.patchValue({
      issues: this.petIssue,
    });
  }
  updateFormDate(event: any) {
    var date = this.datepipe.transform(event, 'yyyy-MM-dd');
    this.appointmentForm.get('appointmentDate').setValue(date);
  }
  updateFormTime(data) {
    this.appointmentForm.get('appointmentTime').setValue(data);
  }
  ConfirmAppointment() {
    var data = {
      AppointmentDate: this.thirdFormGroup.get('date').value,
      AppointmentTime: this.thirdFormGroup.get('time').value,
      Reason: this.secondFormGroup.get('reason').value,
      Issue: this.secondFormGroup.get('issue').value,
      VetId: this.vetId,
      VetName: this.vetName,
      petId: this.firstFormGroup.get('petDetail').value.Id,
      petName: this.firstFormGroup.get('petDetail').value.Name,
    };

    this.service.PostFormData(data).subscribe({
      next: (response) => {
        this.service.SetAppointmentConfirmationData(response);
      },
      error: (err) => {
        window.alert(err.message);
        window.location.reload();
      },
      complete: () => this.router.navigate(['appointment-confirmation']),
    });
  }
}
