import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template:`<h3>Contador...</h3>

    <button (click)="cambiarCifra(base)">+{{base}}</button> {{numero}}
    <button (click)="cambiarCifra(-base)">-{{base}}</button>`
})
export class Contador{
    base:number=5;
    numero:number=10;
    cambiarCifra(valor:number){
        this.numero+=valor;
    }

}