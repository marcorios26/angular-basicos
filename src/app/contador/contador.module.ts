import { NgModule } from "@angular/core";
import { Contador } from './contador/contador.component';
import { CommonModule } from '@angular/common';




@NgModule({
    declarations:[
        Contador
    ],
    imports:[
        CommonModule
    ],
    exports:[
        Contador
    ]
})
export class ContadorModule{

}