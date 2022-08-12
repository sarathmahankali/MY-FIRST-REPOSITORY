import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PrescriptionServiceService } from 'src/app/Services/prescription-service.service';
import { AddprescriptionComponent } from '../addprescription/addprescription.component';
import { EditprescriptionComponent } from '../editprescription/editprescription.component';

@Component({
  selector: 'app-prescriptioncard',
  templateUrl: './prescriptioncard.component.html',
  styleUrls: ['./prescriptioncard.component.scss'],
})
export class PrescriptioncardComponent implements OnInit {
  medicinePrescription: any[] = [];

  @Input() appointmentId = '';

  constructor(
    private dialog: MatDialog,
    private prescription: PrescriptionServiceService
  ) {}

  deletePrescription(PrescriptionId: number) {
    this.prescription
      .DeletePrescription(this.appointmentId, PrescriptionId)
      .subscribe({
        error: (err) => console.log(err),

        complete: () => {
          this.prescription.GetPrescription(this.appointmentId).subscribe({
            next: (item: any[]) => (this.medicinePrescription = item),
          });
        },
      });
  }

  ngOnInit(): void {
    this.prescription.GetPrescription(this.appointmentId).subscribe({
      next: (item: any[]) => (this.medicinePrescription = item),
    });
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = { appointmentId: this.appointmentId };

    let dialogRef = this.dialog.open(AddprescriptionComponent, dialogConfig);

    dialogRef.afterClosed().subscribe({
      complete: () => {
        this.prescription.GetPrescription(this.appointmentId).subscribe({
          next: (item: any[]) => (this.medicinePrescription = item),
        });
      },
    });
  }
  openDialog2(pdata) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = { prescriptionData: pdata };
    let dialogRef = this.dialog.open(EditprescriptionComponent, dialogConfig);
    dialogRef.afterClosed().subscribe({
      complete: () => {
        this.prescription.GetPrescription(this.appointmentId).subscribe({
          next: (item: any[]) => (this.medicinePrescription = item),
        });
      },
    });
  }
}
