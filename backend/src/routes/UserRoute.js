import { Router } from "express";
import { Register } from "../controller/UserController.js"
import { Login } from "../controller/UserController.js"
import { GetUser } from "../controller/UserController.js"
import { Logout } from "../controller/UserController.js"
import { VerifyUser } from "../middleware/AuthMiddleware.js"

const router = Router();

router.route("/signup").post(
    Register
)

router.route("/login").post(
    Login
)
router.route("/me").get(
    VerifyUser, GetUser
)
router.route("/logout").post(
    VerifyUser, Logout
)

export { router }
