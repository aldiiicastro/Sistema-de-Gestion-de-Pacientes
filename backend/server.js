const express =  require('express')
const app = express()
require('./database')
const apiRoutes = require('./routes/apiRoutes');

//Api
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/api', apiRoutes);

//Connect to PORT
//const PORT = process.env.PORT || 5000
// app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
app.listen(5000)
