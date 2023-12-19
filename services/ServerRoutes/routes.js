const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

// CHANGE THIS TO LOCAL DB VALUES
const connection = mysql.createConnection({
   host     : 'localhost',
	user     : 'root',
	password : 'verysecretbeergardenpass',
	database : 'beergardendatabase'
});

// Starting our app.
const app = express();

app.use(express.json());

// Creating a GET route that returns data
app.get('/getdata', function (req, res) {
    // Connecting to the database.
    connection.connect(function (err, connection) {

    // Executing the MySQL query. Returns all beer gardens  
    connection.query('SELECT id, title, description, address, openingtimes, kids, beer, tipp, coordinates FROM beergardens_001',
			function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

app.get('/comments/:id', function (req, res) {
	const id = req.params.id;
    connection.connect(function (err, connection) {

    // Executing the MySQL query. Returns comments based on the id. ( express framework middleware )
    connection.query(`SELECT name, commentText,dateAndTime from comments as cmt WHERE cmt.beergardenId = ${id}`,
			function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
  });
});

app.get('/search/:id', function (req, res) {
	const id = req.params.id;
    connection.connect(function (err, connection) {

    // Executing the MySQL query. Returns comments based on the id. ( express framework middleware )
    connection.query(`SELECT title, description, address, openingtimes, kids, beer, tipp, coordinates FROM beergardens_001 as beer WHERE beer.id like ${id}`,
			function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
  });
});

app.get('/textSearch/:searchValue', function (req, res) {
	const searchValue = req.params.searchValue;
    connection.connect(function (err, connection) {

    // Executing the MySQL query. Returns comments based on the id. ( express framework middleware )
    connection.query(`SELECT id, title, description, address, openingtimes, kids, beer, tipp FROM beergardens_001 as beer WHERE beer.title like "%${searchValue}%"`,
			function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
  });
});

app.post('/submitComment', function (req, res) {
  //var comment = JSON.parse(req.body.data)
  console.log(req.body.commentData);
  connection.connect(function (err, connection) {
    connection.query(`INSERT INTO Comments (name, commentText, beergardenId, dateAndTime)
     values ("${req.body.commentData.name}", "${req.body.commentData.comment}", "${req.body.commentData.id}", "${req.body.commentData.date}")`,
			function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
  });
})

// Starting our server.
app.listen(3000, () => {
 console.log('Node JS server is running on localhost:3000');
});