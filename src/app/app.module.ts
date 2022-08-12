import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsTabComponent } from './settings-tab/settings-tab.component';
import { DocCardComponent } from './doc-card/doc-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
//import { ViewdoctorpatientcardService } from './Services/viewdoctorpatientcard.service';
import { AuthenticationService } from './Services/authentication.service';

import { DoctorProfilePhotoComponent } from './doctor-profile-photo/doctor-profile-photo.component';
import { VitalsComponent } from './vitals/vitals.component';
import { ProfileComponent } from './profile/profile.component';
//import { TestComponent } from './test/test.component';
import { ConfirmdialogComponent } from './confirmdialog/confirmdialog.component';
// import { AddAllPrescriptionComponent } from './add-all-prescription/add-all-prescription.component';
// import { EditAllPrescriptionComponent } from './edit-all-prescription/edit-all-prescription.component';
import { ViewAllPrescriptionComponent } from './view-all-prescription/view-all-prescription.component';
// import { MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
// import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { EditAllPrescriptionComponent } from './edit-all-prescription/edit-all-prescription.component';
import { AddAllPrescriptionComponent } from './add-all-prescription/add-all-prescription.component';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MedicineNameFilter } from './medicineNameFilter.pipe';
import { AllAppointmentsComponent } from './all-appointments/all-appointments.component';
import { AppointmentgridviewComponent } from './appointmentgridview/appointmentgridview.component';
import { AddAppointmentsComponent } from './add-appointments/add-appointments.component';
import { FilterPipe } from './filter.pipe';
//import { AppointmentConformationComponent } from '/appointment-conformation/appointment-conformation.component';
import { DatePipe } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { VitalcardComponent } from './view-details/vitalcard/vitalcard.component';
import { PrescriptioncardComponent } from './view-details/prescriptioncard/prescriptioncard.component';
import { TestcardComponent } from './view-details/testcard/testcard.component';
import { AddprescriptionComponent } from './view-details/addprescription/addprescription.component';
import { EditprescriptionComponent } from './view-details/editprescription/editprescription.component';
import { CloseappointmentDialogComponent } from './view-details/closeappointment-dialog/closeappointment-dialog.component';
import { PetTabComponent } from './pet-tab/pet-tab.component';
import { PetcardComponent } from './view-details/petcard/petcard.component';
import { SignupComponent } from './signup/signup.component';

//import { MatCardModule } from '@angular/material/card';
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { LandingPageComponent } from './landing-page/landing-page.component';
// import { TopNavbarComponent } from './top-navbar/top-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SideNavbarComponent,
    // LandingPageComponent,
    DashboardComponent,
  
    SettingsTabComponent,
   
    DocCardComponent,
 
    ViewDetailsComponent,
   
    DoctorProfilePhotoComponent,
    VitalsComponent,
    MedicineNameFilter,
    ProfileComponent,
    ConfirmdialogComponent,
    AddAllPrescriptionComponent,
    EditAllPrescriptionComponent,
    ViewAllPrescriptionComponent,
    AllAppointmentsComponent,
    AppointmentgridviewComponent,
    AddAppointmentsComponent,
    FilterPipe,
   
   
    AllAppointmentsComponent,
    ProfileSettingsComponent,
    
    VitalcardComponent,
    PrescriptioncardComponent,
    TestcardComponent,
    AddprescriptionComponent,
    EditprescriptionComponent,
    CloseappointmentDialogComponent,
    PetTabComponent,
    ViewDetailsComponent,
    // TopNavbarComponent
    PetcardComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    MatButtonModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
   
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatStepperModule,
    MatGridListModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
   
    HttpClientModule,
    AuthenticationService,
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// providers: [AuthenticationService, AuthGuard,
//   {
//     provide: HTTP_INTERCEPTORS,
//     useClass: AuthInterceptor,
//     multi: true
//   }],
// bootstrap: [AppComponent]
// })
