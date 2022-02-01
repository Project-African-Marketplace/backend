const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET || "hodor"

function tokenMaker(user){
    const payload = {
        subject: user.user_id,
        username: user.username
    }
    const options = {
        expiresIn : '8h'
    }
    const token = jwt.sign(payload,JWT_SECRET,options)
    return token
}
module.exports = {
    tokenMaker,
    JWT_SECRET
}