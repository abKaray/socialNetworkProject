function getMainPage(obj) {


    var tamplate = `<div class="header">
    <div class="row head">
        <span class="col-md-3 logo" id="myClick">LOGO</a></span>
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
                    <a id="myClick"><li>Моя страница</li></a>
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
        <div class="col-md-offset-3 col-md-8 usersInfo">
            <div class="main_photo">
                ${obj.href}
            </div>
            <div class="row">
                <div class="col-md-12">
            <div class="wide-column">
                <div class="page-block">
                    <div class="page-info">
                        <div class="page-top">
                            <div class="inform-about">
                                <div class="name">${obj.name} ${obj.surname}</div>
                                <div class="inform-short">
                                    <div class="profile-info">
                                        <label class="lbl">День рождения:</label>
                                        <label class="labeled">${obj.date}</label>
                                    </div>
                                    <div class="profile-info">
                                        <label class="lbl">Город:</label>
                                        <label class="labeled">${obj.city}</label>
                                    </div>
                                    <div class="profile-info">
                                        <label class="lbl">Семейное положение:</label>
                                        <label class="labeled">${obj.merry}</label>
                                    </div>
                                    <div class="profile-info">
                                        <label class="lbl">Образование:</label>
                                        <label class="labeled">${obj.graduate}</label>
                                    </div>
                                </div>
                                <div class="main-info">
                                    <div class="main-name">Основная информация</div>
                                    <div class="profile-info">
                                        <label class="lbl">Родной город:</label>
                                        <label class="labeled">${obj.city}</label>
                                    </div>
                                    <div class="profile-info">
                                        <label class="lbl">Родственники:</label>
                                        <label class="labeled">${obj.relatives}</label>
                                    </div>
                                </div>
                                <div class="contact-info">
                                    <div class="contact-name">Контактная информация</div>
                                    <div class="profile-info">
                                        <label class="lbl">Моб.телефон:</label>
                                        <label class="labeled">${obj.mobile}</label>
                                    </div>
                                    <div class="profile-info">
                                        <label class="lbl">Адрес:</label>
                                        <label class="labeled">${obj.adress}</label>
                                    </div>
                                </div>
                                <div class="count-block">
                                    <a href="#" class="count-href">
                                        <div class="count">123</div>
                                        <label>Друга</label>
                                    </a>
                                    <a href="#" class="count-href">
                                        <div class="count">43</div>
                                        <label>Подписчика</label>
                                    </a>
                                    <a href="#" class="count-href">
                                        <div class="count">14</div>
                                        <label>Отметок</label>
                                    </a>
                                    <a href="#" class="count-href">
                                        <div class="count">15</div>
                                        <label>Видеозаписей</label>
                                    </a>
                                    <a href="#" class="count-href">
                                        <div class="count">135</div>
                                        <label>Аудиозаписей</label>
                                    </a>
                                </div>
                            </div>
                            <div class="page-img">${obj.middlePhoto}</div>
                        </div>
                    </div>
                    <div class="main-post">
                        <div class="all_post"><label class="label_post">Все записи</label></div>

                        <div class="post_wrap">
                            <div class="post_field">
                                <div class="post_inner">
                                    <form class="post_form" action="/sendPost" method="post">
                                        <input id="text_input" type="text" placeholder="Что у Вас новенького?">
                                        <img id="blah" src="" alt="your image" />
                                    </form>
                                </div>
                                <div class="tools_div">
                                    <div class="tool_area">
                                        <input type="file" id="img_input" onchange="readURL(this)" alt="Добавить фото">
                                    </div>
                                    <div class="smile_tool"><img src="../image/smiling.svg" alt="Добавить смайл"></div>
                                    <div class="gif_tool"><img src="../image/gif.svg"></div>
                                </div>
                            </div>
                        </div>
                        <div class="main_wall_posts">
                            <div class="page_wall_posts">
                                <div class="post_content">
                                    <div class="post_header">
                                        <div class="post_img">
                                            <div class="min-profImg">
                                                ${obj.minPhoto}
                                            </div>
                                        </div>
                                    <div class="post_header_info">
                                        <div class="post_autor">${obj.name} ${obj.surname}</div>
                                        <div class="post_date">${obj.datePost}</div>
                                    </div>
                                </div>
                                <div class="post_content">
                                    <div class="wall_content">
                                        <div class="wall_text">
                                            ${obj.textPost}
                                        </div>
                                        <div class="page_img">
                                            ${obj.postPicture}
                                        </div>
                                    </div>
                                </div>
                                    <div class="post_like">
                                        
                                            </a>
                                            <div class="post_comment">
                                                <a href="#" class="comment_wrap">
                                                <i class="like_icon"><img src="../image/chat.svg"></i>
                                                <span class="comment_label">Комментировать</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        
                     
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
</div>`;
    return tamplate;
}

var url = window.location.href;
var id = url.substring(url.lastIndexOf("=") + 1);
if(id == 1) {
    $("body").append(getMainPage({
        name: "Steve",
        surname: "Jobs",
        minPhoto:"<img src='../image/SJ.jpg' class='img-circle'>",
        href: "<img src='../image/AM.jpg'>",
        middlePhoto: "<img src='../image/SJ.jpg'>",
        date: "24 february",
        city: "San Francisco",
        graduate: "None",
        merry: "Married",
        relatives: "Yeap",
        mobile: "Apple",
        adress: "Cupertino, California, US",
        datePost: "24 august",
        textPost: "Everyone should read",
        postPicture: "<img src='../image/iphone8.jpg'>"
    }));

} else if(id == 2){
    $("body").append(getMainPage({
        name: "Mark",
        surname: "Zuckerberg",
        minPhoto:"<img src='../image/markMin.jpg' class='img-circle'>",
        href: "<img src='../image/markBig.jpg'>",
        middlePhoto: "<img src='../image/markMin.jpg'>",
        date: "14 may",
        city: "New York",
        graduate: "Harvard University",
        merry: "Married",
        relatives: "Yeap",
        mobile: "Facebook",
        adress: "Menlo Park, CA",
        datePost: "26 august",
        textPost: "Everyone should read",
        postPicture: "<img src='../image/FBManage.jpg'>"
    }));
}