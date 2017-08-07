import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent } from '../components/app.component';
import { DoctorDetailComponent } from '../components/doctor-detail.component';
import { DoctorService }          from '../services/doctor.service';
import {CalendarComponent} from "../components/calendar.component";

@NgModule({
  declarations: [
    AppComponent,
    DoctorDetailComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DoctorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
