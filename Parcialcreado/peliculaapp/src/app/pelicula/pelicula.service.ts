import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pelicula } from './pelicula';
import { PeliculaDetail } from './pelicula-detail';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private apiUrl:string = "https://gist.githubusercontent.com/josejbocanegra/8490b48961a69dcd2bfd8a360256d0db/raw/34ff30dbc32392a69eb0e08453a3fc975a3890f0/series.json";
  constructor(private http: HttpClient) { }
  getPeliculas(): Observable<PeliculaDetail[]> {
    return this.http.get<PeliculaDetail[]>(this.apiUrl);
  }
}

