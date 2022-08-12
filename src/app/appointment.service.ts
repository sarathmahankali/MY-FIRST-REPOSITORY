import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PetSearching } from './Model/petforsearch.model';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  confirmationData: any;

  appointment: any;
  constructor(private _http: HttpClient) {}

  appointmentDomain = environment.appointmentURL;
  petDomain = environment.petURL;

  FetchAppointmentData(id: number) {
    return this._http.get(
      `${this.appointmentDomain}/api/appointments/${id}`
    );
  }

  FilterAppointmentData(
    id: number,
    page: number,
    itemsPerpage: number,
    status: string
  ) {
    return this._http.get(
      `${this.appointmentDomain}/api/appointments/${status}/${id}?page=${page}&itemsperpage=${itemsPerpage}`
    );
  }

  // FetchPatients(id) {
  //   return this._http
  //     .get(`${this.petDomain}/api/pets/allpets`)
  //     .pipe(
  //       map((data: any[]) => {
  //         var pets: PetSearching[] = [];
  //         data.forEach((d) => {
  //           pets.push(new PetSearching(d.Id, d.Name, d.PhoneNumber));
  //         });
  //         return patients;
  //       })
  //     );
  // }

  PostFormData(data: any) {
    return this._http.post(
      `${this.appointmentDomain}/api/appointments/appointment/create`,
      data
    );
  }

  SetAppointmentConfirmationData(data: any) {
    this.confirmationData = data;
  }

  GetAppointmentConfirmationData() {
    return this.confirmationData;
  }

  ChangeAppointmentStatus(data: any, vetId) {
    return this._http.patch(
      `${this.appointmentDomain}/api/appointments/appointment/changestatus/vetId/${vetId}`,
      data
    );
  }

  setAppointmentId(appointmentId: any) {
    this.appointment = appointmentId;
  }

  closeAppointment(appointmentid) {
    return this._http.patch(
      `${this.appointmentDomain}/api/appointments/appointment/close?appointmentId=${appointmentid}`,
      {}
    );
  }
}
