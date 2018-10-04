const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// bodyParser MiddleWare
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
  .connect(db)
  .then(()=> console.log('MongoDB Connected.... stand up and shout'))
  .catch(err => console.log(err));

//Deal with the DepricationWarning  -nw found on google
mongoose.connect('url', { useNewUrlParser: true }, (err, res) => {
  if (err) throw err;
  console.log('Database online thanks to googlers');
  });

  
//Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started running briskly on port ${port}`))