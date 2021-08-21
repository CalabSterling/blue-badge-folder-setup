let express = require('express');
let router = express.Router();
let validateSession = require('../middleware/validate-session');
const Log = require('../db').import('../models/log');

router.post('/', validateSession, (req, res) => {
    const logEntry = {
        description: req.body.log.description,
        definition: req.body.log.definition,
        result: req.body.log.result,
        owner_id: req.user.id
    }
    Log.create(logEntry)
        .then(log => res.status(200).json(log))
        .catch(err => res.status(500).json({ error: err }))
})


/*********************
 GET ENTRIES BY USER
*********************/
router.get("/", validateSession, (req, res) => {
    let userid = req.user.id
    Log.findAll({
        where: { owner_id: userid}
    })
        .then(logs => res.status(200).json(logs))
        .catch(err => res.status(500).json({ error: err }))
});


/**********************
 GET ENTREIS BY ID
**********************/
router.get('/:id', validateSession, function (req, res) {
    let id = req.params.id;
    let userid = req.user.id;

    Log.findAll({
        where: { 
            owner_id: userid, 
            id: id 
        }})
        .then(log => res.status(200).json(log))
        .catch(err => res.status(500).json({ error: err, message: "Not Authorized" }))
})


/**********************
 UPDATE ENTREIS BY ID
**********************/
router.put('/:entryId', validateSession, function  (req, res) {
    const updateLogEntry = {
        description: req.body.log.description,
        definition: req.body.log.definition,
        result: req.body.log.result
    };
    
    const query = {where: { id: req.params.entryId, owner_id: req.user.id } };

    Log.update(updateLogEntry, query)
        .then((logs) => res.status(200).json(logs))
        .catch((err) => res.status(500).json({ error: err }));
});


/**********************
 DELETE ENTREIS BY ID
**********************/
router.delete('/:id', validateSession, function (req, res) {
    const query = { where: { id: req.params.id, owner_id: req.user.id} };

    Log.destroy(query)
        .then(() => res.status(200).json({ message: "Log Removed" }))
        .catch((err) => res.status(500).json({ error: err }));
});


module.exports = router;