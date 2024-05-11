//Tất cả các xử lý sẽ nằm trong đây
const controller = {}

//xử lý cho task 1
const {emotions} = require('../models/data');   //lấy mảng emotions từ file data.js trong thư mục models
controller.task1 = (req, res) => {
    res.locals.emotions = emotions; //gán mảng emotions vào biến emotions trong res.locals
    res.render('task1', {title : "Inspiring Quotes"});    //lấy nội dung của file task1.hbs đổ vào body trong layout.hbs
}

//xử lý cho task 2
controller.task2 = (req, res) => {
    const s55 = 0;
    const s10 = 0;
    const s5 = 0;
    res.render('task2', {title : "Jars Saving", s55, s10, s5});    //lấy nội dung của file task2.hbs đổ vào body trong layout.hbs
}

controller.task2Post = (req, res) => {
    const salary = isNaN(req.body.salary) ? 0 : parseFloat(req.body.salary); //lấy dữ liệu từ form gửi lên
    const s55 = (salary * 0.55).toFixed(2); //tính 55% lương
    const s10 = (salary * 0.1).toFixed(2); //tính 10% lương
    const s5 = (salary - s55 - 4*s10).toFixed(2); //tính số tiền 5% lương (số tiền còn lại sau khi trừ 55% và 4 lần 10%) để đảm bảo không sai số do làm tròn 
    res.render('task2', {title : "Jars Saving", s55, s10, s5}); //đổ dữ liệu vào task2.hbs
}

//xử lý cho task 3
const {categories} = require('../models/data'); //lấy mảng categories từ file categories.js trong thư mục models
const {products} = require('../models/data'); //lấy mảng products từ file products.js trong thư mục models
controller.task3 = (req, res) => {
    res.locals.categories = categories; //gán mảng categories vào biến categories trong res.locals
    res.locals.products = products; //gán mảng products vào biến products trong res.locals

    let category = req.query.category ? 0 : req.query.category; //lấy dữ liệu từ query string
    category = isNaN(req.query.category) ? 0 : parseInt(req.query.category); //nếu dữ liệu không phải là số thì gán bằng 0
    
    if (category > 0) {
        res.locals.products = products.filter(p => p.category === category); //lọc ra các sản phẩm có category = category
    }
    res.render('task3', {title : "TV Sales"});    //lấy nội dung của file task3.hbs đổ vào body trong layout.hbs
}

//xử lý cho task 4
const {zodiacs} = require('../models/data'); //lấy mảng zodiacs từ file data.js trong thư mục models
controller.task4 = (req, res) => {
    res.locals.zodiacs = zodiacs; //gán mảng zodiacs vào biến zodiacs trong res.locals
    res.render('task4', {title : "Zodiac Characteristics"});    //lấy nội dung của file task4.hbs đổ vào body trong layout.hbs
}


controller.task4Detail = (req, res) => {
    const name = req.params.name; //lấy dữ liệu từ url
    let zodiac = zodiacs.find(z => z.name === name); //tìm zodiac có name = name
    if (!zodiac) {
       zodiac = zodiacs[0]; //gán zodiac = zodiac đầu tiên nếu không tìm thấy
    }
    res.render('task4-details', {title : "Zodiac Characteristics Detail", zodiac});    //lấy nội dung của file task4Detail.hbs đổ vào body trong layout.hbs
}
module.exports = controller;
