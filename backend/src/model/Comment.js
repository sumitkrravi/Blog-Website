import mongoose, { Schema } from "mongoose";


const commentSchema = new Schema({

    Comment: {
        type: String,
        trim: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'UserDetails'
    }
}, { timestamps: true })

export const BlogComment = mongoose.model("BlogCommet", commentSchema);