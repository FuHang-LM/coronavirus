(function (func) {
    $.ajax({
        url: "/data/getDomestic",
        type: "GET",
        dataType: "json",
        success: function (domestic1) {
            func(domestic1.series);
        }
    });
})(function (domestic) {


    function province_graph() {
        var myChart = echarts.init(document.querySelector("#province_graph"));
        var data1 = [];
        var data2 = [];
        var data3 = [];
        var data4 = [];
        $(domestic).each(function (k, v) {
            data1.push(v.province);
            data2.push(v.diagnosis);
            data3.push(v.cure);
            data4.push(v.died);

            // console.log(v.years, v.shouru)
        });

        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    mark: {show: true},
                    dataView: {
                        show: true, readOnly: false,
                        iconStyle: {
                            borderColor: '#4c9bfd'
                        }
                    },
                    magicType: {
                        show: true, type: ['line', 'bar', 'stack', 'tiled'],
                        iconStyle: {
                            borderColor: '#4c9bfd'
                        },
                    },
                    restore: {
                        show: true,
                        iconStyle: {
                            borderColor: '#4c9bfd'
                        }
                    },
                    saveAsImage: {
                        show: true,
                        iconStyle: {
                            borderColor: '#4c9bfd'
                        }
                    }
                }
            },
            legend: {
                data: ['累计确诊', '累计治愈', '累计死亡'],
                textStyle: {
                    color: '#4c9bfd'
                }
            },
            grid: {
                left: '0%',
                right: '6%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [

                {
                    type: 'category',
                    data: data1,
                    color: '#4c9bfd',
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#4c9bfd'
                        }
                    }
                }
            ],
            yAxis: {
                type: 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#4c9bfd'
                    }
                }
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: [
                {
                    name: '累计确诊',
                    type: 'bar',
                    // stack: '总量',
                    data: data2
                },
                {
                    name: '累计治愈',
                    type: 'bar',
                    // stack: '总量',
                    data: data3
                },
                {
                    name: '累计死亡',
                    type: 'bar',
                    // stack: '总量',
                    data: data4
                },
            ]
        };
        myChart.setOption(option);

