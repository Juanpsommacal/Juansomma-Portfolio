import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Solicitud } from '../models/solicitud';

@Injectable({
  providedIn: 'root',
})
export class SolicitudService {

  readonly API_URL = "http://localhost:3001/solicitudes"

  solicitudes: Solicitud[];

  constructor(private http: HttpClient){
    this.solicitudes = [];
  }

  getSolicitudes(){
    return this.http.get<Solicitud[]>(this.API_URL)
  }

  getSolicitudById(id: string){
    return this.http.get<Solicitud>(`${this.API_URL}/${id}`)
  }

  postSolicitud(solicitud: Solicitud){
    return this.http.post<Solicitud>(this.API_URL, solicitud)
  }

  editSolicitud(solicitud: Solicitud){
    return this.http.put<Solicitud>(`${this.API_URL}/${solicitud.id}`, solicitud)
  }

  deleteSolicitud(id: string){
    return this.http.delete<Solicitud>(`${this.API_URL}/${id}`)
  }

}
