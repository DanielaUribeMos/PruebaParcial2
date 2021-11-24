import { Component, OnInit } from '@angular/core';
import { Pelicula} from '../pelicula';
import { PeliculaDetail } from '../pelicula-detail';
import { PeliculaService } from '../pelicula.service';
@Component({
  selector: 'app-pelicula-listar',
  templateUrl: './pelicula-listar.component.html',
  styleUrls: ['./pelicula-listar.component.css']
})
export class PeliculaListarComponent implements OnInit {

  constructor(private peliculaService: PeliculaService) { }
  peliculas: Array<PeliculaDetail>;
  average:number;
  selected:Boolean = false;
  selectedPelicula: PeliculaDetail;

  getPeliculas(): void {
    this.peliculaService.getPeliculas()
      .subscribe(peliculas => {
        this.peliculas = peliculas;
        this.getPromedio(this.peliculas);
      });
  }

  getPromedio(pelicula: PeliculaDetail[]): void{
    let promedio: number = 0;
    let total: number = 0;
    pelicula.forEach((pelicula) => total = total + pelicula.seasons);
    promedio=total/pelicula.length;
    this.average=promedio;
  }
  ngOnInit() {
    this.getPeliculas();
  }

  onSelected(i:PeliculaDetail)
  {
    console.log("pelicula clicked", i);
    this.selected=true;
    this.selectedPelicula = i;
  }
}

