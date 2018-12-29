const express = require('express');
//处理文件目录的时候，比如登录有图片
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const db = require("./config/keys").mongoURI;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//是否允许跨域请求
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', me.options);
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//导入钥匙，连接表
mongoose.connect(db)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err))
const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`server started at localhost:${port}`)
})


//node启动简单步骤，express，app，port，listen
//引入body-parser，需要使用body-parser中间件

//mongoose数据库的连接，需要在mlab里面创建数据库,并注册一个表
//引入mongoose，导入地址，连接上数据表。

