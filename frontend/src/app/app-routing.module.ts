import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddroomComponent } from './admin/addroom/addroom.component';
import { DashboardadminComponent } from './admin/dashboardadmin/dashboardadmin.component';
import { EditroomComponent } from './admin/editroom/editroom.component';
import { ProfileadminComponent } from './admin/profileadmin/profileadmin.component';
import { ViewbookingsComponent } from './admin/viewbookings/viewbookings.component';
import { ViewroomComponent } from './admin/viewroom/viewroom.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './service/auth.service';
import { BookingComponent } from './user/booking/booking.component';
import { BookingeditComponent } from './user/bookingedit/bookingedit.component';
import { BookingviewComponent } from './user/bookingview/bookingview.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RoomComponent } from './user/room/room.component';
import { RoombookinComponent } from './user/roombookin/roombookin.component';


const routes: Routes = [{path: 'register', component:RegisterComponent},
{ path: 'login', component: LoginComponent },
{path: 'homepage', component: HomepageComponent},
{ path: '', redirectTo: 'homepage', pathMatch: 'full' },
{ path: 'dashboard', component: DashboardComponent,canActivate:[AuthService] },
{ path: 'booking', component: BookingComponent ,canActivate:[AuthService]},
{ path: 'profile', component: ProfileComponent ,canActivate:[AuthService]},
{ path: 'room', component: RoomComponent ,canActivate:[AuthService]},
{path: 'profile', component: ProfileComponent ,canActivate:[AuthService]},
{path:'roombookin',component:RoombookinComponent,canActivate:[AuthService]},
{path:'bookingview',component:BookingviewComponent,canActivate:[AuthService]},
{path:'bookingedit',component:BookingeditComponent,canActivate:[AuthService]},
{path:'addroom',component:AddroomComponent,canActivate:[AuthService]},
{path:'viewroom',component:ViewroomComponent,canActivate:[AuthService]},
{path:'editroom',component:EditroomComponent,canActivate:[AuthService]},
{path:'Profileadmin',component:ProfileadminComponent,canActivate:[AuthService]},
{path:'viewbookings',component:ViewbookingsComponent,canActivate:[AuthService]},
{path:'dashboardadmin',component:DashboardadminComponent ,canActivate:[AuthService]} ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
