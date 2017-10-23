//Registration form
 $(".reg_form").submit(function (event) {
     event.preventDefault();
        var email = $(".eml").val();
        var pass = $(".psw").val();

        if(email && pass){
            $.ajax({
               url: "/reg",
                method: "POST",
                data: JSON.stringify({
                   email: email,
                    password: pass
                }),
                contentType: "application/json",
                success: function(data) {
                    console.log(data);
                    console.log(location);
                    $(".modal-bdy").html("<div style='font-size: 20px; color: #FF7F00; letter-spacing: 1px;'>Поздравляем! Вы зарегестрировались!</div>");
                },
                error: function() {
                $(".repeatEmail").text("Пользователь с таким email`ом уже существует");
                $(".eml").css("border", "1px solid red");
                }
            });

        }
 });

//Entry form
 $(".entry_form").submit(function (event) {
     event.preventDefault();
     var email = $(".entry_email").val();
     var pass = $(".entry_password").val();

     if(email && pass){
         $.ajax({
             url: "/",
             method: "POST",
             data: JSON.stringify({
                 email: email,
                 password: pass
             }),
             contentType: "application/json",
             success: function(data) {
                 var test = JSON.parse(data);
                 window.location.href = "/mainPage?id=" + test.id;
                 console.log(data);
             },
             error: function() {
                 $(".repeatEntry").text("Неверно указан пароль или email");
                 $(".entry_email").css("border", "1px solid red");
                 $(".entry_password").css("border", "1px solid red");
             }
         });

     }
 });

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .css("display", "block");
        };

        reader.readAsDataURL(input.files[0]);
    }
}

var allDialog = document.querySelectorAll(".min-dialog_content");
for(var i = 0; i < allDialog.length; i++){
    menuClick(allDialog[i], "fullMsg", "/fullMessage?id=");
}

//словили ошибку
try {
    var headReg = document.querySelector(".head-registr");
    var modal = document.querySelector("#myModal");
    var close = document.querySelector(".close");
    var bodyReg = document.querySelectorAll(".btn-default")[2];

    headReg.onclick =function () {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }
    bodyReg.onclick =function () {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }
    close.onclick = function () {
        modal.style.display = "none";
        document.body.style.overflow = "scroll";
    }
    window.onclick = function () {
        if(event.target == modal){
            modal.style.display = "none";
            document.body.style.overflow = "scroll";
        }
    };
} catch (e){
    console.log(e);
}

var url = window.location.href;
var id = url.substring(url.lastIndexOf("=") + 1);

//findId
function menuClick(btn, url, href) {
    $(btn).click(function() {
        $.ajax({
            url: url,
            method: "POST",
            contentType: "application/json",
            success: function (data) {
                for(var u in data){
                    var url = window.location.href;
                    var id = url.substring(url.lastIndexOf("=") + 1);
                    if(+id === data[u].id){
                        window.location.href = href + data[u].id;
                    }
                }
            },
            error: function () {

            }
        });
    });
};
menuClick("#msgClick", "/mainMsg", "/minMessage?id=");
menuClick("#frndClick", "/mainFrnd", "/friendsList?id=");
menuClick("#myClick", "/mainPag", "/mainPage?id=");
