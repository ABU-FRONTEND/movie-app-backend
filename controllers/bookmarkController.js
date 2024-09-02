import User from '../models/userModel.js';
import Movie from '../models/movieModel.js';
import mongoose from 'mongoose';

export const addBookmark = async (req, res) => {
    try {
        const userId = req.user.id;
        const { movieId } = req.body;

        if (!mongoose.Types.ObjectId.isValid(movieId)) {
            return res.status(400).json({ error: 'Invalid movie ID' });
        }

        const movie = await Movie.findById(movieId);
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        if (user.bookmarkedMovies.includes(movieId)) {
            return res.status(400).json({ error: 'Movie already bookmarked' });
        }

        user.bookmarkedMovies.push(movieId);
        await user.save();
        res.status(200).json({ message: 'Movie bookmarked successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error adding bookmark' });
    }
};

export const removeBookmark = async (req, res) => {
    try {
        const userId = req.user.id;
        const { movieId } = req.body;

        if (!mongoose.Types.ObjectId.isValid(movieId)) {
            return res.status(400).json({ error: 'Invalid movie ID' });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.bookmarkedMovies = user.bookmarkedMovies.filter(id => id.toString() !== movieId);
        await user.save();
        res.status(200).json({ message: 'Movie removed from bookmarks successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error removing bookmark' });
    }
};