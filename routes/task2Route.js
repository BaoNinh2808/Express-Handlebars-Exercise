// Xử lý các lời gọi đến đường dẫn bắt đầu từ /task2

const express = require('express');
const route = express.Router();
const controller = require('../controllers/controller');

route.get('/', controller.task2);   //gọi đến controller để xử lý
route.post('/', controller.task2Post); //gọi đến controller để xử lý khi có dữ liệu post lên
module.exports = route;