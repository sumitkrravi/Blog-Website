import mongoose, { Schema } from 'mongoose';

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
        require:true
    },
    blogauthor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserDetails',
        require: true
    },
    blogcomment: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'BlogComment'
        }
    ],
    bloglike: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'BlogLike'
        }
    ]


}, { timestamps: true })

export const Blog = mongoose.model("Blog", blogSchema)