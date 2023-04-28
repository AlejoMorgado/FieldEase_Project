

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

const moment = require('moment-timezone');
app.use(express.json());

app.post('/api/sensorsData', (req, res) => {
    const { air_temperature, air_humidity, floor_sensor1, floor_sensor2 } = req.body;

    if (!air_temperature || !air_humidity || !floor_sensor1 || !floor_sensor2) {
        res.status(400).send('Los datos recibidos no son válidos');
        return;
    }

    const actual_date = moment().tz('America/Bogota').format('YYYY-MM-DD HH:mm:ss');
    const sql = 'INSERT INTO sensors  VALUES (?, ?, ? , ?, ?)';
    connection.query(sql, [actual_date, air_temperature, air_humidity,floor_sensor1, floor_sensor2 ], (error, results, fields) => {
        if (error) {
            console.error(error);
            res.status(500).send(error);
            return;
        }
        console.log(`Datos insertados correctamente: ${actual_date}, ${air_temperature}, ${air_humidity}, ${floor_sensor1}, ${floor_sensor2}`);
        res.sendStatus(200);
    });
});

app.get('/api/sensorsData', (req, res) => {
    const sql = 'SELECT * FROM sensors'; // Consulta para obtener todos los datos de los sensores

    connection.query(sql, (error, results, fields) => {
        if (error) {
            console.error(error);
            res.status(500).send(error);
            return;
        }

        res.json(results); // Devuelve los resultados de la consulta como una respuesta JSON
    });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});