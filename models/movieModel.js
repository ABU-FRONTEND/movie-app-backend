import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    id: { type: Number, required: true },
    year: { type: Number, required: true },
    category: { type: String, required: true },
    rating: { type: String, required: true },
    thumbnail: {
        trending: {
            small: { type: String },
            large: { type: String }
        },
        regular: {
            small: { type: String },
            medium: { type: String },
            large: { type: String }
        }
    }
}, { timestamps: true });

const Movie = mongoose.model('Movie', movieSchema);
export default Movie;
