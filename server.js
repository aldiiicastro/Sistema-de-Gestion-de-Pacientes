const express =  require('express')
const app = express()
require('./database')
const apiRoutes = require('./routes/apiRoutes');
const timeout = require('connect-timeout');
const cors = require('cors')
const path = require('path')
require("dotenv").config()
// ... other app.use middleware 

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use( cors({ origin: true, credentials: true  }) );

app.use('/api', apiRoutes);
  
  
app.use(express.static(path.join(__dirname, "client", "build")))

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//Api<

//Connect to PORT
const PORT = process.env.PORT || 3000
app.listen(PORT)
