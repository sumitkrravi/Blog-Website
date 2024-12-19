import { Router } from "express";
import { CreateBlog } from "../controller/BlogController.js";
import { UpdateBlog } from "../controller/BlogController.js";
import { DeleteBlog } from "../controller/BlogController.js";
import { ShowAuthorAllBlogs } from "../controller/BlogController.js";
import { ShowAllBlogs } from "../controller/BlogController.js";
import { VerifyUser } from "../middleware/AuthMiddleware.js";


const blogrouter = Router();


blogrouter.route("/blogs").post(
    VerifyUser,
    upload.fields([
        {
            name: "blogthumbnailurl",
            maxCount: 1
        }
    ]),

    CreateBlog

)

blogrouter.route("/blogs/:id").put(
    VerifyUser, UpdateBlog
)

blogrouter.route("/blogs/:id").delete(
    VerifyUser, DeleteBlog
)

blogrouter.route("/:userId/blogs").get(
    VerifyUser, ShowAuthorAllBlogs
)

blogrouter.route("/blogs").get(
    ShowAllBlogs
)


export { blogrouter }