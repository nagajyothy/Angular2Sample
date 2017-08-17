import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StudentsComponent } from './app.students.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    StudentsComponent,

  ],
  bootstrap: [StudentsComponent],
})
export class StudentsModule { }