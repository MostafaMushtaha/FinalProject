import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { langHelper } from 'src/app/services/helpers-and-utilities/language-helper';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userProfile;

  isLoading: boolean = false;
  isLoggedIn: boolean = false;

  displayLoginModal: boolean = false;

  langVar;
  constructor(private authService: AuthenticationService, public langHelper: langHelper
    ,  private router: Router) {
    this.langVar = this.langHelper.initializeMode();
 
  }



  ngOnInit(): void {
  }

  getUserDetails() {
    this.authService.GetAccountViaToken().subscribe(res => {
      if (res.succeeded) {
        this.userProfile = res.data;
        this.isLoggedIn = true;
      }
    }, error => {
      console.log(error);
    });
  }


  loginFailed: boolean = false;
  login() {
  //   this.isLoading = true;
  //   const model = {
  //     usernameOrEmail: this.LoginForm.value.loginIdentifier,
  //     password: this.LoginForm.value.password
  //   }
  //   this.authService.login(model).subscribe(res => {
  //     if (res.succeeded) {
  //       this.isLoading = false;
  //       this.displayLoginModal = false;
  //       this.LoginForm.reset();
  //     }
  //   }, error => {
  //     console.log(error);
  //     this.isLoading = false;
  //     this.loginFailed = true;
  //     this.LoginForm.reset();
  //   });
  }

}
