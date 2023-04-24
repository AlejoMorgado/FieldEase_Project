const express  = require('express');
const v1Router = require("./V1/routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use("/api/sensorsData", v1Router);

app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`)
});