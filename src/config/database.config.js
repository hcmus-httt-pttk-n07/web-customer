require('dotenv').config();
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.error(error.message);
        process.exit(-1);
    }
}

module.exports = { connect };