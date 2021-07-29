let express = require("express");
let app = express();
let journal = require('./controllers/journalcontroller')

// app.use("/test", function(req, res){
//     let response = {message: "This is a test"};
//     res.json(response);
// })

// app.use("/sterling", function (req, res) {
//     res.send("My name is sterling")
// })
app.use('/journal', journal);

app.listen(3002, function() {
    console.log("App is listening on port 3002");
});