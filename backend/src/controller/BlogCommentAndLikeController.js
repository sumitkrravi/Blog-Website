import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { UserDetails } from "../model/User.js";
import { Blog } from "../model/Blog.js"
import { BlogComment } from "../model/Comment.js"
import { BlogLikes } from "../model/Like.js";
import mongoose from "mongoose";


const BlogComments = AsyncHandler(async (req, res) => {
    const { comment } = req.body;
    const userId = req.user.id;

    const comments = await BlogComment.create({
        comment,
        user: userId
    })

    if (!comments) {
        return res.status(500).json(
            new ApiError(
                500,
                {},
                "Server Error"
            )
        )
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            {},
            "Comment"
        )
    )

})

const GetBlogWithComments = AsyncHandler(async (req, res) => {
    const { blogId } = req.params;

    const blog = await Blog.findById(blogId)
        .populate({
            path: 'blogcomment',
            select: 'comment',
            populate: {
                path: 'user',
                model: 'UserDetails',
                select: 'name',
            },
        })

    return res.status(200).json(
        new ApiResponse(
            200,
            { blog },
            "Blog with comments fetched successfully"
        )
    );
});


const BlogLike = AsyncHandler(async (req, res) => {
    const { blogId } = req.body;
    const userId = req.user.id;

    const existingLike = await BlogLikes.findOne({ user: userId, blog: blogId });


    if (existingLike) {
        await existingLike.deleteOne();

        return res.status(200).json(
            new ApiResponse(
                200,
                {},
                "Blog unliked successfully"
            )
        );
    }

    const newLike = await BlogLikes.create({
        blog: blogId,
        user: userId,
    });

    if (!newLike) {
        return res.status(500).json(
            new ApiError(
                500,
                {},
                "Failed to like the blog"
            )
        );
    }

    return res.status(201).json(
        new ApiResponse(
            201,
            {},
            "Blog liked successfully"
        )
    );
})

const GetBlogLikes = AsyncHandler(async (req, res) => {
    const { blogId } = req.params;

    const likes = await BlogLikes.find({ blog: blogId })
        .populate({
            path: 'user',
            model: 'UserDetails',
            select: 'name',
        });


    return res.status(200).json(
        new ApiResponse(
            200,
            likes.map(like => ({
                userName: like.user.name
            })),
            "Likes fetched successfully"
        )
    );
});


export { BlogComments, GetBlogWithComments, BlogLike, GetBlogLikes }
