const Sequelize = require('sequelize');
const sequelize = new Sequelize('NodeServer', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log("connected to DB")
    },

    function(err){
        console.log(err)
    }
);

module.exports = sequelize;