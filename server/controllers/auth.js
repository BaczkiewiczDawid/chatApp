const { connect } = require('getstream');
const bcrypt = require('bcrypt');
const StreamChat = require('stream-chat');
const crypto = require('crypto');

const login = () => {
    try {

    } catch (error) {
        console.log(error);

        res.send(500).json({ message: error });
    }
}

const signup = () => {
    try {
        const { fullName, username, password, phoneNumber } = req.body;

        const userID = crypto.randomBytes(16).toString('hex');

    } catch (error) {
        console.log(error);

        res.send(500).json({ message: error });
    }
}

module.exports = { signup, login };