import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './app.register.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    RegisterComponent,

  ],
  bootstrap: [RegisterComponent],
})
export class AppModule { }