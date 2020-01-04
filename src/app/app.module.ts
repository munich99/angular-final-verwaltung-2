import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './start/login/login.component';
import { AdminComponent } from './start/admin/admin.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, AdminComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
