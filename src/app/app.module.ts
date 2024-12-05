import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectManagementComponent } from './subject-management/subject-management.component';
import { LoginComponent } from './user-auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectManagementComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
