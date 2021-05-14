const { Router } = require('express');
const { check } = require('express-validator');
const {
  getNotes,
  createNote,
  updateNote,
  removeNote,
  removeAllNotes,
} = require('../controllers/notes.controller');
const { validateJWT } = require('../middlewares/validate-jwt');
const { existNoteId } = require('../helpers/custom-validations');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.get('/', validateJWT, getNotes);

router.post(
  '/',
  [
    validateJWT,
    check('title', 'Title is required!').not().isEmpty(),
    validateFields,
  ],
  createNote,
);

router.put(
  '/:id',
  [
    validateJWT,
    check('id').custom(existNoteId),
    check('title', 'Title is required!').not().isEmpty(),
    validateFields,
  ],
  updateNote,
);

router.delete(
  '/:id',
  [validateJWT, check('id').custom(existNoteId), validateFields],
  removeNote,
);

router.delete('/', validateJWT, removeAllNotes);

module.exports = router;
