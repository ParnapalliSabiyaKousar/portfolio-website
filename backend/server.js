const mongoose = require('mongoose');

mongoose.connect('YOUR_MONGODB_URL')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));