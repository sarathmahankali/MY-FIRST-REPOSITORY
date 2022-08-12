import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pets } from "../Mock/mockPet";
import { petParentList } from "../Mock/mockPetParent";
import { Pet } from "../Model/appointmentPet.model";
import { PetParent } from "../Model/appointmentPetparent.model";

@Injectable({
    providedIn: 'root'
})
export class AddAppointmentService{
    constructor(private http:HttpClient){}
    getAllParent() {
        const parent:PetParent[] = petParentList;
        return parent;
    }
    getAllPetsByParent(){
        const petList:Pet[] = Pets;
        return petList;
    }

    createAppointment(data: any) {
        const url = "https://localhost:44398/api/appointments/appointment/create";
        return this.http.post(url, data);
    }
}