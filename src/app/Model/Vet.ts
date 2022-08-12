import { Contact } from "./VetContact";

export class Vet {
    id: number;
    vet_profile_image: string;
    vet_name: string;
    ContactDetails: Contact;
    vet_speciality: string;
    vet_practice_location: string;
    vet_npi_no: number;

    constructor(id: number, vet_profile_image: string, Name: string, vet_speciality: string, vet_practice_location: string, vet_npi_no: number, contactDetails: Contact) {
        this.id = id;
        this.vet_profile_image = vet_profile_image;
        this.vet_name = Name;
        this.ContactDetails = contactDetails;
        this.vet_speciality = vet_speciality;
        this.vet_npi_no = vet_npi_no;
        this.vet_practice_location = vet_practice_location;

    }


}
