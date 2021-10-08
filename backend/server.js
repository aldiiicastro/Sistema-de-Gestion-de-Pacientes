const express =  require('express')
const app = express()
require('./database')
const apiRoutes = require('./routes/apiRoutes');
const timeout = require('connect-timeout');
const cors = require('cors')
const db = require('./production').mongoURI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  // use a promise to check if success
  .then(() => console.log('MongoDB Connected!'))
  .catch(error => console.log('MongoDB did not connect: ', error));


//Api
app.use(timeout('5s'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use('/api', apiRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (request, response) => {
      response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
//Connect to PORT
//const PORT = process.env.PORT || 5000
// app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
app.listen(process.env.PORT || 3000)