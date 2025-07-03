const express = require('express');
const router = express.Router();
const pool = require('../db');




// CREATE user
router.post('/', async (req, res) => {
  const { name, email, age } = req.body;
  const result = await pool.query(
    'INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *',
    [name, email, age]
  );
  res.json(result.rows[0]);
});

// READ all users
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM users');
  res.json(result.rows);
});

// READ a single user
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  res.json(result.rows[0]);
});

// UPDATE user
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  const result = await pool.query(
    'UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *',
    [name, email, age, id]
  );
  res.json(result.rows[0]);
});

// DELETE user
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM users WHERE id = $1', [id]);
  res.json({ message: 'User deleted successfully' });
});

module.exports = router;
