# Portfolio — Juan Sommacal

Portfolio web personal desarrollado con **Angular** para el Trabajo Práctico de Programación IV (UTN).

## Descripción

Aplicación para presentarme como desarrollador, mostrar mis proyectos y recibir solicitudes de trabajo de potenciales clientes.

- **Inicio:** presentación personal, formación y tecnologías que conozco.
- **Mis proyectos:** listado de proyectos y detalle de cada uno (`/proyectos/:id`).
- **¿Necesitás un proyecto?:** formulario con Reactive Forms y validaciones para enviar una solicitud de trabajo (`/form`).
- **Solicitudes:** listado de las solicitudes recibidas. Desde el detalle de cada una (`/solicitudes/:id`) se puede editar (`/form/:id`, petición PUT) o eliminar (petición DELETE, con confirmación).

Los datos se guardan con **json-server**, usando un archivo `.json` por entidad:

| Archivo | Puerto | Endpoint |
|---|---|---|
| `proyectos.json` | 3000 | `http://localhost:3000/proyectos` |
| `solicitudes.json` | 3001 | `http://localhost:3001/solicitudes` |

Las peticiones HTTP se hacen desde los servicios `ProyectoService` y `SolicitudService`.

## Tecnologías

- Angular 20.3
- TypeScript
- HTML y CSS (Grid y Flexbox)
- json-server 1.0.0-beta.15

## Requisitos

- [Node.js](https://nodejs.org/) **22.12 o superior** (lo exige json-server).
- npm (viene incluido con Node.js).

## Instalación

Desde la carpeta del proyecto, instalar las dependencias:

```bash
npm install
```

Esto instala Angular, json-server y el resto de las dependencias. No hace falta instalar nada de forma global.

## Ejecución

La aplicación necesita **dos terminales abiertas al mismo tiempo**: una para json-server y otra para Angular.

### 1. Ejecutar json-server

En la primera terminal:

```bash
npm run api
```

Levanta los dos servidores a la vez: proyectos en el puerto **3000** y solicitudes en el **3001**.

También se pueden levantar por separado:

```bash
npm run api:proyectos
npm run api:solicitudes
```

### 2. Ejecutar Angular

En la segunda terminal:

```bash
npm start
```

Cuando termine de compilar, abrir el navegador en **http://localhost:4200/**.

> Si json-server no está corriendo, la aplicación abre igual, pero los listados de proyectos y solicitudes aparecen vacíos.
