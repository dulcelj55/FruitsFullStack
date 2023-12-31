// connect mongoose to the db
// later when we use mongoose somewhere else, it will already be connected

const mongoose = require('mongoose');

let connectionString = `mongodb+srv://dulcejaramillo:${process.env.MONGO_PASS}@cluster0.nqkldmx.mongodb.net/Food?retryWrites=true&w=majority`
console.log(connectionString);

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// log when connected

mongoose.connection.once('open', ()=> {
    console.log('connected to DATABASE');
});