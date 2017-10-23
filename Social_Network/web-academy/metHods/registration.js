var fs = require("fs");

function checkCanAdd(users, req, res){

    for( var u in users){
        req.session.email = req.body.email;
        if(users[u].email == req.session.email){
            res.status(400).send("Пользователь с таким именем уже существует");
            return false;
        }
    }
    return true;
}

exports.post = function (req, res, next) {

    fs.readFile("./metHods/users.json", "utf8", function (a, b) {
        var users = JSON.parse(b);
        if(!checkCanAdd(users, req, res)){
            return;
        }

        var keys = Object.keys(users);
        var newId;
        if(keys.length == 0){
            newId = 1;
        } else{
            newId = +keys.pop() + 1;
        }

        users[newId] = req.body;
        users[newId].id = newId;
        fs.writeFile("./metHods/users.json", JSON.stringify(users), "utf8",function () {
            res.status(200);
            res.send(JSON.stringify({id: newId}))
        })
    })
    req.method
};

