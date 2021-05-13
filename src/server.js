/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./database/models');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;

    this.middlewares();
    this.routes();
  }

  static async connectDB() {
    try {
      await sequelize.sync({ force: true });
      console.log('Postgresql database online');
    } catch (error) {
      console.log(error);
    }
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }

  routes() {}

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running al http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
