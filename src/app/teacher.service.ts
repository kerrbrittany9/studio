import { Injectable } from '@angular/core';
import { Teacher } from './teacher.model';
import { TEACHERS } from './mock-teacher';


@Injectable()
export class TeacherService {

  constructor() { }

  getTeachers() {
    return TEACHERS;
  }

}
