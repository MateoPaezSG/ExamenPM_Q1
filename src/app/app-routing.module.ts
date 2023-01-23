import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MainComponent } from './main/main.component';

import { Component } from "@angular/core";


const routes: Routes = [
  {
    path: '', component: FormComponent 
  },
  {
    path: '2', component: MainComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
