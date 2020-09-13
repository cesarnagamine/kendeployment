const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
console.log(Users);

//GET all posts from the Database:
router.get('/', async (req, res) => {
    try {
        const posts = await Users.find();
        res.json(posts);
        console.log('Got them!');
    } catch (err) {
        res.json({ message: err });
    }
});


module.exports = router;