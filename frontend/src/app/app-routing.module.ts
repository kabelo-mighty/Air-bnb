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
{ path: 'dashboard', component: DashboardComponent },
{ path: 'booking', component: BookingComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'room', component: RoomComponent },
{path: 'profile', component: ProfileComponent },
{path:'roombookin',component:RoombookinComponent},
{path:'bookingview',component:BookingviewComponent},
{path:'bookingedit',component:BookingeditComponent},{path:'addroom',component:AddroomComponent},
{path:'viewroom',component:ViewroomComponent},{path:'editroom',component:EditroomComponent},{path:'Profileadmin',component:ProfileadminComponent},
{path:'viewbookings',component:ViewbookingsComponent},{path:'dashboardadmin',component:DashboardadminComponent},];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
