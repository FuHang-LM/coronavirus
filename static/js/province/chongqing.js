(function (func) {
    $.ajax({
        url: "/data/getDomestic_city",
        type: "GET",
        dataType: "json",
        success: function (chongqing) {
            func(chongqing.series);
        }
    });
})(function (chongqing) {
    function map() {
        var data1 = [];
        var data2 = [];
        var data3 = [];
        var data4 = [];
        var data5 = [];
        var data6 = [];
        for (var i = 0; i < chongqing.length; i++) {
            if (chongqing[i]['province'] == "重庆") {
                data1.push(chongqing[i]['city']);
                data2.push(chongqing[i]['add_diagnosis']);
                data3.push(chongqing[i]['diagnosis']);
                data4.push(chongqing[i]['cure']);
                data5.push(chongqing[i]['died']);
                data6.push(chongqing[i]['curConfirm']);
            }
        }
        var city = [];
        for (var j = 0; j < data1.length; j++) {
            city[data1[j]] = data3[j]
            // city += '{name: ' + data1[j] + ', value: ' + data3[j] + '},'
        }
        // console.log(city);
        var map = echarts.init(document.querySelector("#map"));
        var option = {
            tooltip: {
                trigger: 'item',
                // formatter: '{b}'
            },
            visualMap: {
                // min: 0,
                // max: 100000,
                // left: 5,
                // bottom: 5,
                top: 10,
                left: 5,
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
            series: [
                {
                    name: '中国',
                    type: 'map',
                    mapType: '重庆',
                    aspectScale: 1.1,
                    // left: -30,
                    zoom: 1.23,
                    roam: true,
                    selectedMode: 'single',
                    itemStyle: {
                        normal: {label: {show: true}},
                        emphasis: {label: {show: true}}
                    },
                    data: [
                        {name: '万州区', value: city['万州区']},
                        {name: '涪陵区', value: city['涪陵区']},
                        {name: '渝中区', value: city['渝中区']},
                        {name: '大渡口区', value: city['大渡口区']},
                        {name: '江北区', value: city['江北区']},
                        {name: '沙坪坝区', value: city['沙坪坝区']},
                        {name: '九龙坡区', value: city['九龙坡区']},
                        {name: '南岸区', value: city['南岸区']},
                        {name: '北碚区', value: 0},
                        {name: '綦江区', value: city['綦江区']},
                        {name: '大足区', value: city['大足区']},
                        {name: '渝北区', value: city['渝北区']},
                        {name: '巴南区', value: city['巴南区']},
                        {name: '黔江区', value: city['黔江区']},
                        {name: '长寿区', value: city['长寿区']},
                        {name: '江津区', value: city['江津区']},
                        {name: '合川区', value: city['合川区']},
                        {name: '永川区', value: city['永川区']},
                        {name: '南川区', value: 0},
                        {name: '璧山区', value: city['璧山区']},
                        {name: '铜梁区', value: city['铜梁区']},
                        {name: '潼南区', value: city['潼南区']},
                        {name: '荣昌区', value: city['荣昌区']},
                        {name: '开州区', value: city['开州区']},
                        {name: '梁平区', value: city['梁平区']},
                        {name: '武隆区', value: city['武隆区']},
                        {name: '城口县', value: city['城口县']},
                        {name: '丰都县', value: city['丰都县']},
                        {name: '垫江县', value: city['垫江县']},
                        {name: '忠县', value: city['忠县']},
                        {name: '云阳县', value: city['云阳县']},
                        {name: '奉节县', value: city['奉节县']},
                        {name: '巫山县', value: city['巫山县']},
                        {name: '巫溪县', value: city['巫溪县']},
                        {name: '石柱土家族自治县', value: city['石柱县']},
                        {name: '秀山土家族苗族自治县', value: city['秀山县']},
                        {name: '酉阳土家族苗族自治县', value: city['酉阳县']},
                        {name: '彭水苗族土家族自治县', value: city['彭水县']},
                    ]
                }
            ]
        };
        var zuo_xia = echarts.init(document.querySelector(".left_right_bottom"));
        var sum_data = {
            title: {
                text: '重庆各城市疫情数据',
                left: 'left',
                top: 25,
                textStyle: {
                    color: '#ccc'
                }
            },
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
                right: '7%',
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
                    data: data3
                },
                {
                    name: '累计治愈',
                    type: 'bar',
                    // stack: '总量',
                    data: data4
                },
                {
                    name: '累计死亡',
                    type: 'bar',
                    // stack: '总量',
                    data: data5
                },
            ]
        };
        var city_s = echarts.init(document.querySelector("#div2"));
        var city_option = {
            // backgroundColor: '#2c343c',

            title: {
                text: '确诊数据城市分布',
                left: 'left',
                top: 20,
                textStyle: {
                    color: '#ccc'
                }
            },

            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },

            // visualMap: {
            //     show: false,
            //     min: 80,
            //     max: 600,
            //     inRange: {
            //         colorLightness: [0, 1]
            //     }
            // },
            series: [
                {
                    name: '累计确诊',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [
                        {name: '万州区', value: city['万州区']},
                        {name: '涪陵区', value: city['涪陵区']},
                        {name: '渝中区', value: city['渝中区']},
                        {name: '大渡口区', value: city['大渡口区']},
                        {name: '江北区', value: city['江北区']},
                        {name: '沙坪坝区', value: city['沙坪坝区']},
                        {name: '九龙坡区', value: city['九龙坡区']},
                        {name: '南岸区', value: city['南岸区']},
                        {name: '北碚区', value: 0},
                        {name: '綦江区', value: city['綦江区']},
                        {name: '大足区', value: city['大足区']},
                        {name: '渝北区', value: city['渝北区']},
                        {name: '巴南区', value: city['巴南区']},
                        {name: '黔江区', value: city['黔江区']},
                        {name: '长寿区', value: city['长寿区']},
                        {name: '江津区', value: city['江津区']},
                        {name: '合川区', value: city['合川区']},
                        {name: '永川区', value: city['永川区']},
                        {name: '南川区', value: 0},
                        {name: '璧山区', value: city['璧山区']},
                        {name: '铜梁区', value: city['铜梁区']},
                        {name: '潼南区', value: city['潼南区']},
                        {name: '荣昌区', value: city['荣昌区']},
                        {name: '开州区', value: city['开州区']},
                        {name: '梁平区', value: city['梁平区']},
                        {name: '武隆区', value: city['武隆区']},
                        {name: '城口县', value: city['城口县']},
                        {name: '丰都县', value: city['丰都县']},
                        {name: '垫江县', value: city['垫江县']},
                        {name: '忠县', value: city['忠县']},
                        {name: '云阳县', value: city['云阳县']},
                        {name: '奉节县', value: city['奉节县']},
                        {name: '巫山县', value: city['巫山县']},
                        {name: '巫溪县', value: city['巫溪县']},
                        {name: '石柱土家族自治县', value: city['石柱县']},
                        {name: '秀山土家族苗族自治县', value: city['秀山县']},
                        {name: '酉阳土家族苗族自治县', value: city['酉阳县']},
                        {name: '彭水苗族土家族自治县', value: city['彭水县']},
                    ].sort(function (a, b) {
                        return a.value - b.value;
                    }),
                    // roseType: 'radius',
                    // label: {
                    //     // color: 'rgba(255, 255, 255, 0.3)',
                    //     normal: {
                    //         position: 'inner', show: false,
                    //     }
                    // },
                    // labelLine: {
                    //     lineStyle: {
                    //         color: 'rgba(255, 255, 255, 0.3)'
                    //     },
                    //     smooth: 0.2,
                    //     length: 10,
                    //     length2: 20
                    // },
                    // itemStyle: {
                    //     color: '#c23531',
                    //     shadowBlur: 200,
                    //     shadowColor: 'rgba(0, 0, 0, 0.5)'
                    // },

                    // animationType: 'scale',
                    // animationEasing: 'elasticOut',
                    // animationDelay: function (idx) {
                    //     return Math.random() * 200;
                    // }
                }
            ]
        };

        map.setOption(option);
        zuo_xia.setOption(sum_data);
        city_s.setOption(city_option);

        var zoomSize = 8;
        zuo_xia.on('click', function (params) {
            console.log(data1[Math.max(params.dataIndex - zoomSize / 2, 0)]);
            zuo_xia.dispatchAction({
                type: 'dataZoom',
                startValue: data1[Math.max(params.dataIndex - zoomSize / 2, 0)],
                endValue: data1[Math.min(params.dataIndex + zoomSize / 2, data1.length - 1)],
            });
        });

    }

    map();
})
;

