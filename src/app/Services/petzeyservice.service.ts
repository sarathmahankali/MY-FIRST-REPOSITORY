import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetzeyserviceService {

  appointmentDomain = environment.appointmentURL;

  constructor(private http: HttpClient) {}

  //posting the data
  AddTest(appointmentId, test: any) {
    //console.log(test);
    return this.http.post(
      `${this.appointmentDomain}/test/${appointmentId}`,
      test
    );
  }

  // fetching master data
  GetAllTests(): Observable<any[]> {
    return this.http.get<any>(`${this.appointmentDomain}/test`);
  }

  //fetching the recommended tests
  GetRecommendedTests(val): Observable<any[]> {
    return this.http.get<any>(
      `${this.appointmentDomain}/recommendedtest/${val}`
    );
  }

  //delete test from the database.
  deleteTest(id: number, appointmentId) {
    return this.http.delete(
      `${this.appointmentDomain}/Test/testReportid/${id}/appointmentid/${appointmentId}`
    );
  }

  // get testreports
  GetTestReports(): Observable<any[]> {
    return this.http.get<any>(this.appointmentDomain + 'TestReports');
  }
}
