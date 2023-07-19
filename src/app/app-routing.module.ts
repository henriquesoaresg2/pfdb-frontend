import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // TODO: implement a login page with authentication by username and password
    {
        path: 'home',
        loadChildren: () =>
            import('./pages/home/home.module').then(
                (m) => m.HomePageModule
            ),
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
