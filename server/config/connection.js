const mongoose = require('mongoose');
mongoose.connect("mongodb://wren:manymany123@ac-ehvxfhn-shard-00-00.7vn0qad.mongodb.net:27017,ac-ehvxfhn-shard-00-01.7vn0qad.mongodb.net:27017,ac-ehvxfhn-shard-00-02.7vn0qad.mongodb.net:27017/?ssl=true&replicaSet=atlas-mma197-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
module.exports = mongoose.connection;
