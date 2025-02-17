const express = require('express');
const morgan = require('morgan');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

// middlewares
app.use(express.static('public'));
app.use(morgan('dev'));

// GET /api/quotes/random
app.get('/api/quotes/random', (req, res) => {
  const randomQuote = getRandomElement(quotes);
  res.json({ quote: randomQuote });
});

// GET /api/quotes
app.get('/api/quotes', (req, res) => {
  const person = req.query.person;
  if (person) {
    const filteredQuotes = quotes.filter(quote => quote.person === person);
    res.json({ quotes: filteredQuotes });
  } else {
    res.json({ quotes: quotes });
  }
});

// POST /api/quotes
app.post('/api/quotes', (req, res) => {
  const { quote, person } = req.query;
  if (!quote || !person) {
    return res.status(400).send('Bad Request: Missing quote or person in query parameters.');
  }
  const newQuote = { quote, person };
  quotes.push(newQuote);
  res.status(201).json({ quote: newQuote });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});