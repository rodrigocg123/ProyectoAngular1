import { Component } from '@angular/core';
import { Persona } from '../persona';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lista-personas',
  imports: [NgFor],
  templateUrl: './lista-personas.component.html',
  styleUrl: './lista-personas.component.css'
})
export class ListaPersonasComponent {

  listaPersonas:Persona[]=[];
  
  constructor() {

    this.listaPersonas.push(new Persona("pepe","perez",30));
    this.listaPersonas.push(new Persona("juan","sanchez",30));
    this.listaPersonas.push(new Persona("david","gomez",40));
  }

}
