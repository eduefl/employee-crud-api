import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmplyeeAddComponent } from './emplyee-add/emplyee-add.component';
import { EmplyeeEditComponent } from './emplyee-edit/emplyee-edit.component';
import { EmplyeeGetComponent } from './emplyee-get/emplyee-get.component';

@NgModule({
  declarations: [
    AppComponent,
    EmplyeeAddComponent,
    EmplyeeEditComponent,
    EmplyeeGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
