import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoService } from '../../services/proyecto-service';
import { Proyecto } from '../../models/proyecto';

@Component({
  selector: 'app-proyecto-details',
  imports: [],
  templateUrl: './proyecto-details.html',
  styleUrl: './proyecto-details.css',
})
export class ProyectoDetails implements OnInit {

  proyecto: Proyecto | null = null

  constructor(private service: ProyectoService, private router: Router, private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')

    if(id){
      this.service.getProyectoById(id).subscribe({
        next: (data) => {this.proyecto = data},
        error: (e) => console.log(e)
      })
    }
  }

  goBack(){
    this.router.navigate(['/proyectos'])
  }

  goToForm(){
    this.router.navigate(['/form'])
  }

}
