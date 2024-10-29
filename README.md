# Trabajo Práctico de Arquitectura CQRS - Frontend

Este proyecto implementa la parte frontal de una arquitectura CQRS (Command Query Responsibility Segregation) que se comunica con un backend separado para manejar operaciones de lectura y escritura de manera independiente. El frontend está diseñado para interactuar con la API del backend, proporcionando una interfaz de usuario para gestionar productos.

## Tecnologías Utilizadas

- React
- Zustand
- React-Router-Dom
- Shadcn

## Descripción del Proyecto

El frontend está agnóstico al CRUD de productos, lo que significa que la arquitectura CQRS implementada puede ser aplicada a cualquier otro dominio o entidad. En este caso, se ha utilizado un CRUD de productos como ejemplo para demostrar cómo funciona la arquitectura.

La aplicación permite al usuario:

- **Ver Productos**: Consultar y visualizar la lista de productos disponibles.
- **Agregar Productos**: Realizar operaciones de escritura para añadir nuevos productos.
- **Eliminar Productos**: Eliminar productos existentes del sistema.
- **Editar Productos**: Modificar la información de productos seleccionados.

## Instrucciones de Ejecución

1. Clona el repositorio: `git clone https://github.com/leonardotaquini/cqrs-frontend.git`

2. Instala las dependencias:

   - Para el frontend: `npm install`

3. Crear el archivo .env en la raiz del proyecto:
   `VITE_API_URL=`

4. Inicia la aplicación en modo desarrollo:

   - Para el frontend: `npm run dev`

5. Accede a la aplicación en tu navegador: `http://localhost:5174/`
