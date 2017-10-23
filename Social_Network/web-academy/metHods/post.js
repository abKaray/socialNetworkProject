var fs = require("fs");

exports.sendPost = function (req, res) {
    fs.readFile("/Users/aleksander/WebstormProjects/web-academy/metHods/post.json", "utf8", function (a, b) {
        var message = JSON.parse(b);
// console.log(req.body);
        var keys = Object.keys(message);
        var num;
        if(keys == 0){
            num = 1;
        } else{
            num = +keys.pop() + 1;
        }
        message[num] = req.body;

        fs.writeFile("/Users/aleksander/WebstormProjects/web-academy/metHods/post.json", JSON.stringify(message), "utf8", function () {
            res.status(200).send(JSON.stringify(message));

        })
    })
};