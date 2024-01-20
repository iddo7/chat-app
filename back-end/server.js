/* --- VARIABLES --- */

const host = 'localhost';
const user = 'root';
const password = 'root';
const database = 'chat-app';
const port = 8081;



/* --- DEPEDENCIES --- */

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');



/* --- INITALIZING APP & CONNECTION --- */

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
});



/* --- ROUTES --- */

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

app.get('/room/:roomId/messages', (req, res) => {
    const roomId = req.params.roomId;
    const query = 'SELECT * FROM messages WHERE roomId = ?';

    db.query(query, [roomId], (err, result) => {
        if (err) return res.json(err);
        return res.send(result);
    });
});



/* --- SERVER START --- */

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});