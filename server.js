const express = require("express");
const app = express();
const db=require("./db.json");
const port = 3000 || process.env.PORT;
const cors = require("cors");
app.use(cors());
app.get("/api/data/", (req, res) => {

    res.send(db);
})
app.listen(port, () => console.log(`Listening on port ${port}`))