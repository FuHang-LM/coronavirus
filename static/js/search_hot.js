(function (func) {
    $.ajax({
        url: "/data/getSearch_hot",
        type: "GET",
        dataType: "json",
        success: function (search_hot) {
            func(search_hot.series);
        }
    });
})(function (search_hot) {
    function search() {
        var div_1 = document.querySelector("#div_1");

        var div_3 = document.querySelector("#div_3");
        var div_4 = document.querySelector("#div_4");
        // let div1 = document.createElement('div');

        let div3 = document.createElement('div');
        let div4 = document.createElement('div');
        var div1 = '';
        var j = 0;
        for (var i = 0; i < search_hot.length; i++) {
            if (search_hot[i]['title'] === '今日疫情热搜') {
                var query = search_hot[i]['query'];
                var url = search_hot[i]['url'];
                var degree = search_hot[i]['degree'];
                // console.log(query, url, degree);
                div1 += `
                <div class="row">
                    <span class="col">${++j}</span>
                    <span class="col"><a href="${url}" style="text-decoration:none;color: #61a8ff;">${query}</a></span>
                    <span class="col">${degree}</span>
                    <span class="icon-dot"></span>
                </div>
            `;
            }
        }
        div_1.innerHTML = div1
    }

    function prevention() {
        var div_2 = document.querySelector("#div_2");
        // let div2 = document.createElement('div');
        var div2 = '';
        var j = 0;
        for (var i = 0; i < search_hot.length; i++) {
            if (search_hot[i]['title'] === '防疫知识热搜') {
                var query = search_hot[i]['query'];
                var url = search_hot[i]['url'];
                var degree = search_hot[i]['degree'];
                // console.log(query, url, degree);
                div2 += `
                <div class="row">
                    <span class="col">${++j}</span>
                    <span class="col"><a href="${url}" style="text-decoration:none;color: #61a8ff;">${query}</a></span>
                    <span class="col">${degree}</span>
                    <span class="icon-dot"></span>
                </div>
            `;
            }
        }
        // console.log(div2);
        div_2.innerHTML = div2;
        // div_2.appendChild(div2);
    }

    function rumor() {
        var div_3 = document.querySelector("#div_3");
        // let div2 = document.createElement('div');
        var div3 = '';
        var j = 0;
        for (var i = 0; i < search_hot.length; i++) {
            if (search_hot[i]['title'] === '热搜谣言粉碎') {
                var query = search_hot[i]['query'];
                var url = search_hot[i]['url'];
                var degree = search_hot[i]['degree'];
                // console.log(query, url, degree);
                // console.log(i);
                div3 += `
                <div class="row">
                    <span class="col">${++j}&ensp;<button style="border-radius: 5px;width: 1.5rem;height: 0.75rem;background: darkred;outline:none;font-size: 0.5rem;border: none;padding: 0;margin: 0"><a href="${url}" style="text-decoration:none;color: white;">谣言</a></button></span>
                    <span class="col"><a href="${url}" style="text-decoration:none;color: #61a8ff;">${query}</a></span>
                    <span class="col">${degree}</span>
                    <span class="icon-dot"></span>
                </div>
            `;
            }
        }
        // console.log(div2);
        div_3.innerHTML = div3;
        // div_2.appendChild(div2);
    }


    function recovery() {
        var div_4 = document.querySelector("#div_4");
        // let div2 = document.createElement('div');
        var div4 = '';
        var j = 0;
        for (var i = 0; i < search_hot.length; i++) {
            if (search_hot[i]['title'] === '复工复课热搜') {
                var query = search_hot[i]['query'];
                var url = search_hot[i]['url'];
                var degree = search_hot[i]['degree'];
                // console.log(query, url, degree);
                // console.log(i);
                div4 += `
                <div class="row">
                    <span class="col">${++j}</span>
                    <span class="col"><a href="${url}" style="text-decoration:none;color: #61a8ff;">${query}</a></span>
                    <span class="col">${degree}</span>
                    <span class="icon-dot"></span>
                </div>
            `;

            }
        }
        // console.log(div2);
        div_4.innerHTML = div4;
        // div_2.appendChild(div2);
    }

    function hot_person() {
        var div_5 = document.querySelector("#div_5");
        let div5 = document.createElement('table');
        div5.style.width = '100%';
        // div5.style.padding = '0';
        // div5.style.marginBottom = '10px';
        // div5.style.margin = '0';
        // div5.style.border = '1';
        // var div5 = '';
        var j = 0;
        for (var i = 0; i < search_hot.length; i++) {
            if (search_hot[i]['title'] === '热门人物榜') {
                var query = search_hot[i]['query'];
                var url = search_hot[i]['url'];
                var degree = search_hot[i]['degree'];
                // console.log(query, url, degree);
                // console.log(i);
                div5.innerHTML += `
                    <tr style="margin-top: 0.35rem;text-align: center">
                        <td><img src="../static/img/person.png" style="width: 1.1rem;height: 1.1rem"></td>
                        <td style="color: #4c9bfd;font-size: 0.8rem"><a href="https://baike.baidu.com/item/${query}">${query}</a></td>
                        <td style="color: gray;font-size: 0.6rem">${url}</td>
                        <td style="color: #4c9bfd;font-size: 0.7rem">${degree}</td>
                    </tr>
            `;
            }
        }
        // console.log(div2);
        // div_5.innerHTML = div5;
        div_5.appendChild(div5);
    }

    function soar() {
        var soar = document.querySelector("#soar");
        let div6 = document.createElement('table');
        div6.style.width = '100%';
        // div6.style.marginTop = '2rem';
        // div6.style.background = 'blue';
        // div5.style.padding = '0';
        // div5.style.marginBottom = '10px';
        // div5.style.margin = '0';
        // div5.style.border = '1';
        // var div6 = '';
        var j = 0;
        for (var i = 0; i < search_hot.length; i++) {
            if (search_hot[i]['title'] === '疫期飙升榜') {
                var query = search_hot[i]['query'];
                var url = search_hot[i]['url'];
                var degree = search_hot[i]['degree'];
                var hotArrow = search_hot[i]['hotArrow'];
                var up = '';
                var size_color = '';
                if (hotArrow == '1') {
                    up = 'icon-up';
                    size_color = 'red';
                } else {
                    up = 'icon-down';
                    size_color = 'green';
                }

                // console.log(hotArrow);
                div6.innerHTML += `
                    <tr style="text-align: center;">
                        <td style="color: #4c9bfd;font-size: 0.6rem;height: 1.4rem">${++j}</td>
                        <td style="color: #4c9bfd;font-size: 0.6rem;height: 1.4rem"><a href="${url}">${query}<span style="font-size: 0.3rem;color: ${size_color}" class="${up}"></span></a></td>
                        <td style="color: #4c9bfd;font-size: 0.4rem;height: 1.4rem">${degree}</td>
                    </tr>
            `;
            }
        }
        // console.log(div2);
        // soar.innerHTML = div6;
        soar.appendChild(div6);
    }


    function game() {
        var games = document.querySelector("#list");
        // let game_table = document.createElement('table');
        // game_table.style.width = '100%';
        // div5.style.padding = '0';
        // div5.style.marginBottom = '10px';
        // div5.style.margin = '0';
        // div5.style.border = '1';
        var game_table = '';
        var j = 0;
        for (var i = 0; i < search_hot.length; i++) {
            if (search_hot[i]['title'] === '游戏榜') {
                var query = search_hot[i]['query'];
                var url = search_hot[i]['url'];
                var degree = search_hot[i]['degree'];
                var hotArrow = search_hot[i]['hotArrow'];
                var up = '';
                var size_color = '';
                if (hotArrow == '1') {
                    up = 'icon-up';
                    size_color = 'red';
                } else {
                    up = 'icon-down';
                    size_color = 'green';
                }
                // console.log(i);
                game_table += `
                    <tr style="margin-top: 0.35rem;text-align: center;height: 20%;">
                        <td style="color: #4c9bfd;font-size: 0.6rem;">${++j}</td>
                        <td style="color: #4c9bfd;font-size: 0.7rem;"><a href="${url}">${query}<span style="font-size: 0.3rem;color: ${size_color}" class="${up}"></span></a></td>
                    </tr>
            `;
            }
        }
        // console.log(div2);
        games.innerHTML = game_table;
        // games.appendChild(game_table);
    }

    function movie() {
        var movies = document.querySelector("#list");
        // let movie_table = document.createElement('table');
        // movie_table.style.width = '100%';
        // div5.style.padding = '0';
        // div5.style.marginBottom = '10px';
        // div5.style.margin = '0';
        // div5.style.border = '1';
        var movie_table = '';
        var j = 0;
        for (var i = 0; i < search_hot.length; i++) {
            if (search_hot[i]['title'] === '影视榜') {
                var query = search_hot[i]['query'];
                var url = search_hot[i]['url'];
                var degree = search_hot[i]['degree'];
                var hotArrow = search_hot[i]['hotArrow'];
                var up = '';
                var size_color = '';
                if (hotArrow == '1') {
                    up = 'icon-up';
                    size_color = 'red';
                } else {
                    up = 'icon-down';
                    size_color = 'green';
                }
                console.log(i);
                movie_table += `
                    <tr style="margin-top: 0.35rem;text-align: center;height: 20%;">
                        <td style="color: #4c9bfd;font-size: 0.6rem;">${++j}</td>
                        <td style="color: #4c9bfd;font-size: 0.7rem;"><a href="${url}">${query}<span style="font-size: 0.3rem;color: ${size_color}" class="${up}"></span></a></td>
                    </tr>
            `;
            }
        }
        // console.log(div2);
        movies.innerHTML = movie_table;
        // movies.appendChild(movie_table);
    }

    function novel() {
        var novels = document.querySelector("#list");
        // let novel_table = document.createElement('table');
        // novel_table.style.width = '100%';
        // div5.style.padding = '0';
        // div5.style.marginBottom = '10px';
        // div5.style.margin = '0';
        // div5.style.border = '1';
        var novel_table = '';
        var j = 0;
        for (var i = 0; i < search_hot.length; i++) {
            if (search_hot[i]['title'] === '小说榜') {
                var query = search_hot[i]['query'];
                var url = search_hot[i]['url'];
                var degree = search_hot[i]['degree'];
                var hotArrow = search_hot[i]['hotArrow'];
                var up = '';
                var size_color = '';
                if (hotArrow == '1') {
                    up = 'icon-up';
                    size_color = 'red';
                } else {
                    up = 'icon-down';
                    size_color = 'green';
                }
                console.log(i);
                novel_table += `
                    <tr style="margin-top: 0.35rem;text-align: center;height: 20%;">
                        <td style="color: #4c9bfd;font-size: 0.6rem;">${++j}</td>
                        <td style="color: #4c9bfd;font-size: 0.7rem;"><a href="${url}">${query}<span style="font-size: 0.3rem;color: ${size_color}" class="${up}"></span></a></td>
                    </tr>
            `;
            }
        }
        // console.log(div2);
        novels.innerHTML = novel_table;
        // novels.appendChild(novel_table);
    }


    function history() {
        var history = document.querySelector("#history");
        var data1 = [];
        var data2 = [];
        var data3 = [];
        var data4 = [];
        $(search_hot).each(function (k, v) {
            data1.push(v.query);
            data2.push(v.url);
            data3.push(v.degree);
            data4.push(v.hotArrow);

            // console.log(v.years, v.shouru)
        });
        let history_s = document.createElement('table');
        history_s.style.width = '100%';
        // var div6 = '';
        var j = 0;
        for (var i = 0; i < search_hot.length; i++) {
            if (search_hot[i]['title'] === '历史热搜') {
                var query = search_hot[i]['query'];
                var url = search_hot[i]['url'];
                var degree = search_hot[i]['degree'];
                var hotArrow = search_hot[i]['hotArrow'];
                var up = '';
                var size_color = '';
                if (hotArrow == '1') {
                    up = 'icon-up';
                    size_color = 'red';
                } else {
                    up = 'icon-down';
                    size_color = 'green';
                }

                // console.log(hotArrow);
                history_s.innerHTML += `
                    <tr style="text-align: center;">
                        <td><img src="../../static/img/手指示 .png" style="width: 1rem;height: 1rem"></td>
                        <td style="color: #4c9bfd;font-size: 0.7rem;"><a href="${url}">${query}</a></td>
                        <td style="color: #4c9bfd;font-size: 0.5rem;">${degree}</td>
                    </tr>
            `;
            }

        }
        // console.log(div2);
        // soar.innerHTML = div6;
        history.appendChild(history_s);
    }

    history();


    game();


    soar();

    hot_person();

    search();

    $('#bt_1').click(function () {
        // $('#sum_diagnosis').css('display', 'block');
        // $('#bt_1').css('color', 'white');
        // $('#bt_2').css('color', '#61a8ff');
        // $('#bt_3').css('color', '#61a8ff');
        // $('#div_1').css('animation', 'row 15s linear infinite normal');
        // $('#div_4').css('animation-play-state', 'paused');
        search();
    });

    $('#bt_2').click(function () {
        // $('#sum_diagnosis').css('display', 'block');
        // $('#bt_1').css('display', 'none');
        // $('#bt_2').css('color', 'white');
        // $('#bt_1').css('color', '#61a8ff');
        // $('#bt_3').css('color', '#61a8ff');
        prevention();
    });

    $('#bt_3').click(function () {
        // $('#sum_diagnosis').css('display', 'block');
        // $('#bt_1').css('display', 'none');
        // $('#bt_3').css('color', 'white');
        // $('#bt_1').css('color', '#61a8ff');
        // $('#bt_2').css('color', '#61a8ff');
        rumor();
    });

    $('#bt_4').click(function () {
        // $('#sum_diagnosis').css('display', 'block');
        // $('#bt_1').css('display', 'none');
        // $('#bt_3').css('color', 'white');
        // $('#bt_1').css('color', '#61a8ff');
        // $('#bt_2').css('color', '#61a8ff');
        recovery();
    });

    $('#game').click(function () {
        $('#game').css('background', 'rgba(10, 67, 188, 0.2)');
        $('#movie').css('background', 'none');
        $('#novel').css('background', 'none');
        game();
    });

    $('#movie').click(function () {
        $('#movie').css('background', 'rgba(10, 67, 188, 0.2)');
        $('#game').css('background', 'none');
        $('#novel').css('background', 'none');
        movie();
    });
    $('#novel').click(function () {
        $('#novel').css('background', 'rgba(10, 67, 188, 0.2)');
        $('#game').css('background', 'none');
        $('#movie').css('background', 'none');
        novel();
    });

});

