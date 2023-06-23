const express = require('express');
const cors = require('cors');
const userData = require('./userData');

const app = express();
app.use(cors());

// Маршрут, обрабатывающий GET запросы
app.get('/player-data', (req, res) => {
    res.json({userData}); // Отправляем JSON данные в ответ
});

// Запуск сервера на порту 3000
app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});
