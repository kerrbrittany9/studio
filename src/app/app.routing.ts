import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { AdminComponent } from './admin/admin.component';
import { CalendarComponent } from './calendar/calendar.component';



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
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
