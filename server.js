const express = require('express');
const mongoose = require('mongoose');

const items = require('./routes/api/items');

const app = express();

app.use(express.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use routes
app.use('/api/items',items);

// Start server
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server started on port ${port}`));