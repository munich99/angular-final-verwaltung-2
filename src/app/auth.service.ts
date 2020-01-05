import { Injectable } from '@angular/core';
import { User} from '../start/interfaces/user'

@Injectable({
  providedIn:'root'
})
export class AuthService {

    constructor() { }

  // deklariert Token zum Anmenden -- art der Variablen
  // setzt #Tokenkey und Tokenvalue#  über localStorage
  public logIn(userInfo:User){
    localStorage.setItem('ACCESS_TOKEN', "access_token")
  }

  // prüft ob Token besteht/ user angemeldet ist
  // im localStorage
  public isLoggedIn(){
    localStorage.getItem('ACCESS_TOKEN')
  }

  // abmelden  -- Token löschen aus dem localStorage
  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }  

}