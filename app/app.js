//모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`))
app.use(bodyParser.urlenconded({extended:true}));

app.use("/", home); // 미들 웨어 등록 메서드

module.exports = app;