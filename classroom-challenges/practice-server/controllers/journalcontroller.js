let express = require('express');
let router = express.Router();

router.get('/practice', function(req, res){
    res.send("Hey this is a test")
})



module.exports = router;