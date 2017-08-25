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

  getTeacherById(teacherId: string) {
    return this.database.object('teachers/' + teacherId);
  }
}
