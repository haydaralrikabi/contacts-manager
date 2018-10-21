const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

router.get('/', async (req, res) => {
    const contacts = await Contact.find();    
    res.send(contacts);
});

router.get('/:id', async (req, res) => {
    const contact = await Contact.find({ _id: req.params.id });
    res.send(contact);
});

router.post('/new', async (req, res) => {
    const contact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        address: req.body.address
    });

    await contact.save();

    res.send();
});

router.put('/:id', async (req, res) => {
    await Contact.findOneAndUpdate({ _id: req.params.id }, {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        address: req.body.address
    });

    res.send();
});

router.delete('/:id', async (req, res) => {
    await Contact.findOneAndRemove({ _id: req.params.id });
    res.send();
});

module.exports = router;