const UserEntity = require('../model/user.entity');
class UserService {
    async registerUser(req, res) {
        try {
            let { name, last, password, gander } = req.body;
            if(!name || !last || !gander || !gander) { 
                // res.render('register', {"title": "sign-in", "message": "All fields are required"});
            }
            const result = await UserEntity.create({name, last, password, gander});
            if(result) 
            res.redirect(201,'/');
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async login (req, res) { 

    }
}

module.exports = new UserService();