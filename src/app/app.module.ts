import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaumComponent } from './paginaum/paginaum.component';
import { PaginadoisComponent } from './paginadois/paginadois.component';
import { PaginatresComponent } from './paginatres/paginatres.component';
import { PaginaquatroComponent } from './paginaquatro/paginaquatro.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaumComponent,
    PaginadoisComponent,
    PaginatresComponent,
    PaginaquatroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
