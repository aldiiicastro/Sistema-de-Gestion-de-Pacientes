const express =  require('express')
const app = express()
require('./database')
const apiRoutes = require('./routes/apiRoutes');
const timeout = require('connect-timeout');
const cors = require('cors')
const path = require('path')
require("dotenv").config()
// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//Api
app.use(timeout('5s'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use('/api', apiRoutes);

//Connect to PORT
const PORT = process.env.PORT || 5000
// app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
app.listen(3000)
