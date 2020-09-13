const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const cors = require("cors");

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use("/public", express.static(__dirname + "/public"));

const postRoute = require("./routes/posts");
app.use("/posts", postRoute);

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.error("Error!", err);
  });


// //SERVER.JS ADDED FOR DEPLOYMENT:
// if (process.env.NODE_ENV === 'production') {

//     app.use(express.static('client/build'));
// //Do not forget the req, res arguments!
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
// }


app.listen(port);
console.log("Listening 3000");
