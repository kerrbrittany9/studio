import { Component, Input, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css'],
  providers: [TeacherService]
})
export class EditTeacherComponent implements OnInit {
  @Input() selectedTeacher;

  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
  }

  beginUpdatingTeacher(teacherToUpdate){
    this.teacherService.updateTeacher(teacherToUpdate);
  }

}
