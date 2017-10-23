var fs = require("fs");

// var sess;

function checkCanEntry(users, req, res){
    // sess = req.session;
    // console.log(req.session);
    // sess.email = req.body.email;
        req.session.email = req.body.email;
    for( var u in users){
        if(users[u].email === req.body.email){
            res.status(200).send(JSON.stringify({id: users[u].id, email: req.session.email}));
            return false;
        }
    }
    return true;
}

exports.entry = function (req, res, next) {
    fs.readFile("/Users/aleksander/WebstormProjects/web-academy/metHods/users.json", "utf8", function (a, b) {
        var users = JSON.parse(b);
        if(!checkCanEntry(users, req, res)){
            return;
        };


        res.status(400).send("Неверно указан пароль или email");
    })
}