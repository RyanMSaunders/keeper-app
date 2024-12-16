
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

const PORT = process.env.PORT || 8080;

const app = express();


app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true}));
app.use(express.static('frontend'))
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173', // Specify the allowed origin
  credentials: true, // Allow credentials (cookies, etc.)
}));


const notesApiRoutes = require('./routes/notes-api')

app.use('/api/notes', notesApiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


