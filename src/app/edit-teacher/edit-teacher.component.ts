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
  edit = false;

  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
  }

  beginUpdatingTeacher(teacherToUpdate){
    this.teacherService.updateTeacher(teacherToUpdate);
    this.edit=false;
  }

  beginDeletingTeacher(teacherToDelete){
    if(confirm("Are you sure you want to delete this teacher from the studio?")){
      this.teacherService.deleteTeacher(teacherToDelete);
    }
  }

  showEditForm() {
    this.edit = true;
  }

}
