const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://wren:<Tunhu123@@>@cluster0.ml2mocv.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
module.exports = mongoose.connection;
