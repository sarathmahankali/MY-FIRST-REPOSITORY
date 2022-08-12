export class Pet{
    petId: Number;
    petName: string;
    gender: string;
    dob: Date;
    constructor(id: Number, name: string, gender: string, dob: Date){
        this.petId = id;
        this.petName = name;
        this.gender = gender;
        this.dob = dob;
    }    
}