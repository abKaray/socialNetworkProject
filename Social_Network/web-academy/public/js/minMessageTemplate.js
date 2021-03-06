function getMinMessage(obj) {

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
        <div class="col-md-offset-3 col-md-5 messege_list">
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="home">
            <div class="page_dialog">
                <ul class="my_dialog">
                    <li class="dialog">
                        <div class="min-dialog_photo">
                            <a href="mainPage.html">
                                <div class="img_grid">
                                <img src="../image/keanu.jpg" alt="Александр" class="img-circle">
                                </div>
                            </a>
                        </div>
                        <div class="min-dialog_content">
                            <div class="min-dialog_inner">
                                <div class="min-dialog_date">22 июня</div>
                                <div class="min-dialog_name">Keanu Reeves</div>
                                <div class="min-dialog_text-preview">Hello! How are you?</div>
                            </div>
                        </div>
                    </li>
                    <li class="dialog">
                        <div class="min-dialog_photo">
                            <a href="mainPage.html">
                                <div class="img_grid">
                                    <img src="../image/slava.jpg" alt="Александр" class="img-circle">
                                </div>
                            </a>
                        </div>
                        <div class="min-dialog_content">
                                <div class="min-dialog_inner">
                                    <div class="min-dialog_date">15 июня</div>
                                    <div class="min-dialog_name">Слава Вакарчук</div>
                                    <div class="min-dialog_text-preview">Як твої справи?</div>
                                </div>
                        </div>
                    </li>
                    <li class="dialog">
                        <div class="min-dialog_photo">
                            <a href="mainPage.html">
                                <div class="img_grid">
                                    <img src="../image/sheva.jpg" alt="Александр" class="img-circle">
                                </div>
                            </a>
                        </div>
                        <div class="min-dialog_content">
                            <a href="#">
                                <div class="min-dialog_inner">
                                    <div class="min-dialog_date">8 июня</div>
                                    <div class="min-dialog_name">Андрей Шевченко</div>
                                    <div class="min-dialog_text-preview">Да, в Милане было хорошо</div>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="dialog">
                        <div class="min-dialog_photo">
                            <a href="mainPage.html">
                                <div class="img_grid">
                                    <img src="../image/pitt.jpg" alt="Александр" class="img-circle">
                                </div>
                            </a>
                        </div>
                        <div class="min-dialog_content">
                            <a href="#">
                                <div class="min-dialog_inner">
                                    <div class="min-dialog_date">29 мая</div>
                                    <div class="min-dialog_name">Bred Pitt</div>
                                    <div class="min-dialog_text-preview">I miss Angelina...</div>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
                </div>
                <div role="tabpanel" class="tab-pane" id="profile">
                    <div class="page_dialog">
                <ul class="my_dialog">
                    <li class="dialog unread">
                        <div class="min-dialog_photo">
                            <a href="mainPage.html">
                                <div class="img_grid">
                                    <img src="../image/keanu.jpg" alt="Александр" class="img-circle">
                                </div>
                            </a>
                        </div>
                        <div class="min-dialog_content">
                            <a href="#">
                                <div class="min-dialog_inner">
                                    <div class="min-dialog_date">22 июня</div>
                                    <div class="min-dialog_name">Keanu Reeves</div>
                                    <div class="min-dialog_text-preview">Hello! How are you?</div>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="dialog unread">
                        <div class="min-dialog_photo">
                            <a href="mainPage.html">
                                <div class="img_grid">
                                    <img src="../image/slava.jpg" alt="Александр" class="img-circle">
                                </div>
                            </a>
                        </div>
                        <div class="min-dialog_content">
                            <a href="#">
                                <div class="min-dialog_inner">
                                    <div class="min-dialog_date">15 июня</div>
                                    <div class="min-dialog_name">Слава Вакарчук</div>
                                    <div class="min-dialog_text-preview">Як твої справи?</div>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="dialog unread">
                        <div class="min-dialog_photo">
                            <a href="mainPage.html">
                                <div class="img_grid">
                                    <img src="../image/sheva.jpg" alt="Александр" class="img-circle">
                                </div>
                            </a>
                        </div>
                        <div class="min-dialog_content">
                            <a href="#">
                                <div class="min-dialog_inner">
                                    <div class="min-dialog_date">8 июня</div>
                                    <div class="min-dialog_name">Андрей Шевченко</div>
                                    <div class="min-dialog_text-preview">Да, в Милане было хорошо</div>
                                </div>
                            </a>
                        </div>
                    </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-offset-1 col-md-2">
            <div class="change_block">
                <div class="change_messege_block">
                    <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Все сообщения</a></li>
                        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Непрочитанные</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
`;
    return template;
}


var url = window.location.href;
var id = url.substring(url.lastIndexOf("=") + 1);
if(id == 1) {
    $("body").append(getMinMessage({
        name: "Steve",
        minPhoto:"<img src='../image/SJ.jpg' class='img-circle'>"
    }));

} else if(id == 2){
    $("body").append(getMinMessage({
        name: "Mark",
        minPhoto:"<img src='../image/markMin.jpg' class='img-circle'>"
    }));
}