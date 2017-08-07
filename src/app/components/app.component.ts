import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { Doctor } from '../models/doctor';

@Component({
  selector: 'app-root',
  templateUrl: '../views/app.component.html',
  styleUrls: ['../styles/app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  doctors: Doctor[];

  constructor(private doctorService: DoctorService) { }

  getDoctors(): void {
    this.doctorService.getDoctors().then(doctors => this.doctors = doctors);
  }

  ngOnInit(): void {
    this.getDoctors();
  }
}


