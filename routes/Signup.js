// const express = require('express');
// const router = express.Router()

// const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')

// const User = require('../models/User')

// router.post("/register", (req, res) => {
//     console.log("prajwal");
//     let data = req.body
//     console.log(data)
//     bcrypt.hash(data.password, 10).then((encryptpin) => {
//         const user = new User({
//             name: data.name,
//             email: data.email,
//             password: encryptpin,
//             phone: data.phone,
//             profession: data.profession

//         })
//         // console.log(user)
//         user.save().then((record) => {
//             res.status(201).json({
//                 message: "Registerd Successfully !",
//                 data: record,
//             })
//         }).catch((error) => {
//             res.status(500).json({
//                 message: "Error during registration !",
//                 error: error
//             })
//         })
//     }).catch((error) => {
//         res.status(500).json({
//             message: "Error during registration with PIN !",
//             error: error
//         })
//     })


// })

// module.exports = router



//new code
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  const { name, email, phone, profession, password, confirmPassword } = req.body;

  // Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Password does not match with confirm password" });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User with this email already exists" });
    }

    // Create a new user
    const user = new User({
      name,
      email,
      phone,
      profession,
      password
    });

    // Save the user to the database
    await user.save();

    // Send response
    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred during registration" });
  }
});

module.exports = router;
