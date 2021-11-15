const express =  require('express')
const app = express()
require('./database')
const apiRoutes = require('./routes/apiRoutes');
const timeout = require('connect-timeout');
const cors = require('cors')
const path = require('path')
require("dotenv").config()
// ... other app.use middleware 

module.exports = function(app) {
    app.use(
      proxy(["/api"], { target: "http://localhost:3000" })
    );
  };
  
  app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
      res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
      next();
  });
  
app.use(express.static(path.join(__dirname, "client", "build")))

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//Api
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use('/api', apiRoutes);

//Connect to PORT
const PORT = process.env.PORT || 5000
// app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
app.listen(PORT)
