import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LandingPageComponent} from './components/landing-page/landing-page.component'
import { LoginComponent } from './components/login/login.component'
import { SignupComponent } from './components/signup/signup.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FirestoreAdminService} from './services/firestore-admin.service';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrokersComponent } from './components/brokers/brokers.component';
import { AcademiasComponent } from './components/academias/academias.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminCuentasComponent } from './components/admin-cuentas/admin-cuentas.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminBrokersComponent } from './components/admin-brokers/admin-brokers.component';
import { AdminAcademiasComponent } from './components/admin-academias/admin-academias.component';
import { AdminQuestionsComponent } from './components/admin-questions/admin-questions.component';
import { FileDropDirective } from '../app/directives/file-drop.directive';
import { AppearDirective } from './directives/appear.directive';
import { TermsComponent } from './components/terms/terms.component';
import { ConditionsComponent } from './components/conditions/conditions.component';
import { AprendeComponent } from './components/aprende/aprende.component'
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { InvierteComponent } from './components/invierte/invierte.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AdminDashboardComponent,
    NavbarComponent,
    BrokersComponent,
    AcademiasComponent,
    QuestionsComponent,
    ProfileComponent,
    AdminCuentasComponent,
    AdminNavbarComponent,
    AdminBrokersComponent,
    AdminAcademiasComponent,
    AdminQuestionsComponent,
    FileDropDirective,
    AppearDirective,
    TermsComponent,
    ConditionsComponent,
    AprendeComponent,
    InvierteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    NoopAnimationsModule,
    SwiperModule
  ],
  providers: [FirestoreAdminService, {
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
