import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Vet } from '../Model/vet.model';

@Injectable({
  providedIn: 'root'
})
export class VetProfileDataService {

  getUrl = 'https://localhost:44301/api/doctor/6';
  //https://localhost:44333/
  setUrl = 'https://localhost:44301/api/doctor';
  //https://localhost:44311/
  constructor(private http: HttpClient) {}
  getData(vetId): any {
    return this.http.get(
      `${environment.vetURL}/api/doctors/doctor/profile/${vetId}`
    );
  }

  putData(vet: Vet) {
    this.http
      .put(`${environment.vetURL}/api/doctors/doctor/profile`, vet)
      .subscribe({
        next: (result) => console.log(result),
        error: (err) => console.log(err),
      });
  }
}