(function (func) {
    $.ajax({
        url: "/data/getDomestic",
        type: "GET",
        dataType: "json",
        success: function (chongqing) {
            func(chongqing.series);
            for (var i = 0; i < chongqing.series.length; i++) {
                if (chongqing.series[i]['province'] == '重庆') {

                    if (chongqing.series[i]['add_curConfirm'] > 0) {
                        document.querySelector("#add_cur").innerHTML = '+' + chongqing.series[i]['add_curConfirm'];
                    } else {
                        document.querySelector("#add_cur").innerHTML = chongqing.series[i]['add_curConfirm'];
                    }
                    if (chongqing.series[i]['add_diagnosis'] > 0) {
                        document.querySelector("#add_sum").innerHTML = '+' + chongqing.series[i]['add_diagnosis'];
                    } else {
                        document.querySelector("#add_sum").innerHTML = chongqing.series[i]['add_diagnosis'];
                    }
                    if (chongqing.series[i]['add_cure'] > 0) {
                        document.querySelector("#add_cure").innerHTML = '+' + chongqing.series[i]['add_cure'];
                    } else {
                        document.querySelector("#add_cure").innerHTML = chongqing.series[i]['add_cure'];
                    }
                    if (chongqing.series[i]['add_died'] > 0) {
                        document.querySelector("#add_died").innerHTML = '+' + chongqing.series[i]['add_died'];
                    } else {
                        document.querySelector("#add_died").innerHTML = chongqing.series[i]['add_died'];
                    }
                    document.querySelector("#cur").innerHTML = chongqing.series[i]['curConfirm'];
                    document.querySelector("#sum").innerHTML = chongqing.series[i]['diagnosis'];
                    document.querySelector("#cure").innerHTML = chongqing.series[i]['cure'];
                    document.querySelector("#died").innerHTML = chongqing.series[i]['died'];
                }
                // console.log(chongqing.series[i])
            }
        }
    });
})(function (chongqing) {

    // function prob() {
    //     var data1 = [];
    //     var data2 = [];
    //     var data3 = [];
    //     for (var i = 0; i < chongqing.length; i++) {
    //         if (chongqing[i]['province'] == '重庆') {
    //             data1 = chongqing[i]['diagnosis'];
    //             data2 = chongqing[i]['cure'];
    //             data3 = chongqing[i]['died'];
    //         }
    //     }
    //
    //     // $(chongqing).each(function (k, v) {
    //     //     data1.push(v.diagnosis);
    //     //     data2.push(v.cure);
    //     //     data3.push(v.died);
    //     //     // console.log(v.years, v.shouru)
    //     // });
    //     console.log(data1);
    //     console.log(data2);
    //     console.log(data3);
    //     var cure = (data2 / data1 * 100).toFixed(2);
    //     var die = (data3 / data1 * 100).toFixed(2);
    //     console.log(cure);
    //     var prob = echarts.init(document.querySelector("#div1"));
    //     var option = {
    //         tooltip: {
    //             trigger: 'item',
    //             formatter: '{a} <br/>{b}: ({d}%)'
    //         },
    //         legend: {
    //             orient: 'horizontal',
    //             left: 110,
    //             bottom: 5,
    //             textStyle: {
    //                 color: '#4c9bfd'
    //             },
    //             // top: 100,
    //             data: ['治愈率', '死亡率']
    //         },
    //         color: ['#6acca3', 'darkred'],
    //         series: [
    //             {
    //                 name: '治愈/死亡',
    //                 type: 'pie',
    //                 top: -25,
    //                 radius: ['55%', '70%'],
    //                 avoidLabelOverlap: false,
    //                 label: {
    //                     normal: {
    //                         show: false,
    //                         position: 'center'
    //                     },
    //                     emphasis: {
    //                         show: true,
    //                         textStyle: {
    //                             fontSize: '20',
    //                             fontWeight: 'bold'
    //                         }
    //                     }
    //                 },
    //                 labelLine: {
    //                     normal: {
    //                         show: false
    //                     }
    //                 },
    //                 data: [
    //                     {value: cure, name: '治愈率'},
    //                     {value: die, name: '死亡率'},
    //                 ]
    //             }
    //         ]
    //     };
    //     prob.setOption(option);
    // }
    //
    // prob();

});

