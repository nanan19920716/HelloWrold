
var config = require("./config");
var ClientConn = {
    Client:require("mysql").createConnection(config)
};
module.exports = ClientConn;

