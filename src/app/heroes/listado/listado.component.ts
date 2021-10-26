import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
  
  
  export class ListadoComponent{

  heroes:string[]=["spiderman","ironMan","hulk","thor"];
  heroesBorrado:any[]=[];
  valorArray:number=this.heroes.length;
  borrarHeroe(){
    console.log("borrando...");
   const heroeBorrado=this.heroes.shift();
   
    this.heroesBorrado.push(heroeBorrado);
  }
  comprobar():boolean{
    if (this.heroes.length==this.valorArray) {
      return false;
    } else {
      return true;
    }
  }

}
