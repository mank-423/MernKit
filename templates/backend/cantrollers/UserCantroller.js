const User = require('../models/UserModel');

const userCantroller = {
    getAllUser : async(req, res) => {
        try {
            const users = await User.find();
            res.json({status: "ok", users});
        } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    createUser : async(req, res) => {
        const { name, password } = req.body;

        try {
            const newUser = await User.create({name, password});
            res.json({status: "ok", newUser});
        } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

module.exports = userCantroller;