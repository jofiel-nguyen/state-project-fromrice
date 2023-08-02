const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://wren:<landung123>@cluster0.ajgtrzz.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
module.exports = mongoose.connection;
