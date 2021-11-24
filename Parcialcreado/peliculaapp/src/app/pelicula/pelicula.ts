export class Pelicula {

  id:Number;
  name:String;
  channel:String;
  seasons:number;
   constructor(id:Number,
     name:String,
     channel:String,
     seasons:number)
   {
     this.id=id;
     this.name= name;
     this.channel=channel;
     this.seasons=seasons;
   }

 }

