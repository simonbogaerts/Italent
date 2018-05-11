import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InternationaliseringComponent } from './components/internationalisering/internationalisering.component';
import { BusItComponent } from './components/bus-it/bus-it.component';
import { StageComponent } from './components/stage/stage.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { InnovatieComponent } from './components/innovatie/innovatie.component';
import { RestComponent } from './components/rest/rest.component';
import { PythonComponent } from './components/python/python.component';
import { FooterComponent } from './components/footer/footer.component';
import { StudentEngagementComponent } from './components/student-engagement/student-engagement.component';
import { SeminariesComponent } from './components/seminaries/seminaries.component';
import { HascodeComponent } from './components/hascode/hascode.component';
import { StudyBuddyComponent } from './components/study-buddy/study-buddy.component';
import { UxsaComponent } from './components/sems/uxsa/uxsa.component';
import { AppfoundryComponent } from './components/sems/appfoundry/appfoundry.component';
import { CegekaComponent } from './components/sems/cegeka/cegeka.component';
import { CraftworkzComponent } from './components/sems/craftworkz/craftworkz.component';
import { EuricomComponent } from './components/sems/euricom/euricom.component';
import { IcappsComponent } from './components/sems/icapps/icapps.component';
import { InfofarmComponent } from './components/sems/infofarm/infofarm.component';
import { MediafoundryComponent } from './components/sems/mediafoundry/mediafoundry.component';
import { BreakfastComponent } from './components/sems/breakfast/breakfast.component';
import { SmartictComponent } from './components/sems/smartict/smartict.component';
import { YellowgroundsComponent } from './components/sems/yellowgrounds/yellowgrounds.component';
import { InternationaliseringrefComponent } from './components/reflecties/internationaliseringref/internationaliseringref.component';
import { SeminariesrefComponent } from './components/reflecties/seminariesref/seminariesref.component';
import { StudentengagementrefComponent } from './components/reflecties/studentengagementref/studentengagementref.component';
import { InnovatierefComponent } from './components/reflecties/innovatieref/innovatieref.component';
import { EindreflectieComponent } from './components/reflecties/eindreflectie/eindreflectie.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InternationaliseringComponent,
    BusItComponent,
    StageComponent,
    HomePageComponent,
    InnovatieComponent,
    RestComponent,
    PythonComponent,
    FooterComponent,
    StudentEngagementComponent,
    SeminariesComponent,
    HascodeComponent,
    StudyBuddyComponent,
    UxsaComponent,
    AppfoundryComponent,
    CegekaComponent,
    CraftworkzComponent,
    EuricomComponent,
    IcappsComponent,
    InfofarmComponent,
    MediafoundryComponent,
    BreakfastComponent,
    SmartictComponent,
    YellowgroundsComponent,
    InternationaliseringrefComponent,
    SeminariesrefComponent,
    StudentengagementrefComponent,
    InnovatierefComponent,
    EindreflectieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
