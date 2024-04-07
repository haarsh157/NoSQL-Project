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


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


app.use("/api/auth", require("./routes/auth"));
app.use("/api/user", require("./routes/filecomplaint"));
app.use("/api/user", require("./routes/guestroom"))
app.use("/api/user", require("./routes/applyLeave")) ;
app.use("/api/admin/", require("./routes/admin"))

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`HostelUtilities backend listening at http://localhost:${port}`);
});
