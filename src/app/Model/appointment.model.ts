export class Appointment {
    AppointmentId: number;
    AppointmentDate: Date;
    AppointmentTime: string;
    AppointmentStatus: string;
    Issue: string;
    PetName: string;
  
    constructor(
      AppointmentId: number,
      AppointmentDate: Date,
      AppointmentTime: string,
      AppointmentStatus: string,
      Issue: string,
      PetName: string
    ) {
      this.AppointmentId = AppointmentId;
      this.AppointmentDate = AppointmentDate;
      this.AppointmentTime = AppointmentTime;
      this.AppointmentStatus = AppointmentStatus;
      this.Issue = Issue;
      this.PetName = PetName;
    }
  }
  