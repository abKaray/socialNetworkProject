$(".post_form").submit(function (event) {
    event.preventDefault();

    var textInput = $("#text_input").val();
    var img = $("#img_input").val();

    var date = new Date();
    if(textInput || img) {

    var srcImg = $("#blah").attr("src");
    $("#blah").css("display", "none");
        $(".main_wall_posts").prepend(function getPostInf() {

            var countLike = 0;
            var date = new Date();
            var url = window.location.href;
            var id = url.substring(url.lastIndexOf("=") + 1);
            if(id == 1) {
                name = "Steve";
                surname = "Jobs";
                minPhoto = "<img src='../image/SJ.jpg' class='img-circle'>";
            } else if(id == 2){
                name = "Mark";
                surname = "Zuckerberg";
                minPhoto = "<img src='../image/markMin.jpg' class='img-circle'>";
            }
            var temp = `<div class="page_wall_posts">
                                <div class="post_content">
                                    <div class="post_header">
                                        <div class="post_img">
                                            <div class="min-profImg">
                                             <a href="#">
                                                ${minPhoto}
                                             </a>
                                            </div>
                                        </div>
                                    <div class="post_header_info">
                                        <div class="post_autor">${name} ${surname}</div>
                                        <div class="post_date">${date.toLocaleString("ru", {day:"numeric", month: "long", year: "numeric"})}</div>
                                    </div>
                                </div>
                                <div class="post_content">
                                    <div class="wall_content">
                                        <div class="wall_text">
                                            ${textInput}
                                        </div>
                                        <div class="page_img">
                                            ${`<img src='${srcImg}'>`}
                                        </div>
                                    </div>
                                </div>
                                    <div class="post_like">
                                        <div class="post_full_like">
                                                <i class="like_icon"><img src="../image/like.svg"></i>
                                                <span class="like_label">Нравится</span>
                                                <span class="like_count">${`<span class="countLike">0</span>`}</span>
                                            <div class="post_comment">
                                                <div href="#" class="comment_wrap">
                                                <i class="like_icon"><img src="../image/chat.svg"></i>
                                                <span class="comment_label">Комментировать</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <button class="remove-button">X</button>
                        </div>`;
            return temp;
        });
        var e = document.querySelector(".like_label");
        e.onclick = function () {
            $(".countLike").text(1);
        }
        $.ajax({
            url: "/sendPost",
            method: "POST",
            data: JSON.stringify({
                message: textInput,
                img: img
            }),
            contentType: "application/json",
            success: function (data) {

            },
            error: function () {

            }
        });

    }

    $("#text_input").val("");
    $("#blah").attr("src", "");

    var btn = document.querySelectorAll(".remove-button");
    for(var i = 0; i < btn.length; i++){
        var click = btn[i];
        click.onclick = function (event) {
            var target = event.target;
            var parent = target.parentNode;
            parent.parentNode.removeChild(parent);
        }
    }

});


