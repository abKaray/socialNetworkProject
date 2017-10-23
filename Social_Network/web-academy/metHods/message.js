var fs = require("fs");

exports.message = function (req, res) {
    fs.readFile("/Users/aleksander/WebstormProjects/web-academy/metHods/message.json", "utf8", function (a, b) {
        var message = JSON.parse(b);

        var keys = Object.keys(message);
        var num;
        if(keys == 0){
            num = 1;
        } else{
            num = +keys.pop() + 1;
        }
        message[num] = req.body;

        fs.writeFile("/Users/aleksander/WebstormProjects/web-academy/metHods/message.json", JSON.stringify(message), "utf8", function () {
            res.status(200).send(JSON.stringify(message));

        })
    })
};