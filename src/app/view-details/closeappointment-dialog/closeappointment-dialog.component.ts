import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/appointment.service';

@Component({
  selector: 'app-closeappointment-dialog',
  templateUrl: './closeappointment-dialog.component.html',
  styleUrls: ['./closeappointment-dialog.component.scss'],
})
export class CloseappointmentDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CloseappointmentDialogComponent>,
    private service: AppointmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  OnClose() {
    this.dialogRef.close();
  }

  OnConfirm() {
    this.service.closeAppointment(this.data.appointmentId).subscribe({
      error: (err) => console.log(err),
      complete: () => {
        this.dialogRef.close();
        this.router.navigate(['app-dashboard']);
      },
    });
  }
}
