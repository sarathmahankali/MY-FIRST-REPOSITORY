//"use strict"
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../Services/authentication.service';
import { VetFieldService } from '../Services/vet-field.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userClaims: any;
  vet: any;
  vetId=1;
  //vetId = JSON.parse(localStorage.getItem('vetId'));
  constructor(
    public router: Router,
    private userService: AuthenticationService,
    private vetService: VetFieldService
  ) {
    this.userClaims = this.userService.getUserDetails();
    console.log(this.userClaims);
  }

  ngOnInit(): void {
    this.vetService.getVetprofile(this.vetId).subscribe({
      next: (data) => (this.vet = data),
      error: (err) => console.log(err),
      complete: () =>
        localStorage.setItem(
          'vetName',
          JSON.stringify(this.vet.vet_name)
        ),
    });
  }

  logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('vetId');
    localStorage.removeItem('vetName');
    this.userClaims = null;
    this.router.navigate(['']);
  }
}
