const router = require('express').Router();
const notes = require('../db/db.json');

router.get('/notes', (req, res) => {
    notes.getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
    notes.addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});

module.exports = router;