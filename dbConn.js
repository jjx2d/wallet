const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://jeffersonuche:WIpD50OFEmK21Yld@cluster0.j7lvsmz.mongodb.net/?retryWrites=true&w=majority", {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB