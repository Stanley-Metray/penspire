import mongoose from 'mongoose';

const RatingSchema = new mongoose.Schema({
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    ratingType: {
        type: String,
        enum: ['like', 'dislike'],
        required: true,
    }
});

const Rating = mongoose.model('Rating', RatingSchema);

export default Rating;
