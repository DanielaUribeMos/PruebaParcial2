import { Component, OnInit, Input  } from '@angular/core';
import { Pelicula } from '../pelicula';
import { PeliculaDetail } from '../pelicula-detail';
import { PeliculaService } from '../pelicula.service';

@Component({
  selector: 'app-pelicula-detail',
  templateUrl: './pelicula-detail.component.html',
  styleUrls: ['./pelicula-detail.component.css']
})
export class PeliculaDetailComponent implements OnInit {

  @Input() peliculaDetail: PeliculaDetail;

  constructor(private peliculaService: PeliculaService) { }

  ngOnInit() {
  }

}
