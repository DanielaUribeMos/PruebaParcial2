import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculaListarComponent } from './pelicula-listar/pelicula-listar.component';
import { PeliculaDetailComponent } from './pelicula-detail/pelicula-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PeliculaListarComponent, PeliculaDetailComponent],
  exports:[PeliculaListarComponent,  PeliculaDetailComponent]
})
export class PeliculaModule { }

