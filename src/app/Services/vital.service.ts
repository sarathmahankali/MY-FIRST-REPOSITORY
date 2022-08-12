import { Injectable } from '@angular/core';
import { VitalDTO } from '../Model/vital.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VitalService {
  constructor(private http: HttpClient) {}

  appointmentDomain = environment.appointmentURL;

  getData(id) {
    return this.http.get<VitalDTO>(
      `${this.appointmentDomain}/getallvitals/${id}`
    );
  }

  editData(Vital: VitalDTO) {
    return this.http
      .put(`${this.appointmentDomain}/updatevital/${Vital.id}`, Vital)
      .subscribe({
        next: (result) => console.log(result),
        error: (err) => console.log(err),
      });
  }
}
