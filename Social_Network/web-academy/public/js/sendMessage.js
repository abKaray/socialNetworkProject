$(".res-form").submit(function(event){
    event.preventDefault();

    var textInput = $("#text_input").val();
    var img = $("#img_input").val();

    var date = new Date();
    if(textInput || img) {

        var srcImg = $("#blah").attr("src");
        $("#blah").css("display", "none");

        $(".page_chat_body_inner").append(function getMessage() {

            var url = window.location.href;
            var id = url.substring(url.lastIndexOf("=") + 1);
            if(id == 1) {
                name = "Steve";
                var date = new Date();
                minPhoto = "<img src='../image/SJ.jpg' class='img-circle'>";
            } else if(id == 2){
                name = "Mark";
                surname = "Zuckerberg";
            }

            var temp = `<div class="private_message"> 
                        <div class="mess_date">
                                <span>${date.toLocaleString("ru", {day:"numeric", month: "long"})}</span>
                            </div>
                            <div class="mess_stack">
                                <div class="mess_stack_photo">
                                    <div class="mess_photo_inner">
                                        <div class="min_photo">
                                                    ${minPhoto}
                                        </div>
                                    </div>
                                </div>
                                <div class="mess_stack_content">
                                    <div class="mess_name">${name}<span class="mess_time">${date.toLocaleString("ru", {hour:"numeric", minute: "numeric"})}</span></div>
                                    <ul class="mess_stack_ul">
                                        <li class="in_mess">
                                            <div class="mess_text_wall">
                                                <div class="mess_text">
                                                    ${textInput}
                                                </div>
                                                <div class="mess_img">
                                                    ${`<img src='${srcImg}' class="msgImg">`}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            </div>`;
            return temp;
        });
        $.ajax({
            url: "/sendMessage",
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

});
