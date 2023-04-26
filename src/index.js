const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT || 8000;


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'santi',
    database: 'fieldease'
});

app.use(express.json());

app.post('/api/sensorsData', (req, res) => {
    const { period, air_temperature, air_humidity } = req.body;

    if (!period || !air_temperature || !air_humidity) {
        res.status(400).send('The data is valid');
        return;
    }


    const sql = 'INSERT INTO sensors  VALUES (?, ?, ?)';
    connection.query(sql, [period, air_temperature, air_humidity], (error, results, fields) => {
        if (error) {
            console.error(error);
            res.status(500).send(error);
            return;
        }
        console.log(`Insert the data successfully: ${period}, ${air_temperature}, ${air_humidity}`);
        res.sendStatus(200);
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

// app.get('/api/sensorsData', (req, res) => {
//     const sql = 'SELECT * FROM sensors ORDER BY period DESC LIMIT 10';
//     connection.query(sql, (error, results, fields) => {
//         if (error) {
//             console.error(error);
//             res.status(500).send(error);
//             return;
//         }
//         res.json(results);
//     });
// });