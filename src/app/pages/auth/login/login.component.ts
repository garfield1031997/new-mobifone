import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errorLogin: any;
  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
    private authService: AuthenticationService
  ) {}
  
  data = {
    type: {
      phone: 'phone',
      password: 'password',
    },
  };
  ngOnInit(): void {}

  login(ev) {
    
  }
  routeTo(e) {
    console.log(e);
  }
}
