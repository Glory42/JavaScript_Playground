// Use Router.param to DRY this appleRouter. 
// Attach the apple variety to the request body if it exists, 
// send a 404 response if it does not. In each individual route, 
// send the appropriate property from that apple object.

const express = require('express');
const appleRouter = express.Router();

const apples = {
  mcintosh: {
    description: 'Classic, juicy, bright',
    priceRange: 'medium',
    color: 'green and red'
  },
  honeycrisp: {
    description: 'Crisp, sweet!',
    priceRange: 'pricey',
    color: 'red and yellow'
  },
  goldenDelicious: {
    description: 'rich, custardy',
    priceRange: 'cheap',
    color: 'yellow'
  }
}

// Finish the appleRouter.param call:

appleRouter.param('variety', (req, res, next, variety) => {
  if (!apples[variety]) {
    res.sendStatus(404);
  } else {
    req.variety = apples[variety];
    next();
  }
});

// Refactor the routes below to utilize your middleware:

appleRouter.get('/:variety/description', (req, res, next) => {
    res.send(req.variety.description);
});

appleRouter.get('/:variety/price-range', (req, res, next) => {
    res.send(req.variety.priceRange);
});

appleRouter.get('/:variety/color', (req, res, next) => {
    res.send(req.variety.color);
});
