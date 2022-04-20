const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://DBA:DBA@cluster0.ctui7.mongodb.net/HeThongTiemChung');
    }
    catch (error) {
        console.error(error.message);
        process.exit(-1);
    }
}

module.exports = { connect };