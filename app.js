// app.js
const express = require('express');
const bodyParser = require('body-parser');
//const db = require('./db');

const app = express();
const port = 3000;


/*app.use(bodyParser.json());

// Obtener todos los libros
app.get('/libros', (req, res) => {
  db.query('SELECT * FROM libros', (err, result) => {
    if (err) {
      res.status(500).send('Error al obtener los libros');
    } else {
      res.json(result);
    }
  });
});*/

app.get('/', (req, res) => {
    res.send('Hola, bienvenido');
  });

// Obtener un libro por ID
/*app.get('/libros/:id', (req, res) => {
  const libroId = req.params.id;
  db.query('SELECT * FROM libros WHERE id = ?', [libroId], (err, result) => {
    if (err) {
      res.status(500).send('Error al obtener el libro');
    } else if (result.length === 0) {
      res.status(404).send('Libro no encontrado');
    } else {
      res.json(result[0]);
    }
  });
});*/

/*
// Crear un nuevo libro
app.post('/libros', (req, res) => {
  const { titulo, autor, anio_publicacion } = req.body;
  db.query('INSERT INTO libros (titulo, autor, anio_publicacion) VALUES (?, ?, ?)', [titulo, autor, anio_publicacion], (err, result) => {
    if (err) {
      res.status(500).send('Error al crear el libro');
    } else {
      res.status(201).send('Libro creado exitosamente');
    }
  });
});

// Actualizar un libro por ID
app.put('/libros/:id', (req, res) => {
  const libroId = req.params.id;
  const { titulo, autor, anio_publicacion } = req.body;
  db.query('UPDATE libros SET titulo = ?, autor = ?, anio_publicacion = ? WHERE id = ?', [titulo, autor, anio_publicacion, libroId], (err, result) => {
    if (err) {
      res.status(500).send('Error al actualizar el libro');
    } else if (result.affectedRows === 0) {
      res.status(404).send('Libro no encontrado');
    } else {
      res.send('Libro actualizado exitosamente');
    }
  });
});

// Eliminar un libro por ID
app.delete('/libros/:id', (req, res) => {
  const libroId = req.params.id;
  db.query('DELETE FROM libros WHERE id = ?', [libroId], (err, result) => {
    if (err) {
      res.status(500).send('Error al eliminar el libro');
    } else if (result.affectedRows === 0) {
      res.status(404).send('Libro no encontrado');
    } else {
      res.send('Libro eliminado exitosamente');
    }
  });
});
*/
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
