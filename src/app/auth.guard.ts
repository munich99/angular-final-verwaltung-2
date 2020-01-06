import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate {
  // constructor importiert erstellt den Service und importiert die Deklaration
  constructor(private authService:AuthService){}
  // Methode überprüft ob der User eingelogt ist
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // Methode prüft ob der User eingeloggt ist #true
      return this.authService.isLoggedIn();
  }
}
