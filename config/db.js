const mongoose = require('mongoose');

const local = 'mongodb+srv://admin:XnhO4OkWyQG7s7nh@cluster0.zb6gn.mongodb.net/lab5';

const connect = async() => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };