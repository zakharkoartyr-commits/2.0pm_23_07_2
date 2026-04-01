const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors({
    origin: '*', // Дозволяє запити з будь-якого домену
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json()); 

const DATA_PATH = path.join(__dirname, 'data.json');


app.get('/api/resume', (req, res) => {
    fs.readFile(DATA_PATH, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: "Файл не знайдено" });
        res.json(JSON.parse(data));
    });
});

app.post('/api/resume', (req, res) => {
    const updatedData = req.body;
    fs.writeFile(DATA_PATH, JSON.stringify(updatedData, null, 2), (err) => {
        if (err) return res.status(500).json({ error: "Помилка запису" });
        res.json({ message: "Дані успішно збережено!" });
    });
});

app.listen(3000, () => console.log('Backend за адресою: http://localhost:3000/api/resume'));