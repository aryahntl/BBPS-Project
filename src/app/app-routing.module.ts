import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectManagementComponent } from './subject-management/subject-management.component';
import { LoginComponent } from './user-auth/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect root to login
  { path: 'login', component: LoginComponent },          // Login page
  { path: 'subject-management', component: SubjectManagementComponent }, // Subject Management page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
