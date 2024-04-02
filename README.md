# Tripleten web_project_around_express

## Descripción del Proyecto
Este proyecto es una API desarrollada con Express que proporciona datos sobre usuarios y tarjetas. Los usuarios pueden obtener una lista de todos los usuarios, una lista de todas las tarjetas, o información detallada sobre un usuario específico utilizando su ID. La API está diseñada para servir como backend de una aplicación web, proporcionando los datos necesarios para mostrar perfiles de usuarios y contenido relacionado.

## Técnicas Utilizadas
* Node.js
* Express.js
* ESLint
* EditorConfig
* fs y path (módulos de Node.js)

## Instalación y Uso
Clona este repositorio en tu máquina local.
Instala las dependencias con npm install.
Inicia el servidor con npm run start.
Accede a http://localhost:3000 en tu navegador para interactuar con la API.
Rutas Disponibles
GET /users: Obtiene una lista JSON de todos los usuarios.
GET /cards: Obtiene una lista JSON de todas las tarjetas.
GET /users/:userId: Obtiene información detallada sobre un usuario específico, identificado por su ID.
