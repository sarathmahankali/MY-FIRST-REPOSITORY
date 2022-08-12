import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { PrescriptionModel } from '../Model/prescriptionDetails';
import { MedicineModel } from '../Model/medicine';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionServiceService {
  prescription: PrescriptionModel;
  appointmentDomain = environment.appointmentURL;
  constructor(private http: HttpClient) {}

  GetPrescription(appointmentId): any {
    return this.http.get(
      `${this.appointmentDomain}/appointment/${appointmentId}`
    );
  }

  DeletePrescription(appointmentId, PrescriptionId: number) {
    return this.http.delete(
      `${this.appointmentDomain}/appointmentId/${appointmentId}/prescriptionId/${PrescriptionId}`
    );
  }

  getMedicine(id: number) {
    return this.http.get(`${this.appointmentDomain}/appointment/${id}`).pipe(
      map((d) => {
        var prescription = d;

        return prescription;
      })
    );
  }

  getAllMedicine() {
    return this.http.get(`${this.appointmentDomain}/appointment/medicine`).pipe(
      map((med: any[]) => {
        var medicinearr: MedicineModel[] = [];
        med.forEach((m) => {
          medicinearr.push(m);
        });
        return medicinearr;
      })
    );
  }

  updateMedicine(id: number, data: any) {
    return this.http.put(
      `${this.appointmentDomain}/prescriptionedit/${id}`,
      data
    );
  }

  saveMedicine(appointmentId, data: any) {
    var prescription = {
      Medicine: data.Id.Name,
      Span: data.Span,
      TimeOfDay: data.TimeOfDay,
      Intake: data.Intake,
      AdditionalComment: data.AdditionalComment,
    };

    return this.http.post(
      `${this.appointmentDomain}/addprescription/${appointmentId}`,
      prescription
    );
  }
}