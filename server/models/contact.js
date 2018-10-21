const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    phone: String,
    address: String
});

const Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;