import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PeoplePageComponent } from './people-page/people-page.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: 'people', component: PeoplePageComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRouterRoutingModule { }
