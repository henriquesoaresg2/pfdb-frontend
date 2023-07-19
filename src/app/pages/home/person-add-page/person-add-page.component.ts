import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { Person } from 'src/app/models/person.model';

@Component({
    selector: 'app-person-add-page',
    templateUrl: './person-add-page.component.html',
    styleUrls: ['./person-add-page.component.scss']
})
export class PersonAddPageComponent {
    person: Person = { id: undefined, name: '', cpf: '', birthdayDate: '', contacts: [] };
    newContact: Contact = { id: undefined, name: '', phone: '', email: '', personId: undefined }

    newContactForm: boolean = true;

    constructor() { }

    addContact(){
        this.newContactForm = false
    }
}
