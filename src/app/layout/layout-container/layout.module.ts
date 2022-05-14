import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CarouselModule } from 'primeng/carousel';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { NgOtpInputModule } from 'ng-otp-input';
import { DropdownModule } from 'primeng/dropdown';
import { IndexOfPipe } from 'src/app/services/pipes/index-of-pipe';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { TabViewModule } from 'primeng/tabview';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { CalendarModule } from 'primeng/calendar';
import { AboutUsComponent } from '../../pages/about-us/about-us.component';
import { ContactUsComponent } from '../../pages/contact-us/contact-us.component';
import { SignUpComponent } from '../../pages/sign-up/sign-up.component';
import { PanelModule } from 'primeng/panel'
import { ForgetPassComponent } from 'src/app/pages/forget-pass/forget-pass.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { VideoCallComponent } from 'src/app/pages/video-call/video-call.component';
import { Home2Component } from 'src/app/pages/home2/home2.component';
import { PatientSignUpComponent } from 'src/app/pages/patient-sign-up/patient-sign-up.component';
import { NurseSignUpComponent } from 'src/app/pages/nurse-sign-up/nurse-sign-up.component';
import { DoctorSignUpOneComponent } from 'src/app/pages/doctor-sign-up-one/doctor-sign-up-one.component';
import {RadioButtonModule} from 'primeng/radiobutton'
import { Patient2Component } from 'src/app/pages/patient2/patient2.component';



@NgModule({
  providers: [ConfirmationService],
  declarations: [
    LayoutComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    IndexOfPipe,
    AboutUsComponent,
    ContactUsComponent,
    SignUpComponent,
    ForgetPassComponent,
    LoginComponent,
    VideoCallComponent,
    Home2Component,
    PatientSignUpComponent,
    NurseSignUpComponent,
    DoctorSignUpOneComponent,
    Patient2Component,
  ],
  imports: [
    FormsModule,
    PanelModule,
    CommonModule,
    ButtonModule,
    SharedModule,
    DialogModule,
    ButtonModule,
    AvatarModule,
    DividerModule,
    TabViewModule,
    CarouselModule,
    PasswordModule,
    CalendarModule,
    RadioButtonModule,
    CarouselModule,
    DropdownModule,
    NgOtpInputModule,
    ConfirmPopupModule,
    ReactiveFormsModule,
    LayoutRoutingModule,
    ProgressSpinnerModule,
  ]
})
export class LayoutModule { }
