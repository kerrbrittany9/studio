import { Injectable } from '@angular/core';
import { Teacher } from './teacher.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class TeacherService {
  teachers: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.teachers = database.list('teachers');
}

  getTeachers() {
    return this.teachers;
  }

  addTeacher(newTeacher: Teacher) {
    this.teachers.push(newTeacher);
  }

  getTeacherById(teacherId: number){
  //  for (var i = 0; i <= TEACHERS.length - 1; i++) {
  //    if (TEACHERS[i].id === teacherId) {
  //      return TEACHERS[i];
  //    }
  //  }
 }

}
