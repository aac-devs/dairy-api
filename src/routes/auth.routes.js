const { Router } = require('express');
const { check } = require('express-validator');
const { create, login, renew } = require('../controllers/auth.controller');
const { validateJWT } = require('../middlewares/validate-jwt');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.post(
  '/new',
  [
    check('name', 'Name is required!').not().isEmpty(),
    check('email', 'Email is required!').isEmail(),
    check('password', 'Password must contain at least 6 characters!').isLength({
      min: 6,
    }),
    validateFields,
  ],
  create,
);

router.post(
  '/',
  [
    check('email', 'Email is required!').isEmail(),
    check('password', 'Password must contain at least 6 characters!').isLength({
      min: 6,
    }),
    validateFields,
  ],
  login,
);

router.get('/', validateJWT, renew);

module.exports = router;
