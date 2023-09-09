import users from "../Schemas/user-schemas.js";

export const addUser = async (req,res) =>{
    //req send data from front-end
    //res send data from backend
    const user = req.body;

    const newUser = new users(user)

    try {
       await newUser.save();
       res.status(201).json(newUser)
    } catch (error) {
        res.status(409).json({message : error.message})
    }

    console.log(user);
}

export const getUsers = async (req,res) => {

    try {
       const u = await users.find({})
       res.status(200).json(u)
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}