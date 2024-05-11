//Cấu hình để dùng express.js
const express = require('express');     //Import express.js
const app = express();                  //Create an express app
const port = process.env.port || 3000;  //Define the port

//Cấu hình để dùng express-handlebars
const expressHbs = require('express-handlebars'); //Import express-handlebars

//Quy định thư mục html là thư mục gốc web
app.use(express.static(__dirname + '/html'));

//Tạo view engine là handlebars
app.engine(
    'hbs',
    expressHbs.engine(
        {
            extname: 'hbs',
            defaultLayout: "layout",
            layoutsDir: __dirname + '/views/layouts/',
            partialsDir: __dirname + '/views/partials/',
            extname: 'hbs',
        }
    )
)
app.set('view engine', 'hbs'); //set view engine là hbs

app.get('/', (req, res) =>{
    res.render('index', {title : "Jeopardize Contest"});    //lấy nội dung của file index.hbs đổ vào body trong layout.hbs
});

app.use(express.json()); //Middleware để đọc dữ liệu từ form gửi lên qua post --> parse ra json
app.use(express.urlencoded({extended: true})); //Middleware để đọc dữ liệu từ form

app.use("/task1", require('./routes/task1Route'));    //Tất cả các lời gọi đến /task1 ta sẽ chuyển qua cho task1Route xử lý
app.use("/task2", require('./routes/task2Route'));     //Tất cả các lời gọi đến /task2 ta sẽ chuyển qua cho task2Route xử lý
app.use("/task3", require('./routes/task3Route'));     //Tất cả các lời gọi đến /task3 ta sẽ chuyển qua cho task3Route xử lý
app.use("/task4", require('./routes/task4Route'));      //Tất cả các lời gọi đến /task4 ta sẽ chuyển qua cho task4Route xử lý


//Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});