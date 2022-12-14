const express = require('express');
const app = express();
const email = require('./routes/email');
const server = require('./routes/server');
const cors = require('cors');

app.use(cors());
app.use(express.json({extend: false}));
app.use("/", server);
app.use("/sendemail", email);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`server is running in port ${PORT}`));