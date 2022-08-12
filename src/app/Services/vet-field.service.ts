import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vet } from '../Model/Vet';

@Injectable({
  providedIn: 'root'
})
export class VetFieldService {
  vet!: Vet;

  constructor(private http: HttpClient) {}

  //gets data from Database to UI

  getVetprofile(id: number) {
    var veturl = environment.vetURL;
    return this.http.get(`${veturl}/api/doctors/doctorprofile/${id}`).pipe(
      map((d) => {
        var vet = d;
        console.log(vet);
        return vet;
      })
    );
  }

  //Edit-Update Database from UI
  updateVetprofile(id: number, data: any) {
    var veturl = environment.vetURL;
    this.http.put(`${veturl}/api/doctors/doctorprofile`, data).subscribe({
      next: (result) => console.log(result),
      error: (err) => console.log(err),
    });
  }
}