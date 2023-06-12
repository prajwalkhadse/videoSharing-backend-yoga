// const express = require('express')
// const morgan = require('morgan')
// const cors = require('cors')
// const bodyParser = require('body-parser')
// const mongoose = require('mongoose');

// const dotenv = require('dotenv')
// require('dotenv').config()
// const PORT = process.env.PORT || 4000

// const checkAuth = require('./middleware/checkAuth')

// const app = express()
// app.use(express.json())
// app.use(morgan('dev'))
// app.use(cors())
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())


// app.use(require('./routes/Signup'))
// app.use(require('./routes/Signin'))


// //CONNECTING TO MONGODB
// mongoose.set('strictQuery', true);
// mongoose.connect(process.env.MONGO_URI)
// mongoose.connection.on('connected', () => {
//     console.log('connected to mongoDb');
// })
// mongoose.connection.on('error', (err) => {
//     console.log('error connecting ', err);
// })


// app.listen(PORT, () => {
//     console.log('Server listening on port ' + PORT);
// })



//new code
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
require('dotenv').config();
const PORT = process.env.PORT || 4000;

const checkAuth = require('./middleware/checkAuth');

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import and use the Signup route
const signupRoute = require('./routes/Signup');
app.use('/register', signupRoute);

//CONNECTING TO MONGODB
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on('connected', () => {
    console.log('connected to mongoDb');
});
mongoose.connection.on('error', (err) => {
    console.log('error connecting ', err);
});

app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
});
