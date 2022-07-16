const partnerController = require("./lib/controllers/partnerController");
const express = require("express");
const app = express();

app.use(express.json());

const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get("/v1/students", (req, res) => {
    const students = partnerController.getPartners();
    res.send(students);
});