import { Component, Input } from '@angular/core';
import { Doctor } from '../models/doctor';

@Component({
  selector: 'doctor-detail',
  templateUrl: '../views/doctor-detail.component.html',
  styleUrls: ['../styles/doctor-detail.component.css']
})

export class DoctorDetailComponent {
  @Input() doctors: Doctor[];
}
