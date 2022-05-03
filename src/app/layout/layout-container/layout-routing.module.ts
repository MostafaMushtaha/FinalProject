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
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
