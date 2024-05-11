// Xử lý các lời gọi đến đường dẫn bắt đầu từ /task4

const express = require('express');
const route = express.Router();
const controller = require('../controllers/controller');

route.get('/', controller.task4);   //gọi đến controller để xử lý
route.get('/:name', controller.task4Detail);   //gọi đến controller để xử lý khi truyền tham số vào trong url (gọi detail)
module.exports = route;