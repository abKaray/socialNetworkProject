var fs = require("fs");

exports.page = function (req, res, next) {

    fs.readFile("./metHods/users.json", "utf8", function (a, b) {
        console.log(arguments);
    });
}