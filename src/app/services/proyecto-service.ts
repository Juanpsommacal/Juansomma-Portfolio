import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {

  readonly API_URL = "http://localhost:3000/proyectos"

  proyectos: Proyecto[];

  constructor(private http: HttpClient){
    this.proyectos = [];
  }

  getProyectos(){
    return this.http.get<Proyecto[]>(this.API_URL)
  }

  getProyectoById(id: string){
    return this.http.get<Proyecto>(`${this.API_URL}/${id}`)
  }

}
