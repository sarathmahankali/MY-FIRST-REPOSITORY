import { Component, Input, OnInit } from '@angular/core';
import { VitalDTO } from 'src/app/Model/vital.model';
import { VitalService } from 'src/app/Services/vital.service';

@Component({
  selector: 'app-vitalcard',
  templateUrl: './vitalcard.component.html',
  styleUrls: ['./vitalcard.component.scss'],
})
export class VitalcardComponent implements OnInit {
  @Input() appointmentId = '';
  constructor(public Vital: VitalService) {}

  Vitals!: VitalDTO;
  isDisabled: boolean = true;
  ans: string = 'Edit';

  ngOnInit(): void {
    this.Vital.getData(this.appointmentId).subscribe((e) => {
      this.Vitals = e;
    });
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

    var num3 = parseFloat(
      (<HTMLInputElement>document.getElementById('diabetes')).value
    );

    var num4 = parseFloat(
      (<HTMLInputElement>document.getElementById('respiration')).value
    );
    this.Vitals.respiration_rate = num4;

    this.Vital.editData(this.Vitals);
    this.isDisabled = true;
    this.ans = 'Edit';
  }
}
