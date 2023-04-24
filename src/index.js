const express  = require('express');
const v1SensorsRouter = require("./V1/routes/sensorRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/sensorsData", v1SensorsRouter);

app.use(express.json())

app.use("/api/sensorsData", v1Router);

app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`)
});