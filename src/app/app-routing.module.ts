import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCenterComponent } from './add-center/add-center.component';
import { RemoveCenterComponent } from './remove-center/remove-center.component';
import { AddTestComponent } from './add-test/add-test.component';
import { RemoveTestComponent } from './remove-test/remove-test.component';
import { ApproveAppointmentComponent } from './approve-appointment/approve-appointment.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { ShowAllAppointmentsComponent } from './show-all-appointments/show-all-appointments.component';
import { RemoveUserComponent } from './remove-user/remove-user.component';
import { AdminOperationsComponent } from './admin-operations/admin-operations.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:"addcenter",component:AddCenterComponent},
  {path:"removecenter",component:RemoveCenterComponent},
  {path:"addtest",component:AddTestComponent},
  {path:"removetest",component:RemoveTestComponent}
  ,{path:"approveappointment",component:ApproveAppointmentComponent},
  {path:"customerregister",component:CustomerRegisterComponent},
  {path:"adminregister",component:AdminRegisterComponent},
  {path:"makeappointment",component:MakeAppointmentComponent},
  {path:"showallappointments",component:ShowAllAppointmentsComponent},
  {path:"removeuser",component:RemoveUserComponent},
  {path:"adminoperations",component:AdminOperationsComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"header",component:HeaderComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
