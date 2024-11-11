import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    tags: {
        type: [String],
        default: [],
    },
    contentSections: [
        {
            type: {
                type: String,
                enum: ['text', 'image'], // Define whether the section is text or an image
                required: true,
            },
            content: {
                type: String,
                required: true, // Either text content or an image URL
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    likes: {
        type: Number,
        default: 0,
    },
    dislikes: {
        type: Number,
        default: 0,
    },
    views: {
        type: Number,
        default: 0,
    },
    shares: {
        count: {
            type: Number,
            default: 0,
        },
        sharedBy: [
            {
                userId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User'
                },
                sharedAt: {
                    type: Date,
                    default: Date.now
                },
                platform: {
                    type: String, // Optional: could track which platform it was shared on (e.g., 'Facebook', 'Twitter')
                }
            }
        ]
    }
}, {
    timestamps: true
});

const Blog = mongoose.model('Blog', BlogSchema);

export default Blog;
