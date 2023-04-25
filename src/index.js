const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT || 3000;


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'santi',
    database: 'fieldease'
});

app.use(express.json());

app.post('/api/sensorsData', (req, res) => {
    const { currrent_date, temperature, humidity } = req.body;


    if (!currrent_date || !temperature || !humidity) {
        res.status(400).send('Los datos recibidos no son válidos');
        return;
    }


    const sql = 'INSERT INTO users  VALUES (?, ?, ?)';
    connection.query(sql, [currrent_date, temperature, humidity], (error, results, fields) => {
        if (error) {
            console.error(error);
            res.status(500).send(error);
            return;
        }
        console.log(`Datos insertados correctamente: ${currrent_date}, ${temperature}, ${humidity}`);
        res.sendStatus(200);
    });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});