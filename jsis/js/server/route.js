
var express = require("express");
var router = express.Router();
var crud = require("./curd");

router.all("*",function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

router.get("/get/",function (req,res) {
    var sql = "select * from lxyz_news";
    //获取参数
    // var newlist = req.param("newlist");
    // console.log(newlist);
    var getArr = [];
    crud.selectData(sql,getArr,function (result) {
        if(result.length){
            res.json(200,result);
        }else{
            res.json(200,{
                "msg":false
            })
        }
    })
});
router.get("/get/sjjs/",function (req,res) {
    var sql = "select * from lxyz_sjjs";
    var getArr = [];
    crud.selectData(sql,getArr,function (result) {
        if(result.length){
            res.json(200,result);
        }else{
            res.json(200,{
                "msg":false
            })
        }
    })
});
module.exports = router;