const router = require('express').Router();
const { createNewNote, } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    if (req) {
        results = createNewNote(req, results);
    }
    res.json(results);
});

router.post('/notes', (req, res) => {
});

module.exports = router;