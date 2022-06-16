// Desafío 4: API Restful
const express = require('express');
const app = express();
const puerto = 8080;
const routes = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(__dirname + '/public'));
app.use('/api/productos', routes);

// Errores
app.use((req, res) => {
    res.status(404).send('Not found');
})

app.use((err, req, res) => {
    console.log('Error', err);
    res.status(500).send('Error');
})


app.listen(puerto, (error) => {
    if (!error) {
        console.log(`El servidor se inicio en el puerto ${puerto}`);
    } else {
        console.log(`Error al iniciar el servidor en el puerto ${puerto}. Error ${error}`);
    }
})