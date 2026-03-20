const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json()); // ЦЕ ОБОВ'ЯЗКОВО для роботи з JSON

const DATA_PATH = path.join(__dirname, 'data.json');

// Отримання даних
app.get('/api/resume', (req, res) => {
    fs.readFile(DATA_PATH, 'utf8', (err, data) => {
        if (err) return res.status(500).json({ error: "Файл не знайдено" });
        res.json(JSON.parse(data));
    });
});

// Збереження даних (Додай це, якщо ще немає)
app.post('/api/resume', (req, res) => {
    const updatedData = req.body;
    fs.writeFile(DATA_PATH, JSON.stringify(updatedData, null, 2), (err) => {
        if (err) return res.status(500).json({ error: "Помилка запису" });
        res.json({ message: "Дані успішно збережено!" });
    });
});

app.listen(3000, () => console.log('Backend за адресою: http://localhost:3000/api/resume'));