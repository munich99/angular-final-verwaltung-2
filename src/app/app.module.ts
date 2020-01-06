import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './start/login/login.component';
import { AdminComponent } from './start/admin/admin.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, AdminComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
