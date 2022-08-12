import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAllPrescriptionComponent } from '../add-all-prescription/add-all-prescription.component';
import { EditAllPrescriptionComponent } from '../edit-all-prescription/edit-all-prescription.component';
import { PrescriptionServiceService } from '../Services/prescription-service.service';

@Component({
  selector: 'app-view-all-prescription',
  templateUrl: './view-all-prescription.component.html',
  styleUrls: ['./view-all-prescription.component.scss'],
})
export class ViewAllPrescriptionComponent implements OnInit {
  medicinePrescription: any[] = [];

  constructor(
    private dialog: MatDialog,
    private prescription: PrescriptionServiceService
  ) {}

  deletePrescription(PatientDetailId: number, PrescriptionId: number) {
    this.prescription
      .DeletePrescription(PatientDetailId, PrescriptionId)
      .subscribe({
        error: (err) => console.log(err),

        complete: () => {
          window.location.reload();
        },
      });
  }

  ngOnInit(): void {
    // this.prescription.GetPrescription().subscribe({
    //   next:(item: any[]) => this.medicinePrescription = item
    // })
  }
  openDialog() {
    this.dialog.open(AddAllPrescriptionComponent);
  }
  openDialog2(pdata) {
    this.dialog.open(EditAllPrescriptionComponent, {
      data: { prescriptionData: pdata },
    });
  }
}
