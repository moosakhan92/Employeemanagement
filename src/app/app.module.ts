import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './Header/header.component';
import { GrComponent } from './gr/gr.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MyformComponent } from './myform/myform.component';
import { NewformComponent } from './newform/newform.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { Header2Component } from './header2/header2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from './user.service';
import { GetServiceService } from './get-service.service';
import { AuthGuard } from './auth.guard';
import { GetjsonComponent } from './getjson/getjson.component';
import { UserformComponent } from './userform/userform.component';
import { Http } from '@angular/http';
import { ValidationFormComponent } from './validation-form/validation-form.component';
import { AddempComponent } from './userform/addemp/addemp.component';
import { MypipePipe } from './mypipe.pipe';
import { PipesComponent } from './pipes/pipes.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    PageNotFoundComponent,
    HeaderComponent,
    GrComponent,
    AuthenticationComponent,
    MyformComponent,
    NewformComponent,
    LoginComponent,
    FooterComponent,
    Header2Component,
    DashboardComponent,
    GetjsonComponent,
    UserformComponent,
    ValidationFormComponent,
    AddempComponent,
    MypipePipe,
    PipesComponent,
    UploadfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService, AuthGuard, GetServiceService, Http],
  bootstrap: [AppComponent]
})
export class AppModule { }  
