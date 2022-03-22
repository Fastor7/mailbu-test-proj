const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const morgan = require("morgan");

const PORT = process.env.PORT || 8080;

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))
app.use('/', require('./routes'));

// 404 route handling
app.use((_, res) => res.status(404).json({ NotFoundError: 'Requested resource not found on this server.' }));


app.listen(PORT, () => {
	console.info(`==> 🌎  Listening on port ${PORT}.`);
})

