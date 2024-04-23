const express = require('express');
const app = express();
const path = require ('path')
const url = require ('url')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors = require('cors');
app.use(cors());
// const port = process.env.PORT || 4000
// initApp(app ,express)
// app.listen(port, () => console.log(`Example app listening on port  ${port}!`))

const auth = require('./routes/auth');
const jobs = require('./routes/jobs');
app.listen(4000,"localhost" ,() => ( console.log("SERVER IS RUNNING")
));

//================== API Routes ==================
app.use("/auth",auth);
app.use("/jobs",jobs);