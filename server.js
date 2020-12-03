const express = require('express');
const app = express();
require('dotenv').config();
const layout = require('express-ejs-layouts');
const mongoose = require('mongoose');
const bodyParser = require("body-parser"); //body parser dùng để lấy dữ liệu từ form

/////API CONTROLLERS
//----------------> api admin controllers
const adminApiCategoryController  = require('./api/admin/api-admin-category-controller');
const adminApiUserController = require('./api/admin/api-admin-user-controller');


//---------------->admin controllers

const adminCategoryController = require('./controllers/admin/admin-category-controller');
const adminHomeController = require('./controllers/admin/admin-home-controller');
const adminUserController = require('./controllers/admin/admin-user-controller');

const homeController = require('./controllers/home-controller');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.set("view engine", "ejs"); //set view engine cho nodejs
app.set("views", "./views"); //set thư mục view cho project
app.use(express.static(__dirname + "/public")); //set đường dẫn tới thư mục public gồm css,js,bootstrap...
app.use(layout);//set layout


mongoose.connect(
    process.env.mongoose,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
    () => {
      console.log("connect database successfully");
    }
  );

  //use controller from front-end
app.use('/',homeController);


//use admin controllers from back-end
app.use('/admin',adminHomeController);
app.use('/admin/category',adminCategoryController);
app.use('/admin/user',adminUserController);


//use api from back-end
app.use('/api/admin/user',adminApiUserController);
app.use('/api/admin/categroy',adminApiCategoryController);




app.listen(process.env.PORT, _=>{
    console.log(`server is running on port ${process.env.PORT}`);
});




