// Xử lý các lời gọi đến đường dẫn bắt đầu từ /task1

const express = require('express');
const route = express.Router();
const controller = require('../controllers/controller');

route.get('/', controller.task1);   //gọi đến controller để xử lý

module.exports = route;