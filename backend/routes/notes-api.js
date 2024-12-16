
const express = require('express');
const router = express.Router();
const db = require('../db/connection')

router.get('/', async (req, res) => {
  const query = 'SELECT * FROM notes';
  try {
    const data = await db.query(query);
    const notes = data.rows;
    console.log(notes);
    
    res.json({notes});

  } catch(err){
    res.status(500).json({error: err.message})
  }
});

router.post('/', async (req, res) => {
  console.log('POST /api/notes - Request received'); // Log when request is received
  console.log('Request body:', req.body); // Log the body of the request
  const {title, content} = req.body;
  const query = `
  INSERT INTO notes (title, content)
  VALUES ($1, $2)
  RETURNING *;
  `
  const values = [title, content];
  try {
    const data = await db.query(query, values);
    const newNote = data.rows[0];
    console.log('Data inserted:', data.rows[0]); // Log the inserted data
    res.json({newNote}).status(201)
  } catch(err) {
    console.error('Error inserting data:', err); // Log any errors
    res.status(500).json({error: err.message});
  }
});

router.put('/:id', async (req, res) => {
  const {id} = req.params;
  const {title, content} = req.body;
  const query =  `
    UPDATE notes
    SET title = $1, content = $2
    WHERE id = $3
    RETURNING *;
  `
  const values = [title, content, id];

  try {
    const data = await db.query(query, values);
    const updatedNote = data.rows[0];

    if(!updatedNote) {
      return res.status(404).json({error: "Not found"})
    }

    res.json({updatedNote})
  } catch(err) {
    res.status(500).json({error: err.message})
  }
});




// router.post('/test', (req, res) => {
//   console.log('Body:', req.body);
//   res.send('Test route');
// });

module.exports = router;


