/* eslint-disable global-require */
/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./database/models');

class Server {
  constructor() {
    this.app = express();
    this.host = process.env.HOST || 'http://localhost';
    this.port = process.env.PORT || 8080;
    this.paths = {
      auth: '/api/auth',
      notes: '/api/notes',
    };

    this.middlewares();
    this.routes();
  }

  static async connectDB() {
    try {
      await sequelize.sync({ force: false });
      console.log('Postgresql database online');
    } catch (error) {
      console.log(error);
    }
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.paths.auth, require('./routes/auth.routes'));
    this.app.use(this.paths.notes, require('./routes/notes.routes'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running at ${this.host}:${this.port}`);
    });
  }
}

module.exports = Server;
