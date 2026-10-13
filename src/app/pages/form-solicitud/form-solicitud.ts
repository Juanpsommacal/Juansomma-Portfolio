import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudService } from '../../services/solicitud-service';

@Component({
  selector: 'app-form-solicitud',
  imports: [ReactiveFormsModule],
  templateUrl: './form-solicitud.html',
  styleUrl: './form-solicitud.css',
})
export class FormSolicitud implements OnInit {

  solicitudForm: FormGroup
  nombre: FormControl
  email: FormControl
  tipoProyecto: FormControl
  descripcion: FormControl
  presupuesto: FormControl
  fecha: FormControl

  id: string | null = null

  constructor(private service: SolicitudService, private router: Router, private activatedRoute: ActivatedRoute){

    this.nombre = new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(50)])
    this.email = new FormControl("", [Validators.required, Validators.email])
    this.tipoProyecto = new FormControl("", [Validators.required])
    this.descripcion = new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(500)])
    this.presupuesto = new FormControl("", [Validators.required, Validators.min(1)])
    this.fecha = new FormControl("", [Validators.required])

    this.solicitudForm = new FormGroup({
      nombre: this.nombre,
      email: this.email,
      tipoProyecto: this.tipoProyecto,
      descripcion: this.descripcion,
      presupuesto: this.presupuesto,
      fecha: this.fecha
    })
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')

    if(this.id){
      this.service.getSolicitudById(this.id).subscribe({
        next: (data) => this.solicitudForm.patchValue(data),
        error: (e) => console.log(e)
      })
    }
  }

  submitForm(){
    if(this.id){
      const solicitud = {...this.solicitudForm.value, id: this.id}

      this.service.editSolicitud(solicitud).subscribe({
        next: () => {
          alert("Solicitud editada con exito")
          this.router.navigate(['/solicitudes', this.id])
        },
        error: (e) => console.log(e)
      })
    }
    else{
      const solicitud = this.solicitudForm.value

      this.service.postSolicitud(solicitud).subscribe({
        next: () => {
          alert("Solicitud enviada con exito")
          this.router.navigate(['/solicitudes'])
        },
        error: (e) => console.log(e)
      })
    }
  }

  goBack(){
    if(this.id){
      this.router.navigate(['/solicitudes', this.id])
    }
    else{
      this.router.navigate(['/solicitudes'])
    }
  }

}
