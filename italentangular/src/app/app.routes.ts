import { SeminariesComponent } from './components/seminaries/seminaries.component';
import { StudentEngagementComponent } from './components/student-engagement/student-engagement.component';
import { InnovatieComponent } from './components/innovatie/innovatie.component';
import { InternationaliseringComponent } from './components/internationalisering/internationalisering.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import {Routes} from '@angular/router';


export const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'inter', component: InternationaliseringComponent },
  { path: 'inno', component: InnovatieComponent },
  { path: 'sem', component: SeminariesComponent },
  { path: 'student', component: StudentEngagementComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
