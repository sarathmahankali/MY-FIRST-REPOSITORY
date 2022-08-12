import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/user';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User;
  userType: any;

  errorMessage: string = 'Invalid username or password';
  error: boolean = true;
  isLoginError: boolean;

  constructor(private router: Router, private auth: AuthenticationService) {}

  ngOnInit(): void {
    this.user = new User();
    this.userType = 'Doctor';
  }

  setUserType(type: string) {
    this.auth.setUserType(type).subscribe((data) => data);
    this.userType = type;
  }
  newUser: any;
  login() {
    this.auth.userAuthentication(this.user.Name, this.user.Password).subscribe({
      next: async (data: any) => {
        localStorage.setItem('userToken', data.access_token);
        await this.auth
          .getUserClaims()
          .then((val) => {
            localStorage.setItem('doctorId', JSON.stringify(val));
          })
          .then(() => this.router.navigate(['app-dashboard']));
      },
      error: (err) => {
        this.isLoginError = true;
      },
    });
  }
  showError() {
    this.error = false;
  }
}
