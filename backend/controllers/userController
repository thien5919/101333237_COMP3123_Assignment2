const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//Sign up
exports.signup = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
       
        const user = new User({
            username,
            email,
            password: hashedPassword
        });
        await user.save();
        res.status(201).json({
            message: 'User created successfully', user_id: user._id
        });
        
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: false,
            message: err.message
        });
    }
};

//Login
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({
                status: false,
                message: 'Invalid email or password'
            });
        }
        const token = jwt.sign({ id: user._id }, 'secret', {expiresIn: '1h'});
        res.status(200).json({
            status: true,
            message: 'Login successfully',
            token
        });
    } catch (err) {
        res.status(400).json({
            status: false,
            message: err.message
        });
    }
};