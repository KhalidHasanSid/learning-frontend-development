
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Update with your MongoDB Atlas URL
const mongoURL = 'mongodb+srv://Admin:JLrfsliaiJ59ujjm@backend.stuhmzh.mongodb.net/Backend?retryWrites=true&w=majority';

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));

const textSchema = new mongoose.Schema({
    surah_number: String,
    ayat_number: String,
    translation: String,
    arabic_text: String,
});

const Quran = mongoose.model('Quran', textSchema);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/r', (req, res) => {
    const quranData = new Quran({
        surah_number: req.body.surah_number,
        ayat_number: req.body.ayat_number,
        translation: req.body.translation,
        arabic_text: req.body.arabic_text,
    });

    quranData.save((err) => {
        if (err) {
            res.status(500).send('Error occurred while saving data.');
        } else {
            res.send('Data saved successfully!');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
