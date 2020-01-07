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

    // Variablen Deklaratin für reactives Formular
    loginForm:FormGroup;
    isSubmitted = false;

  ngOnInit() {
    // Livecycle Event beim Start ## für Daten zum Anmelden
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls(){
    return this.loginForm.controls;
  }

  login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.formControls.invalid){
      return;
    }
    // geht zu AuthService Componente, dann zu Methode logIn()
    this.authService.login(this.loginForm.value);  
    // wechselt zu admin Seite ## nach dem einloggen
    this.router.navigateByUrl('admin');

  }

}