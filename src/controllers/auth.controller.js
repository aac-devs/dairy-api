/* eslint-disable no-console */
const { response } = require('express');
const bcrypt = require('bcryptjs');
const { User } = require('../database/models/index');
const { generateJWT } = require('../helpers/jwt');

module.exports = {
  create: async (req = require, res = response) => {
    try {
      const { email, password } = req.body;
      let user = await User.findOne({
        where: {
          email,
        },
      });
      if (user) {
        return res.status(400).json({
          ok: false,
          msg: 'User already exists!',
        });
      }
      user = req.body;
      const salt = bcrypt.genSaltSync(10);
      user.password = bcrypt.hashSync(password, salt);
      const createdUser = await User.create(user);
      const token = await generateJWT(createdUser.id, createdUser.name);
      const { id: uid, name } = createdUser;
      return res.status(201).json({
        ok: true,
        name,
        uid,
        token,
      });
    } catch (error) {
      return res.status(500).json({
        msg: 'Something went wrong trying to access to database!',
        error,
      });
    }
  },
  login: async (req = require, res = response) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(400).json({
          ok: false,
          msg: `User email doesn't exists!`,
        });
      }
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({
          ok: false,
          msg: 'Password incorrect!',
        });
      }
      const token = await generateJWT(user.id, user.name);
      return res.json({
        ok: true,
        uid: user.id,
        name: user.name,
        token,
      });
    } catch (error) {
      return res.status(500).json({
        msg: 'Something went wrong trying to access to database!',
        error,
      });
    }
  },
  renew: async (req = require, res = response) => {
    try {
      const { uid, name } = req;
      const token = await generateJWT(uid, name);
      return res.json({
        ok: true,
        uid,
        name,
        token,
      });
    } catch (error) {
      return res.status(500).json({
        msg: 'Something went wrong trying to access to database!',
        error,
      });
    }
  },
};
