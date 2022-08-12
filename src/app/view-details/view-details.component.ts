import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';
import { ConfirmdialogComponent } from '../confirmdialog/confirmdialog.component';
import { CloseappointmentDialogComponent } from './closeappointment-dialog/closeappointment-dialog.component';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss'],
})
export class ViewDetailsComponent implements OnInit {
 
  appointmentId: string="";
  constructor(
    private dialog: MatDialog,
    private _service: AppointmentService,
    private router: Router
  ) {
    this.appointmentId =
      this.router.getCurrentNavigation().extras.state['appointmentId'];
    console.log(this.appointmentId);
  }

  ngOnInit(): void {}
  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { appointmentId: this.appointmentId };
    (dialogConfig.height = '50%'), (dialogConfig.width = '40%');
    const dialogRef = this.dialog.open(
      CloseappointmentDialogComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
