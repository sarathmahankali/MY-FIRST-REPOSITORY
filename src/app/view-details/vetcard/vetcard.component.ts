import { Component, Input, OnInit } from '@angular/core';
import { VetDataService } from 'src/app/Services/vet-data.service';

@Component({
  selector: 'app-vetcard',
  templateUrl: './vetcard.component.html',
  styleUrls: ['./vetcard.component.scss'],
})
export class DoctorcardComponent implements OnInit {
  @Input() appointmentId: any;
  allIds: any;
  petId: any;
  picturePlaceholder =
    'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png';

  constructor(private data: VetDataService) {}
  petdata: any;
  ngOnInit(): void {
    this.data.getAllIds(this.appointmentId).subscribe({
      next: (response) => {
        this.allIds = response;
        this.petId = this.allIds['PetId'];
      },
      complete: () => {
        this.data.getAllData(this.petId).subscribe({
          next: (res) => (this.petdata = res),
        });
      },
    });
  }
}
