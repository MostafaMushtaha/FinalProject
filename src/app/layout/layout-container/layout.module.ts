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

@NgModule({
  providers: [ConfirmationService],
  declarations: [LayoutComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    IndexOfPipe,
    AboutUsComponent,
    ContactUsComponent,
    SignUpComponent
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
