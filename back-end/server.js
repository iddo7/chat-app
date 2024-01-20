const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'chat-app'
});



app.get('/', (req, res) => {
    return res.send('Hello World!');
});

app.get('/rooms', (req, res) => {
    const query = 'SELECT * FROM rooms'

    db.query(query, (err, result) => {
        if (err) return res.json(err);
        return res.send(result);
    });
});



app.listen(8081, () => {
    console.log('App listening on port 8081!');
});