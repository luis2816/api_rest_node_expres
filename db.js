// db.js
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'viaduct.proxy.rlwy.net',
  user: 'root',
  password: 'CGeGhHa5Cd-Bg2Eb2Aa5dfFAbeDgd2GA',
  database: 'railway'
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

module.exports = db;
