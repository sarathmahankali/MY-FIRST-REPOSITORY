export class Vet{
    vetid: Number;
    vetName: string;
    speciality: string;
    phoneNumber: string;
    constructor(id: Number, name: string, spec: string, ph: string) {
        this.vetid = id;
        this.vetName = name;
        this.speciality = spec;
        this.phoneNumber = ph;
    }
}