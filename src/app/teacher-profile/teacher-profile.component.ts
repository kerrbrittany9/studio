import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Teacher } from '../teacher.model';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css'],
  providers: [TeacherService]
})
export class TeacherProfileComponent implements OnInit {
  teacherId: number;
  teacherToDisplay: Teacher;

  constructor(private route: ActivatedRoute, private location: Location, private teacherService: TeacherService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.teacherId = parseInt(urlParameters['id']);
    });
    this.teacherToDisplay = this.teacherService.getTeacherById(this.teacherId);
  }
}
