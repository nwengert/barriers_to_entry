const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');


// bodyParser MiddleWare
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;


//-nw deal with deprication warnings
//this was from Bob in the user authentification lessons.  Helped to make this app work!
mongoose.connect("mongodb://localhost/todo-auth-example",
    {useMongoClient: true},  // helps get rid of deprecation warnings
    (err) => {
        if (err) throw err;
        console.log("Connected to the database");
    }
);

//Connect to Mongo
mongoose
  .connect(db)
  .then(()=> console.log('MongoDB Connected.... stand up and shout'))
  .catch(err => console.log(err));

  
//Use Routes
app.use('/api/items', items);

//Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    //set a static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started running briskly on port ${port}`))