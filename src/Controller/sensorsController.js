const sensorsService = require("../service/sensorsService")

const getAllSensors = (req,res)=>{
    const allSensorsData = sensorsService.getAllSensors()
    res.send({status:"ok", data: allSensorsData})
}

const getoneSensorsData = (req,res)=>{
    res.send(`Get  sensor ${req.params.sensorId}`)
}   

const createSensorsData = (req,res)=>{
    res.send(`create  sensorData ${req.params.sensorId}`)
}

const updateSensorsData = (req,res)=>{
    res.send(`update sensor ${req.params.sensorId}`)
}

const delateSensorsData = (req,res)=>{
    res.send(`delete sensorData ${req.params.sensorId}`)
}

module.exports = {
    getAllSensors,
    getoneSensorsData,
    createSensorsData,
    updateSensorsData,
    delateSensorsData

}