const User = require("../Models/user.model");

//@desc get all the expenses
//@route GET api/v1/expense-tracker
//@access PRIVATE
exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            data: users,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
        });
    }
};

//@desc create new expense
//@route POST api/v1/expense-tracker
//@access PRIVATE
exports.addUser = async (req, res, next) => {
    try {
        const payload = req.body;
        const user = await User.create(payload);
        res.status(201).json({
            success: true,
            data: user,
        });
    } catch (error) {
        res.status(400).json({ success: false });
    }
};