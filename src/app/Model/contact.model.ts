export class ContactDetails {
    Id: number;
    PhoneNumber: string;
    Email: string;
    constructor(id: number, ph: string, email: string) {
      this.Id = id;
      this.PhoneNumber = ph;
      this.Email = email;
    }
  }