import { Component, OnInit } from '@angular/core';
import { VitalDTO } from '../Model/vital.model';
import { VitalService } from '../Services/vital.service';

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.scss'],
})
export class VitalsComponent implements OnInit {
  constructor(public Vital: VitalService) {}

  Vitals!: VitalDTO;
  isDisabled: boolean = true;
  ans: string = 'Edit';

  ngOnInit(): void {
    // this.Vital.getData().subscribe((e) => {
    //   this.Vitals = e;
    // });
  }

  check(a = this.ans) {
    if (a === 'Edit') {
      this.Edit();
    } else {
      this.Save();
    }
  }

  Edit() {
    this.isDisabled = false;
    this.ans = 'Save';
  }

  Save() {
    var num1 = parseFloat(
      (<HTMLInputElement>document.getElementById('ecg')).value
    );
    this.Vitals.ecg = num1;

    var num2 = parseFloat(
      (<HTMLInputElement>document.getElementById('temp')).value
    );
    this.Vitals.temperature = num2;

    

    var num4 = parseFloat(
      (<HTMLInputElement>document.getElementById('respiration')).value
    );
    this.Vitals.respiration_rate = num4;

    this.Vital.editData(this.Vitals);
    this.isDisabled = true;
    this.ans = 'Edit';
  }
}
