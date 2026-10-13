import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SolicitudService } from '../../services/solicitud-service';

@Component({
  selector: 'app-solicitudes-list',
  imports: [RouterLink],
  templateUrl: './solicitudes-list.html',
  styleUrl: './solicitudes-list.css',
})
export class SolicitudesList implements OnInit {

  constructor(public service: SolicitudService){

  }

  ngOnInit(): void {
    this.getAllSolicitudes()
  }

  getAllSolicitudes(){
    this.service.getSolicitudes().subscribe({
      next: (data) => {this.service.solicitudes = data},
      error: (e) => console.log(e)
    })
  }

}
