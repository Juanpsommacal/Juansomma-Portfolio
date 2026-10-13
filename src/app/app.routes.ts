import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProyectosList } from './pages/proyectos-list/proyectos-list';
import { ProyectoDetails } from './pages/proyecto-details/proyecto-details';
import { SolicitudesList } from './pages/solicitudes-list/solicitudes-list';
import { SolicitudDetails } from './pages/solicitud-details/solicitud-details';
import { FormSolicitud } from './pages/form-solicitud/form-solicitud';

export const routes: Routes = [
  { path: '', component: Home, title: 'Inicio | Juansomma' },
  { path: 'proyectos', component: ProyectosList, title: 'Proyectos | Juansomma' },
  { path: 'proyectos/:id', component: ProyectoDetails, title: 'Detalle de proyecto | Juansomma' },
  { path: 'solicitudes', component: SolicitudesList, title: 'Solicitudes | Juansomma' },
  { path: 'solicitudes/:id', component: SolicitudDetails, title: 'Detalle de solicitud | Juansomma' },
  { path: 'form', component: FormSolicitud, title: 'Nueva solicitud | Juansomma' },
  { path: 'form/:id', component: FormSolicitud, title: 'Editar solicitud | Juansomma' },
  { path: '**', redirectTo: '' },
];
