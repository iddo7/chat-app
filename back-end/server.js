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
app.use(express.json());

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


/* Rooms */

app.get('/rooms', (req, res) => {
    const query = 'SELECT * FROM rooms'

    db.query(query, (err, result) => {
        if (err) return res.json(err);
        return res.send(result);
    });
});

app.get('/room/:roomId', (req, res) => {
    const roomId = req.params.roomId;
    const query = 'SELECT * FROM rooms WHERE id = ?';

    db.query(query, [roomId], (err, result) => {
        if (err) return res.json(err);
        return res.send(result);
    });
});


/* Messages */

app.get('/room/:roomId/messages', (req, res) => {
    const roomId = req.params.roomId;
    const query = 'SELECT * FROM messages WHERE roomId = ? ORDER BY createdAt';

    db.query(query, [roomId], (err, result) => {
        if (err) return res.json(err);
        return res.send(result);
    });
});

app.post('/room/:roomId/messages/create', (req, res) => {
    const roomId = req.params.roomId;

    const { id, authorId, content, isCore } = req.body;
    const query = 'INSERT INTO messages (id, roomId, authorId, content, isCore) VALUES (?, ?, ?, ?, ?)';

    db.query(query, [id, roomId, authorId, content, isCore], (err, result) => {
        if (err) return res.json(err);
        return res.send(result);
    });
});


/* Users */

app.post('/users/create-min', (req, res) => {
    const { id, email, password } = req.body;
    const query = 'INSERT INTO users (id, email, password) VALUES (?, ?, ?)';

    db.query(query, [id, email, password], (err, result) => {
        if (err) {
            console.error('Database error:', err);

            if (err.code == 'ER_DUP_ENTRY') return res.status(501).json({ error: 'Duplicate user email entry' })
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        // Check the result to determine if the query was successful
        if (result.affectedRows === 1) {
            return res.status(200).send('User created successfully');
        } else {
            console.error('Unexpected result from the database:', result);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    });
});






/* --- SERVER START --- */

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});