(function (func) {
    $.ajax({
        url: "/data/getReal_time",
        type: "GET",
        dataType: "json",
        success: function (real_time) {
            func(real_time.series);
            // console.log(real_time)
        }
    });
})(function (real_time) {
    function real() {
        var real = document.querySelector(".font_inner");
        // let ul = document.createElement('ul');
        // ul.className = 'font_inner';
        var ul = '';
        var j = 0;
        for (var i = 0; i < real_time.length; i++) {
            var txt = real_time[i]['txt'];
            var url = real_time[i]['url'];
            // console.log(query, url, degree);
            // console.log(i);
            ul += `
                <li><a href="${url}">${txt}</a></li>
            `;
        }
        // console.log(ul);
        real.innerHTML = ul;
        // real.appendChild(ul);
    }

    real();
});