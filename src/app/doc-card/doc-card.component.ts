import { Component, OnInit } from '@angular/core';
import { VetDataService } from '../Services/vet-data.service';
// import { ViewdoctorpatientcardService } from '../Services/viewdoctorpatientcard.service';

@Component({
  selector: 'app-doc-card',
  templateUrl: './doc-card.component.html',
  styleUrls: ['./doc-card.component.scss'],
})
export class DocCardComponent implements OnInit {
  constructor(private data: VetDataService) {}
  //ID = 4; //get this from view-details component
  doctordata: any;
  ngOnInit(): void {
    // this.data.getAllData().subscribe((allData) => {
    //   console.log(allData);
    //   this.doctordata = allData;
    // });
  }
}
