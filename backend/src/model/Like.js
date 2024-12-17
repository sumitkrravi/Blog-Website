import mongoose from 'mongoose'


const likeSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'UserDetails'
    },
    blog: {
        type: mongoose.Schema.ObjectId,
        ref: 'Blog'
    }
})

export const BlogLikes = mongoose.model("BlogLikes", likeSchema);