import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProyectoService } from '../../services/proyecto-service';

@Component({
  selector: 'app-proyectos-list',
  imports: [RouterLink],
  templateUrl: './proyectos-list.html',
  styleUrl: './proyectos-list.css',
})
export class ProyectosList implements OnInit {

  constructor(public service: ProyectoService){

  }

  ngOnInit(): void {
    this.getAllProyectos()
  }

  getAllProyectos(){
    this.service.getProyectos().subscribe({
      next: (data) => {this.service.proyectos = data},
      error: (e) => console.log(e)
    })
  }

}
