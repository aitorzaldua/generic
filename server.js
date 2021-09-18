const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'generic/public');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.get('*', (req, res) => {
   res.send('mensaje cambiado a las 20:19');
   res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(port, () => {
   console.log('Servidor generic levantado 20:19');
});