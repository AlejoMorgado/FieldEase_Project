const express  = require('express');
const v1Router = require("./V1/routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use("/api/sensorsData", v1Router);



// app.get("/sensorData", (req,res) => {
//     res.send('<h1> Holita</h1>');
// });
// app.post("/sensorData", (req,res) => {
//     console.log(req.body);
//     res.send(req.body);
// });
// app.get("/", (req,res) => {
//     res.send('<h1> Hello World </h1>');
// });


app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`)
});