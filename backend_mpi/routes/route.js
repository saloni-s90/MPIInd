import express from "express";
import { addUser,getUsers } from "../controller/user-controller.js";

const router = express.Router();

router.post('/add',addUser)
router.get('/view',getUsers)


export default router;
