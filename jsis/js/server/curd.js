
var ClientConn = require("./connsql");

var curd = {
    selectData:function (sql,inputpar,callback) {
        ClientConn.Client.query(sql,inputpar,function (error,result) {
            if(error){
                console.log("操作失败");
                return;
            }
            console.log("操作成功");
            callback(result);
        })
    }
};
module.exports = curd;