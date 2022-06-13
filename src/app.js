const express = require('express');
const cors = require('cors');
const indexRouter = require('./routers');

const app = express()
const PORT = 3001;

app.use(cors());
app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}...`);
})
