const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

connectToMongo();

const app = express();
const port = 4000;

app.use(cors())
app.use(express.json());

app.use(
  cors({  
    origin: "http://localhost:5173/",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/user", require("./routes/filecomplaint"));
app.use("/api/user", require("./routes/guestroom"))

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`HostelUtilities backend listening at http://localhost:${port}`);
});
