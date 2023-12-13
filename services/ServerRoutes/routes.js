const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

// CHANGE THIS TO LOCAL DB VALUES
const connection = mysql.createConnection({
   host     : 'localhost',
	user     : 'root',
	password : 'verysecretbeergardenpass',
	database : 'beergardendatabase'
});

// Starting our app.
const app = express();

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
	console.log('Request Id:', req.params.id);
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
	console.log('Request Id:', req.params.id);
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
	console.log('Request Id:', req.params.id);
    connection.connect(function (err, connection) {

    // Executing the MySQL query. Returns comments based on the id. ( express framework middleware )
    connection.query(`SELECT id, title, description, address, openingtimes, kids, beer, tipp FROM beergardens_001 as beer WHERE beer.title like "%${searchValue}%"`,
			function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
  });
});



const getCommentData = async () => {
  const res = await fetch(
    `http://localhost:3000/post/comment/`,
  );
  if (res.ok) {
    const apiData = await res.json();
    
	const dbconnection = await connection.connect();
	const today = new Date();
	try {
		const date = `${today.getFullYear()}-${
		today.getMonth() + 1
		}-${today.getDate()}`;
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    const dateTime = `${date} ${time}`;

    const { name, id, comment } = JSON.parse(JSON.stringify(req.body));
    const query = `INSERT INTO Comments (name, commentText, beergardenId, dateAndTime) values ("${name}", "${comment}", ${id}, "${date} ${time}")`;

    const values = [];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();
    res.status(200).json({ results: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
	
	
  }
};


// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/getdata so you can see the data.');
});