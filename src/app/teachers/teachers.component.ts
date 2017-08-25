import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher.model';
import { Router } from '@angular/router';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
  providers: [TeacherService]
})
export class TeachersComponent implements OnInit {
  teachers: Teacher[];

  constructor(private router: Router, private teacherService: TeacherService){}

  ngOnInit(){
    this.teachers = this.teacherService.getTeachers(); 
  }

  goToDetailPage(clickedTeacher: Teacher) {
     this.router.navigate(['teachers', clickedTeacher.id]);
   };
}