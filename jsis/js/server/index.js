
var express = require("express");
var app = express();
var curd = require("./curd");
var router=require("./route");

app.use("/",router);

app.listen(3000,function () {
    console.log("服务器启动成功");
});