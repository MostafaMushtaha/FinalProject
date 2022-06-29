import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { Home2Component } from 'src/app/pages/home2/home2.component';
import { AboutUsComponent } from 'src/app/pages/about-us/about-us.component';
import { ContactUsComponent } from 'src/app/pages/contact-us/contact-us.component';
import { SignUpComponent } from 'src/app/pages/sign-up/sign-up.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { VideoCallComponent } from 'src/app/pages/video-call/video-call.component';
import { ForgetPassComponent } from 'src/app/pages/forget-pass/forget-pass.component';
import { PatientSignUpComponent } from 'src/app/pages/patient-sign-up/patient-sign-up.component';
import { NurseSignUpComponent } from 'src/app/pages/nurse-sign-up/nurse-sign-up.component';
import { DoctorSignUpOneComponent } from 'src/app/pages/doctor-sign-up-one/doctor-sign-up-one.component';
// import { Patient2Component } from 'src/app/pages/patient2/patient2.component';
// import { DocSignup2Component } from 'src/app/pages/doc-signup2/doc-signup2.component';
// import { NurseSignup2Component } from 'src/app/pages/nurse-signup2/nurse-signup2.component';
import { SearchResultsComponent } from 'src/app/pages/search-results/search-results.component';
import { DoctorProfileComponent } from 'src/app/pages/doctor-profile/doctor-profile.component';
import { PatientProfileComponent } from 'src/app/pages/patient-profile/patient-profile.component';
import { NurseProfileComponent } from 'src/app/pages/nurse-profile/nurse-profile.component';
import { InsuranceSelectorComponent } from 'src/app/pages/insurance-selector/insurance-selector.component';




const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'home2', component: Home2Component },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'login', component: LoginComponent },
      { path: 'video-call', component: VideoCallComponent },
      { path: 'forget-password', component: ForgetPassComponent },
      { path: 'patient-signup-phase-1', component: PatientSignUpComponent },
      { path: 'insurance-selector', component: InsuranceSelectorComponent },
      // { path: 'patient-signup-phase-2', component: Patient2Component },
      { path: 'nurse-signup-phase-1', component: NurseSignUpComponent },
      // { path: 'nurse-signup-phase-2', component: NurseSignup2Component },
      { path: 'doctor-signup-phase-1', component: DoctorSignUpOneComponent },
      // { path: 'doctor-signup-phase-2', component: DocSignup2Component },
      { path: 'search-results', component: SearchResultsComponent },
      { path: 'doctor-profile', component: DoctorProfileComponent },
      { path: 'patient-profile', component: PatientProfileComponent },
      { path: 'nurse-profile', component: NurseProfileComponent },
      
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
