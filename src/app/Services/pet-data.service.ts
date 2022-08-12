import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetDataService {
  appointmentDomain = environment.appointmentURL;
  petDomain = environment.petURL;

  constructor(private http: HttpClient) {}

  getAllData(petId) {
    return this.http.get(
      `${this.petDomain}/api/patients/patient/${petId}`
    );
  }

  getAllIds(appointmentId) {
    return this.http.get(
      `${this.appointmentDomain}/api/appointments/appointment/Ids/${appointmentId}`
    );
  }
}
