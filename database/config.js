const mongoose = require("mongoose")

// Connect to the MongoDB database and export the connection object
mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

// Export the database connection object
module.exports = mongoose.connection;