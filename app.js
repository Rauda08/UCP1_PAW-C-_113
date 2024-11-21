const express = require('express');
const dotenv = require('dotenv');
const expressLayout = require('express-ejs-layouts');
const todoRoutes = require('./routes/tododb'); 
const db = require('./database/db'); 

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(expressLayout);
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/todos', todoRoutes); 

app.get('/', (req, res) => {
    res.render('index', {
        layout: 'layouts/main-layout',
    });
});

app.get('/inputdata', (req, res) => {
    res.render('inputdata', {
        layout: 'layouts/main-layout',
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
