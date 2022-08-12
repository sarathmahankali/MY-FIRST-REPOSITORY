import { Component, Input, OnInit } from '@angular/core';
import { PetzeyserviceService } from 'src/app/Services/petzeyservice.service';

@Component({
  selector: 'app-testcard',
  templateUrl: './testcard.component.html',
  styleUrls: ['./testcard.component.scss'],
})
export class TestcardComponent implements OnInit {
  testNames: any[] = []; // master data
  RecommendedTests: any = []; // Recommended tests
  testReports: any = []; // Testreports
  term: string;

  AddedTest: any;

  @Input() appointmentId = '';

  constructor(private services: PetzeyserviceService) {}

  ngOnInit(): void {
    this.services.GetAllTests().subscribe((item) => {
      this.testNames = item;
    });

    this.services
      .GetRecommendedTests(this.appointmentId)
      .subscribe((recommended) => {
        this.RecommendedTests = recommended;
      });

    this.services.GetTestReports().subscribe((reports) => {
      this.testReports = reports;
    });
  }

  onselect(e) {
    if (e.target.value != '') {
      let temp!: number;
      this.testNames.forEach((element) => {
        if (element.Name == e.target.value) {
          temp = element.Id;
        }
      });
      this.AddedTest = { Id: temp, Name: e.target.value };
      var isDup = false;
      this.RecommendedTests.forEach((test) => {
        if (test.Id == this.AddedTest.Id) {
          isDup = true;
        }
      });
      if (!isDup && this.AddedTest.Id != undefined) {
        this.services.AddTest(this.appointmentId, this.AddedTest).subscribe();
        this.RecommendedTests.push(this.AddedTest);
      }

      e.target.value = '';

      this.services.GetTestReports().subscribe((reports) => {
        this.testReports = reports;
      });
    }
  }

  showMat(): boolean {
    return this.term != null && this.term != '';
  }

  removeTest(t: any) {
    this.services.GetTestReports().subscribe((reports) => {
      this.testReports = reports;
    });

    let reportID: any;
    this.testReports.forEach((report) => {
      if (report.TestId == t.Id) {
        reportID = report.Id;

        this.services.deleteTest(reportID, this.appointmentId).subscribe({
          error: (err) => console.log(err),
        });
      }
    });

    for (var i = 0; i < this.RecommendedTests.length; i++) {
      if (this.RecommendedTests[i].Id == t.Id)
        this.RecommendedTests.splice(i, 1);
    }
  }
}
