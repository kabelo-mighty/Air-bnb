import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomComponent } from './user/room/room.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ProfileComponent } from './user/profile/profile.component';

import { NavbarComponent } from './user/navbar/navbar.component';
import { FooterComponent } from './user/footer/footer.component';
import { BookingComponent } from './user/booking/booking.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { RoombookinComponent } from './user/roombookin/roombookin.component';
import { BookingviewComponent } from './user/bookingview/bookingview.component';
import { BookingeditComponent } from './user/bookingedit/bookingedit.component';
import { AddroomComponent } from './admin/addroom/addroom.component';
import { EditroomComponent } from './admin/editroom/editroom.component';
import { ViewroomComponent } from './admin/viewroom/viewroom.component';
import { ViewbookingsComponent } from './admin/viewbookings/viewbookings.component';
import { DashboardadminComponent } from './admin/dashboardadmin/dashboardadmin.component';
import { ProfileadminComponent } from './admin/profileadmin/profileadmin.component';
import { NavbaradminComponent } from './admin/navbaradmin/navbaradmin.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { GuardService } from './service/guard.service';
import { AuthService } from './service/auth.service';



RouterModule
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RegisterComponent,
    LoginComponent,
    RoomComponent,
    DashboardComponent,
    ProfileComponent,
 
    NavbarComponent,
    FooterComponent,
    BookingComponent,
    ContactComponent,
    RoombookinComponent,
    BookingviewComponent,
    BookingeditComponent,
    AddroomComponent,
    EditroomComponent,
    ViewroomComponent,
    ViewbookingsComponent,
    DashboardadminComponent,
    ProfileadminComponent,
    NavbaradminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule,NgxPaginationModule,NgxSpinnerModule,BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      {path:'dashboard',component:DashboardComponent},{path:'homepage',component:HomepageComponent},{path:'bookingedit',component:BookingeditComponent},{path:'viewroom',component:ViewroomComponent}
    ,{path:'addroom',component:AddroomComponent}
    ]),
  ],
  providers: [GuardService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
