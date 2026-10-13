import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  estudios = [
    {
      titulo: "Tecnicatura Universitaria en Programación",
      institucion: "UTN Mar del Plata",
      estado: "En curso"
    },
    {
      titulo: "Desarrollo Web Full Stack",
      institucion: "UTN Buenos Aires",
      estado: "Finalizado 2025"
    },
    {
      titulo: "Análisis de Datos",
      institucion: "Coderhouse",
      estado: "Finalizado 2023"
    }
  ]

  tecnologias = [
    {
      categoria: "Backend",
      items: ["Java", "Spring Boot", "JPA / Hibernate", "SQL"]
    },
    {
      categoria: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "Angular"]
    },
    {
      categoria: "Conceptos",
      items: ["Programación Orientada a Objetos", "APIs REST", "Bases de datos relacionales", "Patrones de diseño", "MVC"]
    },
    {
      categoria: "Herramientas",
      items: ["Git", "GitHub", "Postman"]
    },
    {
      categoria: "Metodologías ágiles",
      items: ["Scrum", "Kanban"]
    }
  ]

}
