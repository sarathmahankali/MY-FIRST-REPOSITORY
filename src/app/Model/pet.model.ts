import { ContactDetails } from './contact.model';

export class PetInfo {
  PetID: number;
  PetPicture: string;
  FirstName: string;
  LastName: string;
  DOB: Date;
  // Gender: string;
  BloodGroup: string;
  ContactDetails: ContactDetails;
  constructor(
    petId: number,
    petPic: string,
    firstName: string,
    dob: Date,
    g: number,
    bg: number,
    contacts: ContactDetails
  ) {
    this.PetID = petId;
    this.PetPicture = petPic;
    this.FirstName = firstName;
    this.DOB = dob;
    // this.Gender =
    //   (g == 0 && 'Male') || (g == 1 && 'Female') || (g == 2 && 'Other');
    this.ContactDetails = contacts;
    this.BloodGroup = this.getBloodGroup(bg);
  }

  private getBloodGroup(b: number): string {
    switch (b) {
      case 0:
        return 'A+';
      case 1:
        return 'B+';
      case 2:
        return 'AB+';
      case 3:
        return 'O+';
      case 4:
        return 'A-';
      case 5:
        return 'B-';
      case 6:
        return 'AB-';
      case 7:
        return 'O-';
      default:
        return "";
    }
  }
}
