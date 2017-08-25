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
  updateTeacher(localUpdatedTeacher){
    var teacherEntryInFirebase = this.getTeacherById(localUpdatedTeacher.$key);
      teacherEntryInFirebase.update({name: localUpdatedTeacher.name,
                              style: localUpdatedTeacher.style,
                              profile: localUpdatedTeacher.profile, workshops: localUpdatedTeacher.workshops, image: localUpdatedTeacher.image});
  }

  deleteTeacher(localTeacherToDelete){
    var teacherEntryInFirebase = this.getTeacherById(localTeacherToDelete.$key);
    teacherEntryInFirebase.remove();
  }
}
