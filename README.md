# DA - Backend

DA - Backend es el servidor para la aplicación Diary-App.

_DA - Backend is the server for the application Diary-App_

## Description

Diary App es una aplicación que permite crear, actualizar y eliminar notas diarias, a modo de agenda, para usuarios registrados o logueados, permite además, agregarle una imagen a cada nota creada. Cada nota contiene título, descripción, imagen y fecha de creación. La información de usuarios y notas se guardan en una base de datos. Usa autenticación de usuario a través de tokens (JWT).

_Diary App is an application that allows you to create, update and delete daily notes, as an agenda, for registered or logged in users, it also allows you to add an image to each note created. Each note contains title, description, image, and creation date. User information and notes are stored in a database. Use user authentication through tokens (JWT)._

## Run app

Luego de [ejecutar](https://aac-diary-app.herokuapp.com) la aplicación se debe registrar de modo que cada usuario tenga la posibilidad de crear y mantener sus notas.

_After [running](https://aac-diary-app.herokuapp.com) the application must be registered so that each user has the possibility to create and maintain their notes._

## About this repo

Este repositorio contiene el lado servidor de la aplicación Diary-App, el lado cliente se puede encontrar [aquí](https://github.com/aac-devs/diary-client).

_This repository contains the server side of the Diary-App application, the client side can be found [here](https://github.com/aac-devs/diary-client)._

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
