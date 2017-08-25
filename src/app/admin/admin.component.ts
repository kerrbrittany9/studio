import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { Teacher } from '../teacher.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [TeacherService]
})
export class AdminComponent implements OnInit {

  constructor(private teacherSErvice: TeacherService) { }

  ngOnInit() {
  }

  submitForm(name: string, style: string, profile: string, workshops: string, image: string) {
  var newTeacher: Teacher = new Teacher(name, style, profile, workshops, image);
  this.teacherService.addTeacher(newTeacher);
}

}
