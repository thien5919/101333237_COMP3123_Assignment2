const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();


const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
const cors = require('cors');




app.use(bodyParser.json());
app.use('/api/v1', apiRoutes);
app.use(cors());

const DB_URL = process.env.MONGO_URI;
mongoose.Promise = global.Promise;
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database connected');
    })
    .catch((err) => {
        console.log('Database connection error', err);
    });


app.get('/', (req, res) => {
    res.send('Hello World');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on port 5000');
});