# DA - Backend

DA - Backend es el servidor para la aplicación Diary-App.

_DA - Backend is the server for the application Diary-App_

## Description

Diary-App es una aplicación usada para guardar notas de usuario, en la cual se debe registrar el usuario para poder crear sus notas, cada nota está compuesta por un título, cuerpo y día/hora de creación. Cuando se crea la nota, ésta se guarda en una base de datos. También se permite la edición y eliminación de las notas creadas, y eliminación completa de todas las notas creadas por el usuario.

_Diary-App is an application used to save user notes, in which the user must register in order to create his notes, each note is composed of a title, body and creation day/time. When the note is created, it is saved to a database. Editing and deletion of the notes created, and complete deletion of all notes created by the user is also allowed._

## Technologies

Las tecnologías usadas para desarrollar este backend son: Node.js con express, Sequelize para interactuar con una base de datos PostgreSQL, además de usar bcryptjs para encriptar las contraseñas de usuario, jsonwebtoken para generar y verificar los tokens de usuario, entre otros. También se hace uso de sequelize-cli para realizar la configuración de la base de datos, eslint para garantizar buenas prácticas de codificación.

_The technologies used to develop this backend are: Node.js with express, Sequelize to interact with a PostgreSQL database, in addition to using bcryptjs to encrypt user passwords, jsonwebtoken to generate and verify user tokens, among others. Sequelize-cli is also used to configure the database, eslint to guarantee good coding practices._

## Installation

```bash
npm install
```

## Usage

&nbsp;
Para producción, desarrollo y testing:

&nbsp; _For production, development and testing:_

```bash
npm start
npm run dev
npm run test
```
