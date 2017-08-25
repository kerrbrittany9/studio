import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher.model';
import { Router } from '@angular/router';
import { TeacherService } from '../teacher.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
  providers: [TeacherService]
})
export class TeachersComponent implements OnInit {
  teachers: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  filterByStyle: string = "allTeachers";

  constructor(private router: Router, private teacherService: TeacherService){}

  ngOnInit(){
    this.teachers = this.teacherService.getTeachers();
  }

  goToDetailPage(clickedTeacher) {
     this.router.navigate(['teachers', clickedTeacher.$key]);
   }
   
  onChange(optionFromMenu) {
    this.filterByStyle = optionFromMenu;
  }
}
