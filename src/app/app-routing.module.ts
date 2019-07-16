import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { GrComponent } from './gr/gr.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MyformComponent } from './myform/myform.component';
import { NewformComponent } from './newform/newform.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'gr', component: GrComponent },
  { path: 'myform', component: MyformComponent },
  { path: 'newform', component: NewformComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
