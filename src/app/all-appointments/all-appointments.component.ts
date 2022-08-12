import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.scss']
})
export class AllAppointmentsComponent implements OnInit {
  currentStatus: string = 'All';
  showGrid: boolean = true;

  constructor() {}

  ngOnInit(): void {}
  SelectChange(e) {
    this.currentStatus = e.target.value;
  }

  toggleViewGrid() {
    this.showGrid = true;
  }
  toggleViewCalender() {
    this.showGrid = false;
  }
  NewAppointment() {
    this.showGrid = false;
  }
}
