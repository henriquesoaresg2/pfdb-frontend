import { NgModule } from "@angular/core";
import { HomeRouterRoutingModule } from "./home-router-routing.module";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home.component";
import { ComponentsModule } from "src/app/components/components-module.module";
import { FormsModule } from "@angular/forms";
import { PeoplePageComponent } from "./people-page/people-page.component";

@NgModule({
    declarations: [
        HomeComponent,
        PeoplePageComponent,
    ],
    providers: [],
    imports: [
        CommonModule,
        FormsModule,
        ComponentsModule,
        HomeRouterRoutingModule,
    ],
    exports: [HomeComponent]
})
export class HomePageModule { }
