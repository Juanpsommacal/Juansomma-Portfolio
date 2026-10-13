import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudService } from '../../services/solicitud-service';
import { Solicitud } from '../../models/solicitud';

@Component({
  selector: 'app-solicitud-details',
  imports: [],
  templateUrl: './solicitud-details.html',
  styleUrl: './solicitud-details.css',
})
export class SolicitudDetails implements OnInit {

  solicitud: Solicitud | null = null

  constructor(private service: SolicitudService, private router: Router, private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')

    if(id){
      this.service.getSolicitudById(id).subscribe({
        next: (data) => {this.solicitud = data},
        error: (e) => console.log(e)
      })
    }
  }

  deleteSolicitud(id: string){
    const confirmed = confirm("¿Seguro querés eliminar esta solicitud?")
    if(!confirmed) return

    this.service.deleteSolicitud(id).subscribe({
      next: () => {
        this.service.solicitudes = this.service.solicitudes.filter(solicitud => solicitud.id !== id)
        alert("Solicitud eliminada con exito")
        this.router.navigate(['/solicitudes'])
      },
      error: (e) => console.log(e)
    })
  }

  goToEdit(id: string){
    this.router.navigate(['/form', id])
  }

  goBack(){
    this.router.navigate(['/solicitudes'])
  }

}
