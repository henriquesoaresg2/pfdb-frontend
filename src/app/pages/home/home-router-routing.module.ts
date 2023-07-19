import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PeoplePageComponent } from './people-page/people-page.component';
import { PersonAddPageComponent } from './person-add-page/person-add-page.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: 'people', component: PeoplePageComponent },
            { path: 'person-add', component: PersonAddPageComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRouterRoutingModule { }
