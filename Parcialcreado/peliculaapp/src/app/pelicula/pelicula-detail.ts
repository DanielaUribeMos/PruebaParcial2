import {Pelicula } from './pelicula';

export class PeliculaDetail extends Pelicula{
  poster: string;
  description:string;
  webpage:string;

  constructor(poster: string,
    description:string,
    webpage:string,
    id:Number,
    name:String,
    channel:String,
    seasons:number)
    {
      super(id, name,
        channel,
        seasons);
      this.poster=poster;
      this.description= description;
      this.webpage=webpage;
    }
}

