const express = require('express');
const routes = require('./routes');
const db = require('./db');
const bodyParser = require('body-parser');
const logger = require('morgan');
/*---require() function imports and middleware below--*/
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(logger('dev'));

/*--- app.use() middleware below ---*/
app.use(bodyParser.json());
app.use('/api', routes);
db.on('error', console.log.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => console.log(`Hello, port ${PORT}. I'm listening...`));
