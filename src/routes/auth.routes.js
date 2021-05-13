const { Router } = require('express');
const { create, login, renew } = require('../controllers/auth.controller');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.post('/new', create);
router.post('/', [validateJWT], login);
router.get('/', validateJWT, renew);

module.exports = router;
