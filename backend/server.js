const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
const cors = require('cors');

dotenv.config();
connectDB();

app.use(bodyParser.json());
app.use('/api/v1', apiRoutes);
app.use(cors());

const DB_URL = 'mongodb+srv://thien5919:yZKb9NbH93ZzqgeR@cluster0.3bjq8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
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

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});