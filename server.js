const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()
const dbConnect = require('./database/config')
const userRoutes = require('./routes/userRoutes')

app.use(bodyParser.json())    // extract data from the request body in JSON
app.use('/user', userRoutes)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
})