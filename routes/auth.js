//authentication routes
const User = require('../model/User');
const router = require('express').Router();

router.post('/register', async (req, res) => {
    const user = new User({
        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch(err) {
        res.status(400).send(err);
    }
});

module.exports = router;
