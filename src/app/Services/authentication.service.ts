import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Model/user';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthenticationService {
  readonly rootUrl = environment.authUrl;
  constructor(private http: HttpClient) {}

  userAuthentication(userName, password) {
    var data =
      'username=' + userName + '&password=' + password + '&grant_type=password';
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/x-www-urlencoded',
      'No-Auth': 'True',
    });
    return this.http.post(this.rootUrl + '/token', data, {
      headers: reqHeader,
    });
  }
  async getUserClaims() {
    const user = await firstValueFrom(
      this.http.get(this.rootUrl + '/api/doctorId')
    );
    return user;
  }

  setUserType(type) {
    return this.http.post(this.rootUrl + 'api/User/UserType/' + type, type);
  }

  getUserDetails() {}
}
