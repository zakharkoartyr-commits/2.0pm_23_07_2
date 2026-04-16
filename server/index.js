const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const DATA_PATH = path.join(__dirname, 'data.json');

app.get('/api/resume', (req, res) => {
    fs.readFile(DATA_PATH, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: "Файл не знайдено" });
        res.json(JSON.parse(data));
    });
});

// Для Лабораторної №4
app.post('/api/contact', (req, res) => {
    console.log('Нове повідомлення з форми:', req.body);
    res.status(200).send({ message: "Дані отримано на сервері!" });
});

app.listen(3000, () => console.log('Сервер: http://localhost:3000'));