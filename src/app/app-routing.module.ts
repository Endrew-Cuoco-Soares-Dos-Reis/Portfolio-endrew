import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginadoisComponent } from './paginadois/paginadois.component';
import { PaginaquatroComponent } from './paginaquatro/paginaquatro.component';
import { PaginatresComponent } from './paginatres/paginatres.component';
import { PaginaumComponent } from './paginaum/paginaum.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "paginadois"
  },
  {
    path:"paginaum",
    component: PaginaumComponent
  },
  {
    path:"paginadois",
    component: PaginadoisComponent
  },
  {
    path:"paginatres",
    component: PaginatresComponent
  },
  {
    path:"paginaquatro",
    component: PaginaquatroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
