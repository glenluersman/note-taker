const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/notes');
const notes = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
});

router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, notes);
    res.json(true);
});

module.exports = router;