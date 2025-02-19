import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-c2',
  imports: [NgFor],
  templateUrl: './c2.component.html',
  styleUrl: './c2.component.css'
})
export class C2Component {

   listaNombres:String[]=[];

  pulsame() {

    //alert("has pulsado");
    this.listaNombres.push("pepe");
    console.log(this.listaNombres);
  }
}
