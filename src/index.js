const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());

app.use(routes);


//abaixo a porta para servidor local, caso queira testar no seu computador

app.listen(3000, () => {
    console.log('Server runnig on port http://localhost:3000');

});
