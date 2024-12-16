
const express = require('express');
const router = express.Router();
const db = require('../db/connection')

router.get('/', async (req, res) => {
  const query = 'SELECT * FROM notes';
  try {
    const data = await db.query(query);
    const notes = data.rows;

    res.json({notes});

  } catch(err){
    res.status(500).json({error: err.message})
  }
})

module.exports = router;


