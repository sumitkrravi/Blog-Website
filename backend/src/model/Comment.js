import mongoose, { Schema } from "mongoose";


const commentSchema = new Schema({

    comment: {
        type: String,
        trim: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'UserDetails'
    }
}, { timestamps: true })

export const BlogComment = mongoose.model("BlogComment", commentSchema);