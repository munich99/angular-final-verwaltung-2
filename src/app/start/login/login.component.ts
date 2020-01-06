import { Component, OnInit } from '@angular/core';
// für Reactive Forms
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
// um zu Routen
import { Router} from '@angular/router';
// um zu Authentifizieren
import { AuthService } from '../../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private router:Router,
    private formBuilder:FormBuilder ) { }

    loginForm:FormGroup;
    isSubmitted = false;

  ngOnInit() {
  }

}