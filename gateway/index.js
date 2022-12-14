const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/customer', proxy('http://localhost:5001'))
app.use('/mtmxconverter', proxy('http://localhost:5002'))
app.use('/mtvalidation', proxy('http://localhost:5003'))
app.use('/', proxy('http://localhost:5000')) // Mtvalidation


app.listen(5000, () => {
    console.log('Gateway is Listening to Port 8000')
})