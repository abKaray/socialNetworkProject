function getFullMessage(obj) {
    var template = `<div class="header">
    <div class="row head">
        <span class="col-md-3 logo"><a href="#">LOGO</a></span>
        <div class="col-md-offset-6 col-md-2 prof-head">
            <div class="prof-name">
                ${obj.name}
            </div>
            <div class="min-profImg">
                ${obj.minPhoto}
            </div>
            <div class="prof-arrow">
                ▼
                <ul>
                    <div class="arrow_top"></div>
                    <a href="mainPage.html"><li>Моя страница</li></a>
                    <a href="../index.html" ><li>Выход</li></a>
                </ul>
            </div>
        </div>
    </div>
</div>

<div class="mainBody">
    <div class="row" style="height: 100%;">
        <div class="col-md-offset-1 col-md-2 main-menu">
            <div class="side-bar">
                <ol>
                    <li><div class="left-row"><span class="left-fixer"><span class="left-icon"><img src="../image/home.png"></span><span class="left-label" id="myClick">Моя страница</span></span></div></li>
                    <li><div href="#" class="left-row"><span class="left-fixer"><span class="left-icon"><img src="../image/news.png"></span><span class="left-label">Новости</span></span></div></li>
                    <li><div class="left-row"><span class="left-fixer"><span class="left-icon"><img src="../image/chatting.png"></span><span class="left-label" id="msgClick">Сообщения</span></span></div></li>
                    <li><div class="left-row"><span class="left-fixer"><span class="left-icon"><img src="../image/users.png"></span><span class="left-label" id="frndClick">Друзья</span></span></div></li>
                    <li><a href="../index.html" class="left-row"><span class="left-fixer"><span class="left-icon"><img src="../image/door.png"></span><span class="left-label">Выход</span></span></a></li>
                </ol>
            </div>
        </div>
        <div class="col-md-offset-3 col-md-6 messege_list">
            <div class="page_chat">
                <div class="page_chat_message">
                    <div class="page_chat_head">
                        <div class="page_chat_head_inner">
                            <div class="tool_head">
                                <div class="page_back">
                                    <a href="#"><span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span> Назад</a>
                                </div>
                                <div class="info_right">
                                    <a href="mainPage.html">
                                        <div class="img_grid">
                                            ${obj.minPhoto}
                                        </div>
                                    </a>
                                </div>
                                <div class="title_page_chat"><a href="#">${obj.name} ${obj.surname}</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="page_chat_body">
                        <div class="page_chat_body_inner">
                            <!--<img id="blah" src="#" alt="your image" />-->
                            </div>

                        </div>
                    </div>
                    <div class="page_chat_footer">
                        <div class="page_chat_footer_text">
                            <div class="textarea">
                                <form class="res-form" action="/sendMessage" method="post">
                                    <input id="text_input" type="text" placeholder="Введите сообщение...">
                                    <img id="blah" src="" alt="your image" />
                                </form>
                                <div class="tools_div">
                                <div class="tool_area">
                                    <input type="file" id="img_input" onchange="readURL(this)" alt="Добавить фото">
                                </div>
                                <div class="smile_tool"><img src="../image/smiling.svg" alt="Добавить смайл"></div>
                                <div class="gif_tool"><img src="../image/gif.svg"></div>
                                </div>
                            </div>

                        </div>
                    </div>
            </div>
        </div>`;
    return template;
};


var url = window.location.href;
var id = url.substring(url.lastIndexOf("=") + 1);
if(id == 1) {
    $("body").append(getFullMessage({
        name: "Steve",
        surname: "Jobs",
        minPhoto:"<img src='../image/SJ.jpg' class='img-circle'>"
    }));

} else if(id == 2){
    $("body").append(getFullMessage({
        name: "Mark",
        surname: "Zuckerberg",
        minPhoto:"<img src='../image/markMin.jpg' class='img-circle'>"
    }));
}