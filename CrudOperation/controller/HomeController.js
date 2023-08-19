const { response } = require('express');
const mongoose = require('mongoose');
const UserModel = require('../model/UserModel');

class HomeController {
    async index(req, res) {
        try {
            let result = (await UserModel.find()).reverse();
            res.render('index', { title: 'Home', data: result });
        } catch (e) {
            console.log("error" + e);
        }
    }

    async create(req, res) {
        try {
            const { name, age, email, Address, phone } = req.body;
            const UserRepo = new UserModel({ name, age, email, address: Address, phone });
            const result = await UserRepo.save();
            if (result) {
                res.redirect('/');
                return res.status(200).send({ message: "Success" })
            } else {
                return res.status(404).send({ message: "Error saving" });
            }
        } catch (error) {
            console.error("Error saving" + error)
            return res.status(500);
        }
    }

    async update(req, res) {
        try {
            console.log(req.body);
        } catch (error) {

        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;

            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).send("Invalid user ID");
            }

            const result = await UserModel.findByIdAndDelete(id);
            if (!result) {
                return res.status(404).send("User not found");
            }
            return res.redirect('/');
            res.status(200).send("User deleted successfully");
        } catch (error) {
            console.log("delete failed" + error);
        }
    }
}

module.exports = HomeController;