import { Component, OnInit } from '@angular/core';
// import * as moment from 'moment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-confirmation',
  templateUrl: './appointment-confirmation.component.html',
  styleUrls: ['./appointment-confirmation.component.scss']
})
export class AppointmentConfirmationComponent implements OnInit {

  confirmationData: any;

  constructor(private service: AppointmentService) {}

  ngOnInit(): void {
    this.confirmationData = this.service.GetAppointmentConfirmationData();
    console.log('Confirmation Component', this.confirmationData);
  }

  // displayAge(dob: Date) {
  //   return moment().diff(dob, 'years');
  // }
  formatTime(time) {
    var t = time.toString();
    return t.split(':').slice(0, 2).join(':');
  }
}
