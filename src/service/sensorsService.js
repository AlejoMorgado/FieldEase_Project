const sensorsModel = require("../database/sensorsModel")



const getAllSensors = () =>{
    const allSensorsData = sensorsModel.getAllSensors()
    return allSensorsData;
};

const getoneSensorsData = () =>{
    return;
};

const createSensorsData = () =>{;
    return 
};

const updateSensorsData = () =>{
    return;
};

const delateSensorsData = () =>{
    return;
};

module.exports = {
    getAllSensors,
    getoneSensorsData,
    createSensorsData,
    updateSensorsData,
    delateSensorsData
}
