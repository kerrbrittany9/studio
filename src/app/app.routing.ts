import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { TeachersComponent }   from './teachers/teachers.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';


const appRoutes: Routes = [
  {
  path: '',
  component: WelcomeComponent
  },
  {
  path: 'about',
  component: AboutComponent
  },
  {
    path: 'teachers',
    component: TeachersComponent
  },
  {
    path: 'teachers/:id',
    component: TeacherProfileComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
