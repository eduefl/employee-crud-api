import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmplyeeAddComponent } from './emplyee-add/emplyee-add.component';
import { EmplyeeEditComponent } from './emplyee-edit/emplyee-edit.component';
import { EmplyeeGetComponent } from './emplyee-get/emplyee-get.component';


const routes: Routes = [
  {path: "emplyee/add", component: EmplyeeAddComponent}
  {path: "emplyee/:id", component: EmplyeeEditComponent}
  {path: "emplyee", component: EmplyeeGetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
