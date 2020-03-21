(function (func) {
    $.ajax({
        url: "/data/getDomestic",
        type: "GET",
        dataType: "json",
        success: function (domestic) {
            func(domestic.series);
        }
    });
})(function (domestic) {
    function domestic_sum() {
        var data1 = [];
        var data2 = [];
        var data3 = [];
        var data4 = [];
        var data5 = [];
        var data6 = [];
        var data7 = [];
        var data8 = [];
        var arr = {};
        $(domestic).each(function (k, v) {
            data1.push(v.province);
            data2.push(v.add_diagnosis);
            data3.push(v.add_cure);
            data4.push(v.add_died);
            data5.push(v.diagnosis);
            data6.push(v.cure);
            data7.push(v.died);
            data8.push(v.curConfirm);

            // console.log(v.years, v.shouru)
        });

        for (var i = 0; i < data1.length; i++) {
            arr[data1[i]] = data5[i]
        }

        var myChart = echarts.init(document.querySelector("#china_map"));

        // console.log(data1);
        // console.log(data5);
        var option = {
            tooltip: {
                triggerOn: "click",
            },
            visualMap: {
                // min: 0,
                // max: 100000,
                left: 5,
                bottom: 5,
                showLabel: true,
                text: ["高", "低"],
                pieces: [{
                    gt: 10000,
                    label: "> 10000 人",
                    color: "#660208"
                }, {
                    gte: 1000,
                    lte: 10000,
                    label: "1000 - 9999 人",
                    color: "#8c0d0d"
                }, {
                    gte: 100,
                    lt: 1000,
                    label: "100 - 999 人",
                    color: "#cc2929"
                }, {
                    gt: 10,
                    lt: 100,
                    label: "10 - 99 人",
                    color: "#ff7b69"
                }, {
                    gt: 0,
                    lt: 10,
                    label: "1 - 9 人",
                    color: "#ffaa85"
                }],
                show: true
            },
            geo: {
                map: "china",
                roam: 1,
                selectedMode: 'single',
                // scaleLimit: {
                //     min: 1,
                //     max: 2
                // },
                zoom: 1.23,
                // top: 120,
                label: {
                    normal: {
                        show: true,
                        fontSize: "14",
                        color: "rgba(0,0,0,0.7)"
                    }
                },
                itemStyle: {
                    normal: {
                        //shadowBlur: 50,
                        //shadowColor: 'rgba(0, 0, 0, 0.2)',
                        borderColor: "rgba(0, 0, 0, 0.2)"
                    },
                    emphasis: {
                        areaColor: "#f2d5ad",
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        borderWidth: 0
                    }
                }
            },
            series: [{
                name: "累计确诊病例",
                type: "map",
                selectedMode: 'single',
                // geoIndex: 0,
                itemStyle: {
                    normal: {label: {show: true}},
                    emphasis: {label: {show: true}}
                },
                data: [
                    {name: "南海诸岛", value: arr['南海诸岛']},
                    {name: '北京', value: arr['北京']},
                    {name: '天津', value: arr['天津']},
                    {name: '上海', value: arr['上海']},
                    {name: '重庆', value: arr['重庆']},
                    {name: '河北', value: arr['河北']},
                    {name: '河南', value: arr['河南']},
                    {name: '云南', value: arr['云南']},
                    {name: '辽宁', value: arr['辽宁']},
                    {name: '黑龙江', value: arr['黑龙江']},
                    {name: '湖南', value: arr['湖南']},
                    {name: '安徽', value: arr['安徽']},
                    {name: '山东', value: arr['山东']},
                    {name: '新疆', value: arr['新疆']},
                    {name: '江苏', value: arr['江苏']},
                    {name: '浙江', value: arr['浙江']},
                    {name: '江西', value: arr['江西']},
                    {name: '湖北', value: arr['湖北']},
                    {name: '广西', value: arr['广西']},
                    {name: '甘肃', value: arr['甘肃']},
                    {name: '山西', value: arr['山西']},
                    {name: '内蒙古', value: arr['内蒙古']},
                    {name: '陕西', value: arr['陕西']},
                    {name: '吉林', value: arr['吉林']},
                    {name: '福建', value: arr['福建']},
                    {name: '贵州', value: arr['贵州']},
                    {name: '广东', value: arr['广东']},
                    {name: '青海', value: arr['青海']},
                    {name: '西藏', value: arr['西藏']},
                    {name: '四川', value: arr['四川']},
                    {name: '宁夏', value: arr['宁夏']},
                    {name: '海南', value: arr['海南']},
                    {name: '台湾', value: arr['台湾']},
                    {name: '香港', value: arr['香港']},
                    {name: '澳门', value: arr['澳门']},
                ]
            }]
        };
        myChart.setOption(option);
    }


    function domestic_now() {
        var data1 = [];
        var data2 = [];
        var data3 = [];
        var data4 = [];
        var data5 = [];
        var data6 = [];
        var data7 = [];
        var data8 = [];
        var arr = {};
        $(domestic).each(function (k, v) {
            data1.push(v.province);
            data2.push(v.add_diagnosis);
            data3.push(v.add_cure);
            data4.push(v.add_died);
            data5.push(v.diagnosis);
            data6.push(v.cure);
            data7.push(v.died);
            data8.push(v.curConfirm);

            // console.log(v.years, v.shouru)
        });

        for (var i = 0; i < data1.length; i++) {
            arr[data1[i]] = data8[i]
        }

        var myChart = echarts.init(document.querySelector("#china_map"));

        var option = {
            tooltip: {
                triggerOn: "click",
            },
            visualMap: {
                // min: 0,
                // max: 100000,
                left: 5,
                bottom: 5,
                showLabel: true,
                text: ["高", "低"],
                pieces: [{
                    gt: 10000,
                    label: "> 10000 人",
                    color: "#660208"
                }, {
                    gte: 1000,
                    lte: 10000,
                    label: "1000 - 9999 人",
                    color: "#8c0d0d"
                }, {
                    gte: 100,
                    lt: 1000,
                    label: "100 - 999 人",
                    color: "#cc2929"
                }, {
                    gt: 10,
                    lt: 100,
                    label: "10 - 99 人",
                    color: "#ff7b69"
                }, {
                    gt: 0,
                    lt: 10,
                    label: "1 - 9 人",
                    color: "#ffaa85"
                }],
                show: true
            },
            geo: {
                map: "china",
                roam: 1,
                // scaleLimit: {
                //     min: 1,
                //     max: 2
                // },
                zoom: 1.23,
                selectedMode: 'single',
                // top: 120,
                label: {
                    normal: {
                        show: true,
                        fontSize: "14",
                        color: "rgba(0,0,0,0.7)"
                    }
                },
                itemStyle: {
                    normal: {
                        //shadowBlur: 50,
                        //shadowColor: 'rgba(0, 0, 0, 0.2)',
                        borderColor: "rgba(0, 0, 0, 0.2)"
                    },
                    emphasis: {
                        areaColor: "#f2d5ad",
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        borderWidth: 0
                    }
                }
            },
            series: [{
                name: "当前确诊病例",
                type: "map",
                geoIndex: 0,
                data: [
                    {name: "南海诸岛", value: arr['南海诸岛']},
                    {name: '北京', value: arr['北京']},
                    {name: '天津', value: arr['天津']},
                    {name: '上海', value: arr['上海']},
                    {name: '重庆', value: arr['重庆']},
                    {name: '河北', value: arr['河北']},
                    {name: '河南', value: arr['河南']},
                    {name: '云南', value: arr['云南']},
                    {name: '辽宁', value: arr['辽宁']},
                    {name: '黑龙江', value: arr['黑龙江']},
                    {name: '湖南', value: arr['湖南']},
                    {name: '安徽', value: arr['安徽']},
                    {name: '山东', value: arr['山东']},
                    {name: '新疆', value: arr['新疆']},
                    {name: '江苏', value: arr['江苏']},
                    {name: '浙江', value: arr['浙江']},
                    {name: '江西', value: arr['江西']},
                    {name: '湖北', value: arr['湖北']},
                    {name: '广西', value: arr['广西']},
                    {name: '甘肃', value: arr['甘肃']},
                    {name: '山西', value: arr['山西']},
                    {name: '内蒙古', value: arr['内蒙古']},
                    {name: '陕西', value: arr['陕西']},
                    {name: '吉林', value: arr['吉林']},
                    {name: '福建', value: arr['福建']},
                    {name: '贵州', value: arr['贵州']},
                    {name: '广东', value: arr['广东']},
                    {name: '青海', value: arr['青海']},
                    {name: '西藏', value: arr['西藏']},
                    {name: '四川', value: arr['四川']},
                    {name: '宁夏', value: arr['宁夏']},
                    {name: '海南', value: arr['海南']},
                    {name: '台湾', value: arr['台湾']},
                    {name: '香港', value: arr['香港']},
                    {name: '澳门', value: arr['澳门']},
                ]
            }]
        };
        myChart.setOption(option);
    }

    domestic_now();

    $('#sum_diagnosis').click(function () {
        // $('#sum_diagnosis').css('display', 'block');
        $('#cur_diagnosis').css('display', 'none');
        // $('.t_anhui').css('display', 'block');
        domestic_sum();
    });

    $('#cur_diagnosis').click(function () {
        // $('#cur_diagnosis').css('display', 'block');
        $('#sum_diagnosis').css('display', 'none');
        // $('.t_anhui').css('display', 'block');
        domestic_now();
    });

});


