import { Component, Input } from '@angular/core';
import {Day} from "../models/day";

@Component({
  selector: 'calendar',
  templateUrl: '../views/calendar.component.html',
  styleUrls: ['../styles/calendar.component.css']
})

export class CalendarComponent {
  @Input() days: Day[];
}
