import { Injectable } from '@angular/core';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaRepositoryService {

  public borrar(nombre: string) {
   let indice=this.listaPersonas.findIndex((p)=>p.nombre==nombre);
   this.listaPersonas.splice(indice,1);
  }

  listaPersonas: Persona[] = [];

  constructor() {

    this.listaPersonas.push(new Persona("pepe", "perez", 30));
    this.listaPersonas.push(new Persona("juan", "sanchez", 30));
    this.listaPersonas.push(new Persona("david", "gomez", 40));

  }

  public BuscarTodos():Persona[]{

    return this.listaPersonas;
  }

  public insertar(persona:Persona):void{

    this.listaPersonas.push(persona);
  }

  public filtrarNombre(nombre:string):Persona[]{

    return this.listaPersonas.filter((p)=>p.nombre.startsWith(nombre));
  }
  
}
