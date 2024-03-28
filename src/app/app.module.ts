import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { JobListComponent } from './job/job-list/job-list.component';
import { JobDetailComponent } from './job/job-detail/job-detail.component';
import { AuthComponent } from './services/auth/auth.component';
import { JobComponent } from './services/job/job.component';
import { UserComponent } from './services/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    JobListComponent,
    JobDetailComponent,
    AuthComponent,
    JobComponent,
    UserComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
