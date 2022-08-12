import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VetDataService {

petDomain = environment.petURL;
  appointmentDomain = environment.appointmentURL;
  constructor(private http: HttpClient) {}

  ID = 1; //
  getAllData(petId) {
    return this.http.get(
      `${this.petDomain}/api/doctors/doctorcard/${petId}`
    );
  }

  getAllIds(appointmentId) {
    return this.http.get(
      `${this.appointmentDomain}/api/appointments/appointment/Ids/${appointmentId}`
    );
  }
}