import mongoose, { mongoose, Schema } from 'mongoose';

const blogSchema = new Schema({
    blogtitle: {
        type: String,
        require: true,
        trim: true,
    },
    blogcontent: {
        type: String,
        require: true
    },
    blogthumbnailurl: {
        type: String,
        require: true
    },
    blogauthor: {
        type: mongoose.Schema.ObjectId,
        ref: 'UserDetails',
        require: true
    },
    blogcomment: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'BlogComment'
        }
    ]


}, { timestamps: true })

export const Blog = mongoose.model("Blog", blogSchema)