const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect(
        "mongodb+srv://user:user123@cluster0.vb3zn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    );
};
