import { Pet } from "./appointmentPet.model";
import { PetParent } from "./appointmentPetparent.model";
import { Vet } from "./appointmentVet.model";

export class Appointment {
    appointmentDate: Date;
    appointmentTime: string;
    issue: string;
    reason: string;
    pet: Pet;
    parent: PetParent;
    vet: Vet;
  
    constructor(
      appointmentDate: Date,
      appointmentTime: string,
      issue: string,
      reason: string
    ) {
      this.appointmentDate = appointmentDate;
      this.appointmentTime = appointmentTime;
      this.issue = issue;
      this.reason = reason;
    }
  }
  