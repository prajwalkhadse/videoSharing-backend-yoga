const express = require('express');
const router = express.Router()

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const User = require('../models/User')

router.post("/register", (req, res) => {
    console.log("prajwal");
    let data = req.body
    console.log(data)
    bcrypt.hash(data.password, 10).then((encryptpin) => {
        const user = new User({
            name: data.name,
            email: data.email,
            password: encryptpin,
            phone: data.phone,
            profession: data.profession

        })
        // console.log(user)
        user.save().then((record) => {
            res.status(201).json({
                message: "Registerd Successfully !",
                data: record,
            })
        }).catch((error) => {
            res.status(500).json({
                message: "Error during registration !",
                error: error
            })
        })
    }).catch((error) => {
        res.status(500).json({
            message: "Error during registration with PIN !",
            error: error
        })
    })


})

module.exports = router