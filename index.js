const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const DbConfig = require('./DbConfig/index.js');
const routes = require('./routes');
const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1/', routes);

app.listen(process.env.PORT || 3000,() => {
    DbConfig
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });
});