// Enable data zoom when user click bar.
        var zoomSize = 8;
        myChart.on('click', function (params) {
            // console.log(data1[Math.max(params.dataIndex - zoomSize / 2, 0)]);
            myChart.dispatchAction({
                type: 'dataZoom',
                startValue: data1[Math.max(params.dataIndex - zoomSize / 2, 0)],
                endValue: data1[Math.min(params.dataIndex + zoomSize / 2, data1.length - 1)],
            });
        });
    }

    province_graph();


    var province = {
        '北京': 'beijing',
        '天津': 'tianjin',
        '上海': 'shanghai',
        '重庆': 'chongqing',
        '河北': 'hebei',
        '河南': 'henan',
        '云南': 'yunnan',
        '辽宁': 'liaoning',
        '黑龙江': 'heilongjiang',
        '湖南': 'hunan',
        '安徽': 'anhui',
        '山东': 'shandong',
        '新疆': 'xinjiang',
        '江苏': 'jiangsu',
        '浙江': 'zhejiang',
        '江西': 'jiangxi',
        '湖北': 'hubei',
        '广西': 'guangxi',
        '甘肃': 'gansu',
        '山西': 'shanxi',
        '内蒙古': 'neimenggu',
        '陕西': 'shanxi',
        '吉林': 'jilin',
        '福建': 'fujian',
        '贵州': 'guizhou',
        '广东': 'guangdong',
        '青海': 'qinghai',
        '西藏': 'xizang',
        '四川': 'sichuan',
        '宁夏': 'ningxia',
        '海南': 'hainan',
    };

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

        var myChart = echarts.init(document.querySelector(".chart"));

        // console.log(data1);
        // console.log(data5);
        var option = {
            tooltip: {
                // trigger: 'item',
                triggerOn: 'click',
                enterable: true,
                // alwaysShowContent: true,
                formatter: function (params) {
                    var myseries = option.series;
                    // console.log(myseries);
                    var res = '地区：';
                    var jump = '';
                    for (var i = 0; i < myseries.length; i++) {
                        for (var j = 0; j < myseries[i].data.length; j++) {
                            if (myseries[i].data[j].name == params.name) {
                                jump += province[myseries[i].data[j].name];
                                console.log(jump);
                                res += myseries[i].data[j].name + '<br>' + '累计确诊：' + myseries[i].data[j].value + '&emsp;<a style="text-decoration:none; color: white" id="jump" href="' + '/province/' + jump + '">详情></a>' + '</br>';
                            }
                        }
                    }
                    return res;
                }
            },
            visualMap: {
                // min: 0,
                // max: 100000,
                left: 5,
                bottom: 5,
                showLabel: true,
                text: ["高", "低"],
                textStyle: {
                    color: "#4c9bfd",
                },
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
            // geo: {
            //     map: "china",
            //     roam: true,
            //     selectedMode: 'single',
            //     // scaleLimit: {
            //     //     min: 1,
            //     //     max: 2
            //     // },
            //     zoom: 1.23,
            //     // top: 120,
            //     label: {
            //         normal: {
            //             show: true,
            //             fontSize: "12",
            //             color: "rgba(25,25,25,0.7)"
            //         }
            //     },
            //     itemStyle: {
            //         normal: {
            //             //shadowBlur: 50,
            //             //shadowColor: 'rgba(0, 0, 0, 0.2)',
            //             borderColor: "rgba(0, 0, 0, 0.2)"
            //         },
            //         emphasis: {
            //             areaColor: "#7cd2f2",
            //             shadowOffsetX: 0,
            //             shadowOffsetY: 0,
            //             borderWidth: 0
            //         }
            //     }
            // },
            series: [{
                name: "累计确诊病例",
                type: "map",
                mapType: "china",
                roam: true,
                zoom: 1.23,
                selectedMode: 'single',
                // geoIndex: 0,
                itemStyle: {
                    normal: {label: {show: true, color: "#1464c8"}, borderColor: "rgba(0, 0, 0, 0.2)"},
                    emphasis: {label: {show: true}, areaColor: "#7cd2f2",}
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
        myChart.setOption(option, true);
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

        var myChart = echarts.init(document.querySelector(".chart"));

        var option = {
            tooltip: {
                // trigger: 'item',
                triggerOn: 'click',
                enterable: true,
                // alwaysShowContent: true,
                formatter: function (params) {
                    var myseries = option.series;
                    // console.log(myseries);
                    var res = '地区：';
                    var jump = '';
                    for (var i = 0; i < myseries.length; i++) {
                        for (var j = 0; j < myseries[i].data.length; j++) {
                            if (myseries[i].data[j].name == params.name) {
                                jump += province[myseries[i].data[j].name];
                                // console.log(jump);
                                res += myseries[i].data[j].name + '<br>' + '现有确诊：' + myseries[i].data[j].value + '&emsp;<a style="text-decoration:none; color: white" id="jump" href="' + '/province/' + jump + '">详情></a>' + '</br>';
                            }
                        }
                    }
                    return res;
                }
            },
            visualMap: {
                // min: 0,
                // max: 100000,
                left: 5,
                bottom: 5,
                showLabel: true,

                text: ["高", "低"],
                textStyle: {
                    color: "#4c9bfd",
                },
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
                    gt: 0,
                    lt: 100,
                    label: "1 - 99 人",
                    color: "#ffaa85",
                }, {
                    value: 0,
                    label: "0 人",
                    color: '#dddddd',
                }],
                show: true
            },
            series: [{
                name: "当前确诊病例",
                type: "map",
                mapType: "china",
                zoom: 1.23,
                roam: true,
                selectedMode: 'single',
                itemStyle: {
                    normal: {label: {show: true, color: "#1464c8"}, borderColor: "rgba(0, 0, 0, 0.2)"},
                    emphasis: {label: {show: true}, areaColor: "#7cd2f2",}
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
        myChart.setOption(option, true);
    }

    domestic_now();

    $('#sum_diagnosis').click(function () {
        // $('#sum_diagnosis').css('display', 'block');
        $('#cur_diagnosis').css('display', 'none');
        $('#sum').css('color', 'white');
        $('#cur').css('color', '#5bc0de');
        // $('.t_anhui').css('display', 'block');
        domestic_sum();
    });

    $('#cur_diagnosis').click(function () {
        // $('#cur_diagnosis').css('display', 'block');
        $('#sum_diagnosis').css('display', 'none');
        $('#cur').css('color', 'white');
        $('#sum').css('color', '#5bc0de');
        // $('.t_anhui').css('display', 'block');
        domestic_now();
    });

});


