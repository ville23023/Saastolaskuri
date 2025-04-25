const express = require("express");
const router = express.Router();


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