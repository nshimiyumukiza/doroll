import express,{Router} from "express"
import { userController } from "../controller/user.controller.js";

const router:Router = express.Router();

router.post('/register',userController.createUser)

export default router;