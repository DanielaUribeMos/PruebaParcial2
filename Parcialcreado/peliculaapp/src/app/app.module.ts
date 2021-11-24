import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculaModule } from './pelicula/pelicula.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PeliculaModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

