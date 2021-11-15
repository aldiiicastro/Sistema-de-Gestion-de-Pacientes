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

//Api


//Connect to PORT
const PORT = process.env.PORT || 3000
// app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
app.listen(PORT)


// const express =  require('express')
// const app = express()
// require('./database')
// const apiRoutes = require('.// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });/routes/apiRoutes');
// const timeout = require('connect-timeout');
// const cors = require('cors')
// const path = require('path');
// const env = process.env.NODE_ENV
// //Api
// app.use(timeout('5s'))
// app.use(express.urlencoded({extended: true}))
// app.use(express.json())
// app.use('/api', apiRoutes);
// app.use(cors())

// //Activar el cors
// // Configurar cabeceras y cors
// app.use( cors({ origin: true, credentials: true  }) );
// const proxy = require("http-proxy-middleware");

// module.exports = function(app) {
//   app.use(
//     proxy(["/api"], { target: "http://localhost:3000" })
//   );
// };

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });

// if (env === 'production') {
//   app.use(express.static(path.join(__dirname, '../build')))
// }


// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//     console.log(`Server started on port ${port}`);
// });