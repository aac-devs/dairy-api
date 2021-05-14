const { Note } = require('../database/models/index');

module.exports = {
  existNoteId: async (id) => {
    const exist = await Note.findByPk(id);
    if (!exist) {
      throw new Error(`Note Id doesn't exist!`);
    }
  },
};
