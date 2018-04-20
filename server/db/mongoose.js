const mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI ||
'mongodb://localhost/TodoApp');
//'mongodb://Amera:urdogurdog258258@ds147659.mlab.com:47659/todoapp'
module.exports = {mongoose};
