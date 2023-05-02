const express = require("express")
const router =  express.Router();
const sensorsController = require("../../Controller/sensorsController");


router
        .get("/", sensorsController.getAllSensors)
        .get("/:sensorId", sensorsController.getoneSensorsData)
        .post("/", sensorsController.createSensorsData)
        .patch("/:sensorId", sensorsController.updateSensorsData)
        .delete("/:sensorId",sensorsController.delateSensorsData)

module.exports = router;

