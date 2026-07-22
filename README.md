# MascotasApp Front-End

## Descripción

MascotasApp Front-End es una aplicación web desarrollada con React que consume una API REST para administrar mascotas y sus comentarios.

La aplicación permite listar mascotas, visualizar su información, registrar nuevas mascotas, editar su estado, eliminar registros y gestionar comentarios asociados a cada mascota, implementando manejo de errores para mejorar la experiencia del usuario.

---

## Tecnologías utilizadas

- React
- Vite
- React Router DOM
- Axios
- CSS
- Notyf
- ESLint

---

## Funcionalidades

### Gestión de mascotas

- Listar mascotas.
- Ver detalle de una mascota.
- Registrar una mascota.
- Editar el estado de una mascota.
- Eliminar una mascota.

### Gestión de comentarios

- Ver comentarios de una mascota.
- Agregar comentarios.
- Eliminar comentarios.

### Manejo de errores

- Validación de errores HTTP 400.
- Manejo de errores HTTP 404.
- Mensajes amigables para el usuario utilizando `error.response?.status` y `error.response?.data`.

---

## Instalación




1. Instalar dependencias

```bash
npm install
```

2. Ejecutar la aplicación

```bash
npm run dev
```

3. Ejecutar ESLint

```bash
npm run lint
```

---

## Estructura del proyecto

```
src/
│
├── api/
│
├── components/
│   ├── mascotas/
│   └── comentarios/
│
├── pages/
│
├── App.jsx
└── main.jsx
```

---

## API utilizada

API REST MascotasApp

Operaciones implementadas:

- GET
- POST
- PATCH
- DELETE

---

## Herramientas de Inteligencia Artificial utilizadas

Durante el desarrollo del proyecto se utilizó ChatGPT como herramienta de apoyo para:

- Resolver dudas sobre React.
- Implementar el consumo de la API mediante Axios.
- Crear componentes reutilizables.
- Implementar el CRUD de mascotas.
- Implementar el CRUD de comentarios.
- Implementar el manejo de errores utilizando `error.response?.status` y `error.response?.data`.
- Mejorar la organización del código y aplicar buenas prácticas.

Todas las sugerencias fueron revisadas, adaptadas y probadas antes de incorporarlas al proyecto.

---

## Integrantes

- Lucas Muñoz Lagos


---

## Autor

Proyecto desarrollado para la asignatura **Front End TI3031**.