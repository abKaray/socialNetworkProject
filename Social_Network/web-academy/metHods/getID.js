var fs = require("fs");


exports.getID = function (req, res, next) {
    fs.readFile("/Users/aleksander/WebstormProjects/web-academy/metHods/users.json", "utf8", function (a, b) {
           return res.status(200).send(JSON.parse(b));
    })
}