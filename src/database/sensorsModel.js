
const db = require('./db.json');



const getAllSensors = () =>{
    return db;
}



module.exports = { getAllSensors}

