const router = require('express').Router();
const { getNotes, saveNote, deleteNote} = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    if (req) {
        results = getNotes(req, results);
    } else {
        res.sendStatus(404);
    }
});

router.post('/notes', (req, res) => {
});

module.exports = router;