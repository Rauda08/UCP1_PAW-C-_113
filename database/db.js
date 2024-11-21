const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost', // localhost untuk koneksi lokal
    user: process.env.DB_USER || 'root', // username default MySQL (ubah jika berbeda)
    password: process.env.DB_PASSWORD || '', // password MySQL
    database: process.env.DB_NAME || 'safarihewan',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

module.exports = connection;
