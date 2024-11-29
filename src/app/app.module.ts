import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SubjectManagementComponent } from './subject-management/subject-management.component';

@NgModule({
  declarations: [
    AppComponent, // Ensure this is declared
    SubjectManagementComponent,
  ],
  imports: [
    BrowserModule, // Ensure BrowserModule is imported
    FormsModule, // Ensure FormsModule is imported for two-way data binding
  ],
  providers: [],
  bootstrap: [AppComponent], // Ensure AppComponent is listed here
})
export class AppModule {}
