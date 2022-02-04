const User = require('../user/user-model')

const checkUsernameExists = async (req, res, next) => {
    try {
        let { username } = req.body
        const user = await User.getUserBy({ username: username })
        if (!user) {
            next({ status: 404, message: "User not found" })
        }
        else {
            req.user = user
            next()
        }
    }
    catch (err) {
        next(err)
    }
}
const validateUser = async (req, res, next) => {
    try {
        const user = await User.getUserBy({ username: req.body.username })
        if (user) {
            next({ status: 400, message: 'User already exists' })
        }
        else {
            next()
        }
    }
    catch (err) {
        next(err)
    }
}
const checkCredentials = async (req, res, next) => {
    const { username, password, role_name } = req.body
    if (!username || !password || !role_name) {
        next({ status: 400, message: "Invalid credentials" })
    }
    next()
}
const checkLoginCredentials = async (req, res, next) => {
    const { username, password } = req.body
    if (!username || !password) {
        next({ status: 400, message: "Username and password are required" })
    }
    next()
}

module.exports = {
    checkUsernameExists,
    validateUser,
    checkCredentials,
    checkLoginCredentials
}