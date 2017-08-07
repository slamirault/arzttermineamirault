import { Injectable } from '@angular/core';

import { Doctor } from '../models/doctor';
import { DOCTORS } from '../../data/mock-doctors';

@Injectable()
export class DoctorService {
  getDoctors(): Promise<Doctor[]> {
    return Promise.resolve(DOCTORS);
  }
}
