export class Contact {
    Id: number;
    vet_phone_number: number;
    vet_email_id: string;

    constructor(Id: number, vet_phone_number: number, vet_email_id: string,) {
        this.Id = Id;
        this.vet_phone_number = vet_phone_number;
        this.vet_email_id = vet_email_id;

    }

}
