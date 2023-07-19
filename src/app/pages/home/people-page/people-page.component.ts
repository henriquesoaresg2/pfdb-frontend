import { Component } from '@angular/core';

@Component({
    selector: 'app-people-page',
    templateUrl: './people-page.component.html',
    styleUrls: ['./people-page.component.scss']
})
export class PeoplePageComponent {
    peopleList = [
        {id: 1, name: 'henriques', cpf: '59398517035'},
        {id: 2, name: 'jards', cpf: '46379197036'},
        {id: 3, name: 'joao', cpf: '91922207039'},
    ]
    isSearchBarVisible: boolean = false
    searchValue: string = ''

    constructor(){}

    toggleSearchBar(){
        this.isSearchBarVisible = !this.isSearchBarVisible
        if(!this.isSearchBarVisible){
            this.searchValue = ''
        }
    }
}
