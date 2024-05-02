# Tripleten web_project_around_express

## Descripción del Proyecto
Este proyecto es una API desarrollada con Express que proporciona datos sobre usuarios y tarjetas. Los usuarios pueden obtener una lista de todos los usuarios, una lista de todas las tarjetas, o información detallada sobre un usuario específico utilizando su ID. La API está diseñada para servir como backend de una aplicación web, proporcionando los datos necesarios para mostrar perfiles de usuarios y contenido relacionado.

## La API proporciona endpoints para realizar las siguientes operaciones:

* Gestión de usuarios:
* Obtener todos los usuarios
* Obtener un usuario por ID
* Crear un nuevo usuario
* Actualizar el perfil de un usuario
* Actualizar el avatar de un usuario
* Gestión de tarjetas:
* Obtener todas las tarjetas
* Crear una nueva tarjeta
* Eliminar una tarjeta por ID
* Dar like a una tarjeta
* Dar unlike a una tarjeta

## Técnicas Utilizadas
* Node.js
* Express.js
* ESLint
* EditorConfig
* fs y path (módulos de Node.js)
* MongoDB: Base de datos NoSQL utilizada para almacenar datos de usuarios y tarjetas.
* Mongoose: Biblioteca de modelado de objetos MongoDB para Node.js.
* Postman: Herramienta para probar las rutas API y verificar su funcionamiento.

## Instalación y Uso
Clona este repositorio en tu máquina local.
Instala las dependencias con npm install.
Inicia el servidor con npm run start.
Accede a http://localhost:3000 en tu navegador para interactuar con la API.
Rutas Disponibles
GET /users: Obtiene una lista JSON de todos los usuarios.
GET /cards: Obtiene una lista JSON de todas las tarjetas.
GET /users/:userId: Obtiene información detallada sobre un usuario específico, identificado por su ID.
