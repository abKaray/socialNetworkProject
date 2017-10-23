function getFullFriendsList(obj) {
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
        <div class="col-md-offset-3 col-md-7 friend_list">
            <div class="friend_list_head_wrapper">
                <div class="friend_block_head">
                    <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation" class="active"><a href="#allFriends" aria-controls="home" role="tab" data-toggle="tab">Все друзья<span class="friends_count">123</span></a></li>
                        <li role="presentation"><a href="#online" aria-controls="profile" role="tab" data-toggle="tab">Онлайн<span class="online_count">23</span></a></li>
                    </ul>
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane active" id="allFriends">
                            <ul class="uiList">
                                <li class="liList">
                                    <div class="clearfix">
                                        <a href="#">
                                        <div class="friends_photo">
                                            <img src="../image/min_photo.jpg" alt="Александр" class="img-circle">
                                        </div>
                                        </a>
                                        <div class="user_info">
                                            <div class="friend_title"><a href="#">Keanu Reeves</a></div>
                                            <div class="friends_field">284 друга</div>
                                            <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                        </div>
                                    </div>
                                </li>
                                <li class="liList">
                                    <div class="clearfix">
                                        <a href="#">
                                            <div class="friends_photo">
                                                <img src="../image/sheva.jpg" alt="Александр" class="img-circle">
                                            </div>
                                        </a>
                                        <div class="user_info">
                                            <div class="friend_title"><a href="#">Андрей Шевченко</a></div>
                                            <div class="friends_field">198 друзей</div>
                                            <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                        </div>
                                    </div>
                                </li>
                                <li class="liList">
                                    <div class="clearfix">
                                        <a href="#">
                                            <div class="friends_photo">
                                                <img src="../image/pitt.jpg" alt="Александр" class="img-circle">
                                            </div>
                                        </a>
                                        <div class="user_info">
                                            <div class="friend_title"><a href="#">Bred Pitt</a></div>
                                            <div class="friends_field">301 друг</div>
                                            <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                        </div>
                                    </div>
                                </li>
                                <li class="liList">
                                    <div class="clearfix">
                                        <a href="#">
                                            <div class="friends_photo">
                                                <img src="../image/slava.jpg" alt="Александр" class="img-circle">
                                            </div>
                                        </a>
                                        <div class="user_info">
                                            <div class="friend_title"><a href="#">Слава Вакарчук</a></div>
                                            <div class="friends_field">376 друзей</div>
                                            <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                        </div>
                                    </div>
                                </li>
                                <li class="liList">
                                    <div class="clearfix">
                                        <a href="#">
                                            <div class="friends_photo">
                                                <img src="../image/scarlett.jpg" alt="Александр" class="img-circle">
                                            </div>
                                        </a>
                                        <div class="user_info">
                                            <div class="friend_title"><a href="#">Scarlett Johansson</a></div>
                                            <div class="friends_field">284 друга</div>
                                            <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                        </div>
                                    </div>
                                </li>
                                <li class="liList">
                                    <div class="clearfix">
                                        <a href="#">
                                            <div class="friends_photo">
                                                <img src="../image/min_photo.jpg" alt="Александр" class="img-circle">
                                            </div>
                                        </a>
                                        <div class="user_info">
                                            <div class="friend_title"><a href="#">Keanu Reeves</a></div>
                                            <div class="friends_field">284 друга</div>
                                            <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                        </div>
                                    </div>
                                </li>
                                <li class="liList">
                                    <div class="clearfix">
                                        <a href="#">
                                            <div class="friends_photo">
                                                <img src="../image/min_photo.jpg" alt="Александр" class="img-circle">
                                            </div>
                                        </a>
                                        <div class="user_info">
                                            <div class="friend_title"><a href="#">Keanu Reeves</a></div>
                                            <div class="friends_field">284 друга</div>
                                            <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                        </div>
                                    </div>
                                </li>
                                <li class="liList">
                                    <div class="clearfix">
                                        <a href="#">
                                            <div class="friends_photo">
                                                <img src="../image/min_photo.jpg" alt="Александр" class="img-circle">
                                            </div>
                                        </a>
                                        <div class="user_info">
                                            <div class="friend_title"><a href="#">Keanu Reeves</a></div>
                                            <div class="friends_field">284 друга</div>
                                            <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                        </div>
                                    </div>
                                </li>
                                <li class="liList">
                                    <div class="clearfix">
                                        <a href="#">
                                            <div class="friends_photo">
                                                <img src="../image/min_photo.jpg" alt="Александр" class="img-circle">
                                            </div>
                                        </a>
                                        <div class="user_info">
                                            <div class="friend_title"><a href="#">Keanu Reeves</a></div>
                                            <div class="friends_field">284 друга</div>
                                            <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                        </div>
                                    </div>
                                </li>
                                <li class="liList">
                                    <div class="clearfix">
                                        <a href="#">
                                            <div class="friends_photo">
                                                <img src="../image/min_photo.jpg" alt="Александр" class="img-circle">
                                            </div>
                                        </a>
                                        <div class="user_info">
                                            <div class="friend_title"><a href="#">Keanu Reeves</a></div>
                                            <div class="friends_field">284 друга</div>
                                            <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                        </div>
                                    </div>
                                </li>
                                <li class="liList">
                                    <div class="clearfix">
                                        <a href="#">
                                            <div class="friends_photo">
                                                <img src="../image/min_photo.jpg" alt="Александр" class="img-circle">
                                            </div>
                                        </a>
                                        <div class="user_info">
                                            <div class="friend_title"><a href="#">Keanu Reeves</a></div>
                                            <div class="friends_field">284 друга</div>
                                            <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                        </div>
                                    </div>
                                </li>
                                <li class="liList">
                                    <div class="clearfix">
                                        <a href="#">
                                            <div class="friends_photo">
                                                <img src="../image/min_photo.jpg" alt="Александр" class="img-circle">
                                            </div>
                                        </a>
                                        <div class="user_info">
                                            <div class="friend_title"><a href="#">Keanu Reeves</a></div>
                                            <div class="friends_field">284 друга</div>
                                            <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                        </div>
                                    </div>
                                </li>
                                <li class="liList">
                                    <div class="clearfix">
                                        <a href="#">
                                            <div class="friends_photo">
                                                <img src="../image/slava.jpg" alt="Александр" class="img-circle">
                                            </div>
                                        </a>
                                        <div class="user_info">
                                            <div class="friend_title"><a href="#">Слава Вакарчук</a></div>
                                            <div class="friends_field">376 друзей</div>
                                            <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                        </div>
                                    </div>
                                </li>
                                <li class="liList">
                                    <div class="clearfix">
                                        <a href="#">
                                            <div class="friends_photo">
                                                <img src="../image/scarlett.jpg" alt="Александр" class="img-circle">
                                            </div>
                                        </a>
                                        <div class="user_info">
                                            <div class="friend_title"><a href="#">Scarlett Johansson</a></div>
                                            <div class="friends_field">284 друга</div>
                                            <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                        </div>
                                    </div>
                                </li>
                                <li class="liList">
                                    <div class="clearfix">
                                        <a href="#">
                                            <div class="friends_photo">
                                                <img src="../image/min_photo.jpg" alt="Александр" class="img-circle">
                                            </div>
                                        </a>
                                        <div class="user_info">
                                            <div class="friend_title"><a href="#">Keanu Reeves</a></div>
                                            <div class="friends_field">284 друга</div>
                                            <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                        </div>
                                    </div>
                                </li>
                                <li class="liList">
                                    <div class="clearfix">
                                        <a href="#">
                                            <div class="friends_photo">
                                                <img src="../image/min_photo.jpg" alt="Александр" class="img-circle">
                                            </div>
                                        </a>
                                        <div class="user_info">
                                            <div class="friend_title"><a href="#">Keanu Reeves</a></div>
                                            <div class="friends_field">284 друга</div>
                                            <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                        </div>
                                    </div>
                                </li>
                                <li class="liList">
                                    <div class="clearfix">
                                        <a href="#">
                                            <div class="friends_photo">
                                                <img src="../image/min_photo.jpg" alt="Александр" class="img-circle">
                                            </div>
                                        </a>
                                        <div class="user_info">
                                            <div class="friend_title"><a href="#">Keanu Reeves</a></div>
                                            <div class="friends_field">284 друга</div>
                                            <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                        </div>
                                    </div>
                                </li>
                                <li class="liList">
                                    <div class="clearfix">
                                        <a href="#">
                                            <div class="friends_photo">
                                                <img src="../image/min_photo.jpg" alt="Александр" class="img-circle">
                                            </div>
                                        </a>
                                        <div class="user_info">
                                            <div class="friend_title"><a href="#">Keanu Reeves</a></div>
                                            <div class="friends_field">284 друга</div>
                                            <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                        </div>
                                    </div>
                                </li>
                                <li class="liList">
                                    <div class="clearfix">
                                        <a href="#">
                                            <div class="friends_photo">
                                                <img src="../image/min_photo.jpg" alt="Александр" class="img-circle">
                                            </div>
                                        </a>
                                        <div class="user_info">
                                            <div class="friend_title"><a href="#">Keanu Reeves</a></div>
                                            <div class="friends_field">284 друга</div>
                                            <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                        </div>
                                    </div>
                                </li>
                                <li class="liList">
                                    <div class="clearfix">
                                        <a href="#">
                                            <div class="friends_photo">
                                                <img src="../image/min_photo.jpg" alt="Александр" class="img-circle">
                                            </div>
                                        </a>
                                        <div class="user_info">
                                            <div class="friend_title"><a href="#">Keanu Reeves</a></div>
                                            <div class="friends_field">284 друга</div>
                                            <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                    </div>
                        <!--Online-->
                        <div role="tabpanel" class="tab-pane" id="online">
                            <li class="liList">
                                <div class="clearfix">
                                    <a href="#">
                                        <div class="friends_photo">
                                            <img src="../image/slava.jpg" alt="Александр" class="img-circle">
                                        </div>
                                    </a>
                                    <div class="user_info">
                                        <div class="friend_title"><a href="#">Слава Вакарчук</a></div>
                                        <div class="friends_field">376 друзей</div>
                                        <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                    </div>
                                </div>
                            </li>
                            <li class="liList">
                                <div class="clearfix">
                                    <a href="#">
                                        <div class="friends_photo">
                                            <img src="../image/scarlett.jpg" alt="Александр" class="img-circle">
                                        </div>
                                    </a>
                                    <div class="user_info">
                                        <div class="friend_title"><a href="#">Scarlett Johansson</a></div>
                                        <div class="friends_field">284 друга</div>
                                        <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                    </div>
                                </div>
                            </li>
                            <li class="liList">
                                <div class="clearfix">
                                    <a href="#">
                                        <div class="friends_photo">
                                            <img src="../image/min_photo.jpg" alt="Александр" class="img-circle">
                                        </div>
                                    </a>
                                    <div class="user_info">
                                        <div class="friend_title"><a href="#">Keanu Reeves</a></div>
                                        <div class="friends_field">284 друга</div>
                                        <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                    </div>
                                </div>
                            </li>
                            <li class="liList">
                                <div class="clearfix">
                                    <a href="#">
                                        <div class="friends_photo">
                                            <img src="../image/min_photo.jpg" alt="Александр" class="img-circle">
                                        </div>
                                    </a>
                                    <div class="user_info">
                                        <div class="friend_title"><a href="#">Keanu Reeves</a></div>
                                        <div class="friends_field">284 друга</div>
                                        <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                    </div>
                                </div>
                            </li>
                            <li class="liList">
                                <div class="clearfix">
                                    <a href="#">
                                        <div class="friends_photo">
                                            <img src="../image/min_photo.jpg" alt="Александр" class="img-circle">
                                        </div>
                                    </a>
                                    <div class="user_info">
                                        <div class="friend_title"><a href="#">Keanu Reeves</a></div>
                                        <div class="friends_field">284 друга</div>
                                        <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                    </div>
                                </div>
                            </li>
                            <li class="liList">
                                <div class="clearfix">
                                    <a href="#">
                                        <div class="friends_photo">
                                            <img src="../image/min_photo.jpg" alt="Александр" class="img-circle">
                                        </div>
                                    </a>
                                    <div class="user_info">
                                        <div class="friend_title"><a href="#">Keanu Reeves</a></div>
                                        <div class="friends_field">284 друга</div>
                                        <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                    </div>
                                </div>
                            </li>
                            <li class="liList">
                                <div class="clearfix">
                                    <a href="#">
                                        <div class="friends_photo">
                                            <img src="../image/min_photo.jpg" alt="Александр" class="img-circle">
                                        </div>
                                    </a>
                                    <div class="user_info">
                                        <div class="friend_title"><a href="#">Keanu Reeves</a></div>
                                        <div class="friends_field">284 друга</div>
                                        <div class="friends_messege"><a href="#">Написать сообщение</a></div>
                                    </div>
                                </div>
                            </li>
                        </div>
                </div>
            </div>
            <div class="friend_list_content">

            </div>
        </div>`;
    return template;
}

var url = window.location.href;
var id = url.substring(url.lastIndexOf("=") + 1);
if(id == 1) {
    $("body").append(getFullFriendsList({
        name: "Steve",
        minPhoto:"<img src='../image/SJ.jpg' class='img-circle'>"
    }));

} else if(id == 2){
    $("body").append(getFullFriendsList({
        name: "Mark",
        minPhoto:"<img src='../image/markMin.jpg' class='img-circle'>"
    }));
}