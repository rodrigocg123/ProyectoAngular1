import { Component, NgModule } from '@angular/core';
import { Persona } from '../persona';
import { NgFor } from '@angular/common';
import { PersonaRepositoryService } from '../persona-repository.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-personas',
  imports: [NgFor, FormsModule],
  templateUrl: './lista-personas.component.html',
  styleUrl: './lista-personas.component.css'
})
export class ListaPersonasComponent {
  filtroNombre: string = "";
  listaPersonas: Persona[] = [];
  personaInsertar: Persona = {} as Persona;

  constructor(private personaRepository: PersonaRepositoryService) {

    this.listaPersonas = personaRepository.BuscarTodos();
  }
  insertar() {
    //spread operator
    this.personaRepository.insertar({ ...this.personaInsertar });
  }
  filtrar() {
    this.listaPersonas = this.personaRepository.filtrarNombre(this.filtroNombre);
  }
  borrar(nombre:string){
    // this.listaPersonas.filter((p)=>!p.nombre.startsWith(nombre));  
    let indice=this.listaPersonas.findIndex((p)=>p.nombre==nombre);
    this.listaPersonas.splice(indice,1);
  }
}
