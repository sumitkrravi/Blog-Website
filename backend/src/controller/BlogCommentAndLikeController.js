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
    const blogId = req.params.id;

    const comments = await BlogComment.create({
        comment,
        user: userId
    })

    await Blog.findByIdAndUpdate(
        blogId,
        { $push: { blogcomment: comments._id } },
        { new: true }
    )

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
    const { blogId } = req.params.id;

    const blog = await Blog.findById(blogId).select('blogcomment')
        .populate({
            path: 'blogcomment',
                select: 'comment user',
                populate: {
                    path: 'user',
                    model: 'UserDetails',
                    select: 'username',
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
    const  blogId  = req.params.id;
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
   

    await BlogLikes.findByIdAndUpdate(
        blogId,
        { $push: { blog: newLike._id } },
        { new: true }
    )

    await Blog.findByIdAndUpdate(
        blogId,
        { $push: { bloglike: newLike._id } },
        { new: true }
    )



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
    const { blogId } = req.params.id;

    const likes = await BlogLikes.find({ blog: blogId })
        .populate({
            path: 'user',
            model: 'UserDetails',
            select: 'name',
        });


    return res.status(200).json(
        new ApiResponse(
            200,
            {likes},
            "Likes fetched successfully"
        )
    );
});


export { BlogComments, GetBlogWithComments, BlogLike, GetBlogLikes }
