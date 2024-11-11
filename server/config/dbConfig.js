require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

// Verify connection
connection.on('connected', () => {
    console.log('MongoDB Connection Successful');
});

// Verify connection error
connection.on('error', (err) => {
    console.log('MongoDB Connection Error:', err);
});
