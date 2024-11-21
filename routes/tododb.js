const express = require('express');
const router = express.Router();
const db = require('../database/db');

// Mengambil semua todos
router.get('/', (req, res) => {
    db.query('SELECT * FROM todos', (err, todos) => {
        if (err) return res.status(500).send('Internal Server Error');
        res.render('todo', {
            layout: 'layouts/main-layout',
            todos: todos
        });
    });
});

// Menambah todo baru
router.post('/add', (req, res) => {
    const { title, description } = req.body;
    const query = 'INSERT INTO todos (title, description) VALUES (?, ?)';
    db.query(query, [title, description], err => {
        if (err) return res.status(500).send('Failed to add todo');
        res.redirect('/todos');
    });
});

// Mengedit todo
router.post('/edit/:id', (req, res) => {
    const { title, description } = req.body;
    const query = 'UPDATE todos SET title = ?, description = ? WHERE id = ?';
    db.query(query, [title, description, req.params.id], err => {
        if (err) return res.status(500).send('Failed to update todo');
        res.redirect('/todos');
    });
});

// Menghapus todo
router.post('/delete/:id', (req, res) => {
    const query = 'DELETE FROM todos WHERE id = ?';
    db.query(query, [req.params.id], err => {
        if (err) return res.status(500).send('Failed to delete todo');
        res.redirect('/todos');
    });
});

module.exports = router;
