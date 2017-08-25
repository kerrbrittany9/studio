import { Injectable } from '@angular/core';
import { Teacher } from './teacher.model';
import { TEACHERS } from './mock-teacher';


@Injectable()
export class TeacherService {

  constructor() { }

  getTeachers() {
    return TEACHERS;
  }

  getTeacherById(teacherId: number){
   for (var i = 0; i <= TEACHERS.length - 1; i++) {
     if (TEACHERS[i].id === teacherId) {
       return TEACHERS[i];
     }
   }
 }

}
