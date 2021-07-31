require("dotenv").config();
let express = require("express"); //importing express to use HTTP requests for later.
let app = express(); //creating an instance of express variable. allows us to use methods and properties within express
let sequelize = require('./db');

let user = require('./controllers/usercontroller');
let journal = require('./controllers/journalcontroller');

sequelize.sync();
//sequelize.sync({force: true})

app.use(express.json());

app.use('/user', user);
app.use('/journal', journal);

app.listen(3000, function() {
    console.log("App is listening on port 3000");
});