(function (func) {
    $.ajax({
        url: "/data/getProvince",
        type: "GET",
        dataType: "json",
        success: function (chongqing) {
            func(chongqing.series);
        }
    });
})(function (chongqing) {
    var data_date = echarts.init(document.querySelector(".left_right_top"));
    var data1 = [];
    var data2 = [];
    var data3 = [];
    var data4 = [];
    var data5 = [];
    var data6 = [];
    var data7 = [];
    $(chongqing).each(function (k, v) {
        data1.push(v.one);
        data2.push(v.two);
        data3.push(v.three);
        data4.push(v.four);
        data5.push(v.five);
        data6.push(v.six);
        data7.push(v.seven);
        // console.log(v.years, v.shouru)
    });
    var data_s = [];
    var one = [];
    var two = [];
    var three = [];
    var four = [];
    var five = [];
    var six = [];
    var seven = [];
    for (var i = 0; i < chongqing.length; i++) {
        if (chongqing[i]['province'] == "省份") {
            data1.push(chongqing[i]['one']);
            data2.push(chongqing[i]['two']);
            data3.push(chongqing[i]['three']);
            data4.push(chongqing[i]['four']);
            data5.push(chongqing[i]['five']);
            data6.push(chongqing[i]['six']);
            data7.push(chongqing[i]['seven']);
        }
        if (chongqing[i]['province'] == "重庆") {
            one.push(chongqing[i]['one']);
            two.push(chongqing[i]['two']);
            three.push(chongqing[i]['three']);
            four.push(chongqing[i]['four']);
            five.push(chongqing[i]['five']);
            six.push(chongqing[i]['six']);
            seven.push(chongqing[i]['seven']);
        }

    }
    // console.log(data1);
    // console.log(one);
    // var city = [];
    // for (var j = 0; j < data1.length; j++) {
    //     city[data1[j]] = data3[j]
    //     // city += '{name: ' + data1[j] + ', value: ' + data3[j] + '},'
    // }
    var option = {
        title: {
            text: '重庆近七周疫情数据趋势',
            left: 'left',
            top: 15,
            textStyle: {
                color: '#ccc'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            show: true,
            top: 25,
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
        calculable: true,
        grid: {
            left: '0%',
            right: '5%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: [data1[0], data2[0], data3[0], data4[0], data5[0], data6[0], data7[0]],
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
        series: [
            {
                name: '累计确诊',
                type: 'line',
                stack: '总量',
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [one[0], two[0], three[0], four[0], five[0], six[0], seven[0]],
                // [data1[1], data2[1], data3[1], data4[1], data5[1], data6[1], data7[1]]
            },
        ]
    };
    data_date.setOption(option);
});

(function (func) {
    $.ajax({
        url: "/data/getChongqing",
        type: "GET",
        dataType: "json",
        success: function (chongqing) {
            func(chongqing.series);
        }
    });
})(function (chongqing) {
    var local = document.querySelector("#div1");
    // var ul = document.createElement('ul');
    // ul.style.width = '100%';
    var ul = '';
    for (var i = 0; i < chongqing.length; i++) {
        // console.log(chongqing[i])
        var txt = chongqing[i]['txt'];
        var url = chongqing[i]['url'];
        // console.log(txt);
        ul += `
               <li><b style="font-size: 1rem;text-align: center;color: white;display: inline-block;width: 2rem">${++i}</b><a href="${url}" style="font-size: 0.8rem;color: #4c9bfd;text-decoration: none">${txt}</a></li>
            `;
    }
    local.innerHTML = ul;
});