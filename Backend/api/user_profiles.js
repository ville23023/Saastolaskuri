const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Käyttäjä scheman importtaus
const User = require('../models/user');

//Käyttäjän luonti
router.post('/api/sign-up', async (req,res) =>{
    try{
        const result = await User.create(req.body);
        res.status(201).json("Account created successfully");
    }
    catch(error){
        console.log(error);
        res.status(400).json("Something went wrong");
    }
});
// Kirjautuminen login-lomakkeella
router.post("/api/login", async (req, res) => {
    const { userName, password } = req.body;
    try {
      const user = await User.findOne({ userName });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send("Incorrect username or password");
      }
      const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET_KEY, {expiresIn: '1h'});
      //tulostaa tokenin jotta sitä voi kokeilla postmanin puolella
      //console.log(token);
      res.status(200).send("Login successful");
    } catch (err) {
      console.log(err);
      res.status(400).send("Something went wrong");
    }
});
//Etsitään kaikki
router.get('/api/users', async (req,res) => {
    try{
        const result = await User.find();
        res.status(200).json(
            {
                status: "Succes",
                results: result.length,
                data: result
            }
        );
    }catch(error){
        console.log(error);
        res.status(400).json(
            {
                msg: "Something went wrong"
            }
        )
    }
});

//Käyttäjän etsiminen ID:llä
router.get('/api/user/:id', async (req,res) =>{
    const userId = req.params.id;
    try{
        const user = await User.findById(userId);
        res.status(200).json(user);
    }catch (error){
        console.log(error);
        res.status(400).json(
            {
                msg: "Something went wrong"
            }
        )
    }
});

//Muokkaus
router.patch('/api/user-update/:id', async(req,res) =>{
    const userToUpdate = req.params.id;
    const {userName, password, favoriteThing} = req.body;
    try{
        const user = await User.findById(userToUpdate);
        if(user){
            const result = await User.updateOne(
                {_id: userToUpdate},
                { $set:{
                    userName: userName,
                    password: password,
                    favoriteThing: favoriteThing
                }}
            );
            res.status(200).json("User updated successfully");
        }else{
            res.status(204).json("No such user");
        }
    }catch (error){
        console.log(error);
    }
});

// Poista käyttäjä
router.delete('/api/user-delete/:id', async (req,res) => {
    const userId = req.params.id;
    try{
        const user = await User.deleteOne({_id: userId});
        res.status(200).json(
        {
            msg: "User deleted successfully"
        } 
    )
    }catch (error){
        console.log(error);
        res.status(400).json(
            {
                msg: "Something went wrong"
            }
        ) 
    }
})

//Testi ukon luonti
router.post('/api/test_user_creation', async (req, res) =>{
    try{
        const test_user = await User.create({userName: 'testi-ukko', password:'password123', favoriteThing:'omena, banaani'});
        res.status(201).json("Test user created");
    }catch (error){
        console.log(error);
        res.status(400).json("Something went wrong");
    }
});

module.exports = router;