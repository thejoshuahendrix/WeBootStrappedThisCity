const express = require('express');
const mongoose = require('mongoose');
const items = require('./routes/api/items');

const app = express();

//BodyParser MiddleWare
app.use(express.json());

//DB Config
const DB = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
.connect(DB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Mongo Connected"))
.catch(err => console.log(err));

//Use Routes
app.use('/api/items', items);


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`));