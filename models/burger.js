// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: (newBurger, cb) => {
        orm.create("burgers", ["burger_name", "devoured"] [newBurger, false], cb)
    },

    update: (burgerId, cb) => {
        orm.update("burgers", {devoured: true}, "id="+burgerId, cb);
    },
};

module.exports = burger;