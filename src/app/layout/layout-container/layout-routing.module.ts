import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { InsuranceHomeComponent } from 'src/app/pages/insurance-home/insurance-home.component';
import { AboutUsComponent } from 'src/app/pages/about-us/about-us.component';
import { ContactUsComponent } from 'src/app/pages/contact-us/contact-us.component';
import { SignUpComponent } from 'src/app/pages/sign-up/sign-up.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { ForgetPassComponent } from 'src/app/pages/forget-pass/forget-pass.component';
import { PatientSignUpComponent } from 'src/app/pages/patient-sign-up/patient-sign-up.component';
import { NurseSignUpComponent } from 'src/app/pages/nurse-sign-up/nurse-sign-up.component';
import { DoctorSignUpOneComponent } from 'src/app/pages/doctor-sign-up-one/doctor-sign-up-one.component';
import { SearchResultsComponent } from 'src/app/pages/search-results/search-results.component';
import { DoctorProfileComponent } from 'src/app/pages/doctor-profile/doctor-profile.component';
import { PatientProfileComponent } from 'src/app/pages/patient-profile/patient-profile.component';
import { NurseProfileComponent } from 'src/app/pages/nurse-profile/nurse-profile.component';
import { InsuranceSelectorComponent } from 'src/app/pages/insurance-selector/insurance-selector.component';
import { PatientEditProfileComponent } from 'src/app/pages/patient-edit-profile/patient-edit-profile.component';
import { DoctorEditProfileComponent } from 'src/app/pages/doctor-edit-profile/doctor-edit-profile.component';
import { NurseEditProfileComponent } from 'src/app/pages/nurse-edit-profile/nurse-edit-profile.component';



const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'insurance-home', component: InsuranceHomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'login', component: LoginComponent },
      { path: 'forget-password', component: ForgetPassComponent },
      { path: 'patient-signup', component: PatientSignUpComponent },
      { path: 'insurance-selector', component: InsuranceSelectorComponent },
      { path: 'nurse-signup', component: NurseSignUpComponent },
      { path: 'doctor-signup', component: DoctorSignUpOneComponent },
      { path: 'search-results', component: SearchResultsComponent },
      { path: 'doctor-profile', component: DoctorProfileComponent },
      { path: 'patient-profile', component: PatientProfileComponent },
      { path: 'nurse-profile', component: NurseProfileComponent },
      { path: 'patient-edit-profile', component: PatientEditProfileComponent },
      { path: 'doctor-edit-profile', component: DoctorEditProfileComponent },
      { path: 'nurse-edit-profile', component: NurseEditProfileComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
