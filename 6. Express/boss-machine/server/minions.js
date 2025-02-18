const minionsRouter = require('express').Router();
module.exports = minionsRouter;

// importing db.js functions for use
const { 
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    updateInstanceInDatabase
  } = require('./db');


// paramater use for id for minion and work for DRY
minionsRouter.param('minionsId', (req, res, next, id) => {
    const minion = getAllFromDatabase('minions', id);
    
    if(minion) {
        req.minion = minion;
        next();
    } else {
        res.status(404).send();
    }
});

minionsRouter.param('workId', (req, res, next, id) => {
    const work = getFromDatabaseById('work', id);
    if(work) {
        req.work = work;
        next();
    } else {
        res.status(404).send();
    }
});


//routes
minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions'));
});

minionsRouter.post('/', (req, res, next) => {
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(); 
});

// minion routes
minionsRouter.get('/:minionId', (req, res, next) => {
    res.send(req.minion);
});

minionsRouter.put('/minionId', (req, res, next) => {
    let updateMinionInstance = updateInstanceInDatabase('minions', req.body);
    res.send(updateMinionInstance);
});

minionsRouter.delete('/minionId', (req, res, next) => {
    const deleted = deleteFromDatabasebyId('minions', res.params.minionId);

    if(deleted) {
        res.status(201);
    } else {
        res.status(500);
    }
    res.send();
});

// work routes
minionsRouter.get('/:minionId/work', (req, res, next) => {
    const work = getAllFromDatabase('work').filter((singleWork) => {
      return singleWork.minionId === req.params.minionId;
    });
    res.send(work);
});
  
minionsRouter.post('/:minionId/work', (req, res, next) => {
    const workToAdd = req.body;
    workToAdd.minionId = req.params.minionId;
    const createdWork = addToDatabase('work', workToAdd);
    res.status(201).send(createdWork);
});

minionsRouter.put('/:minionId/work/:workId', (req, res, next) => {
    if (req.params.minionId !== req.body.minionId) {
      res.status(400).send();
    } else {
      updatedWork = updateInstanceInDatabase('work', req.body);
      res.send(updatedWork);
    }
});
  
minionsRouter.delete('/:minionId/work/:workId', (req, res, next) => {
    const deleted = deleteFromDatabasebyId('work', req.params.workId);
    if (deleted) {
      res.status(204);
    } else {
      res.status(500);
    }
    res.send();
});