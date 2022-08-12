import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/appointment.service';
import { PetDataService } from 'src/app/Services/pet-data.service';

@Component({
  selector: 'app-petcard',
  templateUrl: './petcard.component.html',
  styleUrls: ['./petcard.component.scss'],
})
export class PetcardComponent implements OnInit {
  @Input() appointmentId = '';
  allIds: any;
  petId: any;
  picturePlaceholder =
    'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png';

  constructor(
    private data: PetDataService,
    private _service: AppointmentService,
    private http: HttpClient
  ) {}
  petdata: any;
  ngOnInit(): void {
    this.data.getAllIds(this.appointmentId).subscribe({
      next: (response) => {
        this.allIds = response;
        this.petId = this.allIds['PetId'];
      },
      complete: () =>
        this.data.getAllData(this.petId).subscribe({
          next: (response) => (this.petdata = response),
        }),
    });
  }
}
