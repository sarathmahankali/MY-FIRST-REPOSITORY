import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router, NavigationExtras } from '@angular/router';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../Model/appointment.model';

@Component({
  selector: 'app-appointmentgridview',
  templateUrl: './appointmentgridview.component.html',
  styleUrls: ['./appointmentgridview.component.scss'],
})
export class AppointmentgridviewComponent implements OnInit {
  currentPage: number = 1;
  itemsPerpage: number = 4;
  totalPage: any;
  hasNext: boolean;
  hasPrev: boolean;

  vetId = JSON.parse(localStorage.getItem('petId'));
  @Input() status = '';
  defaultPic =
    'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png';
  fetchedAppointments: Appointment[] = [];
  user: string = 'Vet';
  error = null;

  constructor(
    private _service: AppointmentService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAppointmentData(this.vetId);
  }

  setAppointmentId(appointmentId: number) {
    this._service.setAppointmentId(appointmentId);
  }

  NextPage() {
    var page = this.currentPage + 1;
    if (this.status === 'All')
      this.getAppointmentData(this.vetId);
    else
      this.filteredDataWithStatus(
        this.vetId,
        page,
        this.itemsPerpage,
        this.status
      );
  }

  PrevPage() {
    var page = this.currentPage - 1;
    if (this.status === 'All')
      this.getAppointmentData(this.vetId);
    else
      this.filteredDataWithStatus(
        this.vetId,
        page,
        this.itemsPerpage,
        this.status
      );
  }

  formatTime(time) {
    var t = time.toString();
    return t.split(':').slice(0, 2).join(':');
  }

  ngOnChanges() {
    if (this.status == 'All') {
      this.getAppointmentData(this.vetId);
    } else {
      this.filteredDataWithStatus(
        this.vetId,
        1,
        this.itemsPerpage,
        this.status
      );
    }
  }

  acceptAppointment(value) {
    var data = {
      AppointmentId: value,
      Status: 'CONFIRMED',
    };
    window.confirm('Are you sure?');
    this.changeStatus(data, this.vetId);
  }

  rejectAppointment(value) {
    var data = {
      AppointmentId: value,
      Status: 'CANCELLED',
    };
    window.confirm('Do you want to cancel the appointment?');
    this.changeStatus(data, this.vetId);
  }

  getAppointmentData(vetId) {
    this._service
      .FetchAppointmentData(vetId)
      .subscribe({
        next: (response) => {
          this.fetchedAppointments = [];
          var appointmentData = response['AppointmentBasicInfo'];

          for (var val of appointmentData as any) {
            this.fetchedAppointments.push(
              new Appointment(
                val.AppointmentId,
                val.AppointmentDate,
                val.AppointmentTime,
                val.AppointmentStatus,
                val.Issue,
                val.PetName
              )
            );
          }
          this.totalPage = response['TotalPages'];
          this.currentPage = response['CurrentPage'];
          this.hasNext = response['HasNext'];
          this.hasPrev = response['HasPrevious'];
        },
        error: (err) => {
          this.error = err.message;
          console.log(this.error);
        },
      });
  }

  filteredDataWithStatus(
    vetId,
    pageNumber: number,
    itemPerPage: number,
    status: string
  ) {
    this._service
      .FilterAppointmentData(vetId, pageNumber, itemPerPage, status)
      .subscribe({
        next: (response) => {
          this.fetchedAppointments = [];
          var appointmentData = response['AppointmentBasicInfo'];

          console.log(appointmentData);

          for (var val of appointmentData as any) {
            this.fetchedAppointments.push(
              new Appointment(
                val.AppointmentId,
                val.AppointmentDate,
                val.AppointmentTime,
                val.AppointmentStatus,
                val.Issue,
                val.PetName
              )
            );
          }
          this.totalPage = response['TotalPages'];
          this.currentPage = response['CurrentPage'];
          this.hasNext = response['HasNext'];
          this.hasPrev = response['HasPrevious'];
        },
        error: (err) => {
          this.error = err.message;
          console.log(this.error);
        },
      });
  }

  changeStatus(data: any, vetId) {
    this._service.ChangeAppointmentStatus(data, vetId).subscribe({
      error: (err) => console.log(err),
      complete: () => {
        if (this.status == 'All') {
          this.getAppointmentData(
            vetId,
          );
        } else {
          this.filteredDataWithStatus(
            vetId,
            this.currentPage,
            this.itemsPerpage,
            this.status
          );
        }
      },
    });
  }

  viewDetail(appointment: any) {
    let navigationExtras: NavigationExtras = {
      state: { appointmentId: appointment.AppointmentId },
    };
    this.router.navigate(['view-details'], navigationExtras);
  }

  openDialog(data: number): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = { appointmentId: data };
   
  }
}
