import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})

export class heroeComponent{
    nombre:string='IronMan';
    edad:number=34;
    obtenerNombre():string{
        return `${this.nombre} ${this.edad}`;
    }

    get capitalizarNombre():string{
        return this.nombre.toUpperCase();
    }

    cambiarNombre(){
        this.nombre="spiderMan";
    }
    cambiarEdad(){
        this.edad=21;
    }
}