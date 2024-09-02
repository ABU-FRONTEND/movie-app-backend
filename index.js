import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from './models/userModel.js';
import Movie from './models/movieModel.js'
const app = express();
const port = process.env.PORT || 3000;
const connectUrl = "mongodb+srv://shojik:3NAqlYto5jmCQcTj@backend.6l8ntax.mongodb.net/?retryWrites=true&w=majority&appName=backend";

import data from './data.js';

app.use(cors());
app.use(express.json());
function connectDB() {
    mongoose.connect(connectUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error('MongoDB connection error:', err));
}

app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ email: user.email }, 'your_secret_key', { expiresIn: '1h' });

        res.status(200).json({ token, user });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/bookmarks', (req, res) => {
    res.status(200).json(data.filter(movie => movie.isBookmarked === true));
})


app.get('/logout', (req, res) => {
    res.status(200).json({ message: 'Logout successful' });
});


app.get('/all', (req, res) => {
    res.status(200).json(data);
});
app.get('/category/:category', (req, res) => {
    const category = req.params.category.toLowerCase();
    let filteredData = data.filter(movie => movie.category.toLowerCase() === category);
    res.status(200).json(filteredData);
});
app.get('/trending', (req, res) => {
    res.status(200).json(data.filter(movie => movie.isTrending === true));
});

function verifyToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'Token not provided' });
    }

    jwt.verify(token, 'your_secret_key', (err, decoded) => {
        if (err) {
            console.error('Token verification error:', err);
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = decoded;
        next();
    });
}


app.get('/auth/check', (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'Token not provided' });
    }

    jwt.verify(token, 'your_secret_key', (err, decoded) => {
        if (err) {
            console.error('Token verification error:', err);
            return res.status(401).json({ message: 'Unauthorized' });
        }
        res.status(200).json({ message: 'Authorized', user: decoded });
    });
})

app.listen(port,'0.0.0.0', () => {
    console.log(`Server is running on +`);
    connectDB();
});
