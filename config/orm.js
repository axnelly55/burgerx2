// Import MySQL connection.
const connection = require("../config/connection.js");


function objectHelper(object) {
  var array = []
  for (var key in object) { 
    array.push (key+"="+object[key])
  }
  return array.toString();
}

const orm = {
  all: function (tableInput, cb) {
    let queryString = "SELECT * FROM " + tableInput + ";"
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

// insert new burger
create: (table, columns, values, cb) => {
var queryString = `INSERT INTO ${table} (${columns}) VALUES (??) `

  connection.query(queryString, values, (err, result) => {
    if (err) {
      throw err;
    }
    cb(result);
  });
},
// update devouring of burger
  update: (table, updateValues, condition, cb) => {
    let queryString = `UPDATE ${table} SET ${objectHelper(updateValues)} WHERE ${condition}` ;

    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

};
// export
module.exports = orm;