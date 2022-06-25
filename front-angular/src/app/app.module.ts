import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';

import ptBR from '@angular/common/locales/br'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmplyeeAddComponent } from './emplyee-add/emplyee-add.component';
import { EmplyeeEditComponent } from './emplyee-edit/emplyee-edit.component';
import { EmplyeeGetComponent } from './emplyee-get/emplyee-get.component';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBR,'pt-BR');
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
  providers: [
    {
      provide: LOCALE_ID,
      useValue:'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
