const User = require('../user/user-model')

const checkUsernameExists = async (req,res,next) => {
    try{
        let {username} = req.body
        const user = await User.getUserBy({username:username})
        if(!user){
            next({status:401, message: "Invalid Credentials"})
        }
        else{
            req.user = user
            next()
        }

    }
    catch(err){
        next(err)
    }
}

module.exports = {
    checkUsernameExists
}