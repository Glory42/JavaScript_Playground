    const express = require('express');
    const app = express();

    // Serves Express Yourself website
    app.use(express.static('public'));

    const { getElementById, getIndexById, updateElement,
            seedElements, createElement } = require('./utils');

    const expressions = [];
    seedElements(expressions, 'expressions');
    const animals = [];
    seedElements(animals, 'animals');

    const PORT = process.env.PORT || 4001;

    // Get all expressions
    app.get('/expressions', (req, res, next) => {
    res.send(expressions);
    });

    // Get a single expression
    app.get('/expressions/:id', (req, res, next) => {
    const foundExpression = getElementById(req.params.id, expressions);
    if (foundExpression) {
        res.send(foundExpression);
    } else {
        res.status(404).send();
    }
    });

    // Update an expression
    app.put('/expressions/:id', (req, res, next) => {
    const expressionIndex = getIndexById(req.params.id, expressions);
    if (expressionIndex !== -1) {
        updateElement(req.params.id, req.query, expressions);
        res.send(expressions[expressionIndex]);
    } else {
        res.status(404).send();
    }
    });

    // Create an expression
    app.post('/expressions', (req, res, next) => {
    const receivedExpression = createElement('expressions', req.query);
    if (receivedExpression) {
        expressions.push(receivedExpression);
        res.status(201).send(receivedExpression);
    } else {
        res.status(400).send();
    }
    });

    // Delete an expression
    app.delete('/expressions/:id', (req, res, next) => {
    const expressionIndex = getIndexById(req.params.id, expressions);
    if (expressionIndex !== -1) {
        expressions.splice(expressionIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send();
    }
    });




    // Gets all the animals
    app.get('/animals', (req, res, next) => {
    res.send(animals);
    });

    // Gets a single animal
    app.get('/animals/:id', (req, res, next) => {
    // using build in getElementById function to select an Id.
    const foundAnimal = getElementById(req.params.id, animals);
    if (foundAnimal) {
        res.send(foundAnimal);
    } else {
        res.status(404).send();// On fail status 404 for selecting one element.
    }
    });

    // Updates an animal
    app.put('/animals/:id', (req, res, next) => {
    // using build in getIndexById function to select an Id.
    const expressionIndex = getIndexById(req.params.id, animals);
    // getIndexById will return -1 if the expressions array doesn’t contain an element with that id.
    if (expressionIndex !== -1) {
        // Using build in updateElement() function to update. selected element, writing, from.
        updateElement(req.params.id, req.query, animals);
        res.send(animals[expressionIndex]);
    } else {
        res.status(404).send();// On fail status 404 for updates.
    }
    });


    // Creates an animal
    app.post('/animals', (req, res, next) => {
    // using buildin createElement() function to create.
    const receivedAnimal = createElement('animal', req.query);
    if(receivedAnimal) {
        // Pushing the new animal to query.
        animals.push(receivedAnimal);
        res.status(201).send(receivedAnimal);// On success status 201 for creating.
    } else {
        res.status(400).send();// On fail status 400 for not creating.
    }
    });


    // Delets an animal
    app.delete('/animals/:id', (req, res, next) => {
    // using build in getIndexById function to select an Id.
    const expressionIndex = getIndexById(req.params.id, animals);
    // getIndexById will return -1 if the expressions array doesn’t contain an element with that id.
    if(expressionIndex !== -1) {
        // deleting the selected ids element by build in splice().
        animals.splice(expressionIndex, 1);
        res.status(204).send();// On success status 204 for deleting.
    } else {
        res.status(404).send();// On fail status 404 for not deleting.
    }
    })

    app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`); 
    });
