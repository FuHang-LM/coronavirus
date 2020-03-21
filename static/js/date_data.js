(function (func) {
    $.ajax({
        url: "/data/getDate_data",
        type: "GET",
        dataType: "json",
        success: function (date_data) {
            func(date_data.series);
        }
    });
})(function (date_data) {
    // console.log(date_data);

    function xinzeng() {
        var data1 = [];
        var data2 = [];
        var data3 = [];
        var data4 = [];
        var data5 = [];
        var data6 = [];
        var data7 = [];
        var data8 = [];
        var data9 = [];
        $(date_data).each(function (k, v) {
            data1.push(v.date);
            data2.push(v.diagnosis);
            data3.push(v.suspected);
            data4.push(v.cured);
            data5.push(v.death);
            data6.push(v.add_diagnosis);
            data7.push(v.add_suspected);
            data8.push(v.add_cured);
            data9.push(v.add_death);
            // console.log(v.years, v.shouru)
        });
        var myChart = echarts.init(document.querySelector(".line"));

        var option = {
            //鼠标提示工具
            tooltip: {
                trigger: 'axis'
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
            xAxis: {
                // 类目类型
                type: 'category',
                // x轴刻度文字
                data: data1,
                axisTick: {
                    show: false//去除刻度线
                },
                axisLabel: {
                    color: '#4c9bfd'//文本颜色
                },
                axisLine: {
                    show: false//去除轴线
                },
                boundaryGap: false//去除轴内间距
            },
            yAxis: {
                // 数据作为刻度文字
                type: 'value',
                axisTick: {
                    show: false//去除刻度线
                },
                axisLabel: {
                    color: '#4c9bfd'//文本颜色
                },
                axisLine: {
                    show: false//去除轴线
                },
                boundaryGap: false//去除轴内间距
            },
            //图例组件
            legend: {
                textStyle: {
                    color: '#4c9bfd' // 图例文字颜色

                },
                right: '10%'//距离右边10%
            },
            // 设置网格样式
            grid: {
                show: true,// 显示边框
                top: '20%',
                left: '0%',
                right: '8%',
                bottom: '0%',
                borderColor: '#012f4a',// 边框颜色
                containLabel: true // 包含刻度文字在内
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: [{
                name: '新增确诊',
                // 数据
                data: data6,
                // 图表类型
                type: 'line',
                // 圆滑连接
                smooth: true,
                itemStyle: {
                    normal: {
                        color: 'red', //改变折线点的颜色
                        lineStyle: {
                            color: 'red' //改变折线颜色
                        }
                    }
                },
            },
                {
                    name: '新增疑似',
                    // 数据
                    data: data7,
                    // 图表类型
                    type: 'line',
                    // 圆滑连接
                    smooth: true,
                    itemStyle: {
                        normal: {
                            color: 'orange', //改变折线点的颜色
                            lineStyle: {
                                color: 'orange' //改变折线颜色
                            }
                        }
                    },
                },
                {
                    name: '新增治愈',
                    // 数据
                    data: data8,
                    // 图表类型
                    type: 'line',
                    // 圆滑连接
                    smooth: true,
                    itemStyle: {
                        normal: {
                            color: '#6acca3', //改变折线点的颜色
                            lineStyle: {
                                color: '#6acca3' //改变折线颜色
                            }
                        }
                    },
                }, {
                    name: '新增死亡',
                    // 数据
                    data: data9,
                    // 图表类型
                    type: 'line',
                    // 圆滑连接
                    smooth: true,
                    itemStyle: {
                        normal: {
                            color: 'gray', //改变折线点的颜色
                            lineStyle: {
                                color: 'gray' //改变折线颜色
                            }
                        }
                    },
                }]
        };
        myChart.setOption(option, true);
    }

    function sum_diagnosis() {
        var data1 = [];
        var data2 = [];
        var data3 = [];
        var data4 = [];
        var data5 = [];
        var data6 = [];
        var data7 = [];
        var data8 = [];
        var data9 = [];
        var data10 = [];
        $(date_data).each(function (k, v) {
            data1.push(v.date);
            data2.push(v.diagnosis);
            data3.push(v.suspected);
            data4.push(v.cured);
            data5.push(v.death);
            data6.push(v.add_diagnosis);
            data7.push(v.add_suspected);
            data8.push(v.add_cured);
            data9.push(v.add_death);
            data10.push(v.cur_diagnosis);
            // console.log(v.years, v.shouru)
        });
        var myChart = echarts.init(document.querySelector(".line"));

        var option = {
            //鼠标提示工具
            tooltip: {
                trigger: 'axis'
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
            xAxis: {
                // 类目类型
                type: 'category',
                // x轴刻度文字
                data: data1,
                axisTick: {
                    show: false//去除刻度线
                },
                axisLabel: {
                    color: '#4c9bfd'//文本颜色
                },
                axisLine: {
                    show: false//去除轴线
                },
                boundaryGap: false//去除轴内间距
            },
            yAxis: {
                // 数据作为刻度文字
                type: 'value',
                axisTick: {
                    show: false//去除刻度线
                },
                axisLabel: {
                    color: '#4c9bfd'//文本颜色
                },
                axisLine: {
                    show: false//去除轴线
                },
                boundaryGap: false//去除轴内间距
            },
            //图例组件
            legend: {
                textStyle: {
                    color: '#4c9bfd' // 图例文字颜色

                },
                right: '10%'//距离右边10%
            },
            // 设置网格样式
            grid: {
                show: true,// 显示边框
                top: '20%',
                left: '0%',
                right: '8%',
                bottom: '0%',
                borderColor: '#012f4a',// 边框颜色
                containLabel: true // 包含刻度文字在内
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: [{
                name: '现有确诊',
                // 数据
                data: data10,
                // 图表类型
                type: 'line',
                // 圆滑连接
                smooth: true,
                itemStyle: {
                    normal: {
                        color: 'red', //改变折线点的颜色
                        lineStyle: {
                            color: 'red' //改变折线颜色
                        }
                    }
                },
            },
                {
                    name: '现有疑似',
                    // 数据
                    data: data3,
                    // 图表类型
                    type: 'line',
                    // 圆滑连接
                    smooth: true,
                    itemStyle: {
                        normal: {
                            color: 'orange', //改变折线点的颜色
                            lineStyle: {
                                color: 'orange' //改变折线颜色
                            }
                        }
                    },
                },
                {
                    name: '累计确诊',
                    // 数据
                    data: data2,
                    // 图表类型
                    type: 'line',
                    // 圆滑连接
                    smooth: true,
                    itemStyle: {
                        normal: {
                            color: 'darkred', //改变折线点的颜色
                            lineStyle: {
                                color: 'darkred' //改变折线颜色
                            }
                        }
                    },
                }]
        };
        myChart.setOption(option, true);
    }

    function sum_cure() {
        var data1 = [];
        var data2 = [];
        var data3 = [];
        var data4 = [];
        var data5 = [];
        var data6 = [];
        var data7 = [];
        var data8 = [];
        var data9 = [];
        $(date_data).each(function (k, v) {
            data1.push(v.date);
            data2.push(v.diagnosis);
            data3.push(v.suspected);
            data4.push(v.cured);
            data5.push(v.death);
            data6.push(v.add_diagnosis);
            data7.push(v.add_suspected);
            data8.push(v.add_cured);
            data9.push(v.add_death);
            // console.log(v.years, v.shouru)
        });
        var myChart = echarts.init(document.querySelector(".line"));

        var option = {
            //鼠标提示工具
            tooltip: {
                trigger: 'axis'
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
            xAxis: {
                // 类目类型
                type: 'category',
                // x轴刻度文字
                data: data1,
                axisTick: {
                    show: false//去除刻度线
                },
                axisLabel: {
                    color: '#4c9bfd'//文本颜色
                },
                axisLine: {
                    show: false//去除轴线
                },
                boundaryGap: false//去除轴内间距
            },
            yAxis: {
                // 数据作为刻度文字
                type: 'value',
                axisTick: {
                    show: false//去除刻度线
                },
                axisLabel: {
                    color: '#4c9bfd'//文本颜色
                },
                axisLine: {
                    show: false//去除轴线
                },
                boundaryGap: false//去除轴内间距
            },
            //图例组件
            legend: {
                textStyle: {
                    color: '#4c9bfd' // 图例文字颜色

                },
                right: '10%'//距离右边10%
            },
            // 设置网格样式
            grid: {
                show: true,// 显示边框
                top: '20%',
                left: '0%',
                right: '8%',
                bottom: '0%',
                borderColor: '#012f4a',// 边框颜色
                containLabel: true // 包含刻度文字在内
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: [{
                name: '累计确诊',
                // 数据
                data: data2,
                // 图表类型
                type: 'line',
                // 圆滑连接
                smooth: true,
                itemStyle: {
                    normal: {
                        color: 'darkred', //改变折线点的颜色
                        lineStyle: {
                            color: 'darkred' //改变折线颜色
                        }
                    }
                },
            },
                {
                    name: '累计治愈',
                    // 数据
                    data: data4,
                    // 图表类型
                    type: 'line',
                    // 圆滑连接
                    smooth: true,
                    itemStyle: {
                        normal: {
                            color: '#6acca3', //改变折线点的颜色
                            lineStyle: {
                                color: '#6acca3' //改变折线颜色
                            }
                        }
                    },
                },
                {
                    name: '累计死亡',
                    // 数据
                    data: data5,
                    // 图表类型
                    type: 'line',
                    // 圆滑连接
                    smooth: true,
                    itemStyle: {
                        normal: {
                            color: 'gray', //改变折线点的颜色
                            lineStyle: {
                                color: 'gray' //改变折线颜色
                            }
                        }
                    },
                }]
        };
        myChart.setOption(option, true);
    }


    // function sleep1() {
    //     setTimeout(function () {
    //         // IE
    //         if (document.all) {
    //             document.getElementById("bt_6").click();
    //         }
    //         // 其它浏览器
    //         else {
    //             var e = document.createEvent("MouseEvents");
    //             e.initEvent("click", true, true);
    //             document.getElementById("bt_6").dispatchEvent(e);
    //         }
    //     });
    // }
    //
    // function sleep2() {
    //     setTimeout(function () {
    //         // IE
    //         if (document.all) {
    //             document.getElementById("bt_7").click();
    //         }
    //         // 其它浏览器
    //         else {
    //             var e = document.createEvent("MouseEvents");
    //             e.initEvent("click", true, true);
    //             document.getElementById("bt_7").dispatchEvent(e);
    //         }
    //     });
    // }
    //
    // function sleep3() {
    //     setTimeout(function () {
    //         // IE
    //         if (document.all) {
    //             document.getElementById("bt_5").click();
    //         }
    //         // 其它浏览器
    //         else {
    //             var e = document.createEvent("MouseEvents");
    //             e.initEvent("click", true, true);
    //             document.getElementById("bt_5").dispatchEvent(e);
    //         }
    //     });
    // }
    //
    // var demo1;
    // var demo2;
    // var demo3;

    // function funcTest() {
    //
    //     //每隔3秒执行一次timelyFun方法
    //
    //     demo1 = setInterval(sleep1, 3000);
    //
    // }

    // funcTest();


    // function funcTest2() {
    //
    //     //每隔3秒执行一次timelyFun方法
    //
    //     window.setInterval("sleep2()", 3000);
    //
    // }


    // setTimeout(function () {
    //     // IE
    //     if (document.all) {
    //         document.getElementById("bt_5").click();
    //     }
    //     // 其它浏览器
    //     else {
    //         var e = document.createEvent("MouseEvents");
    //         e.initEvent("click", true, true);
    //         document.getElementById("bt_5").dispatchEvent(e);
    //     }
    // }, time * 3);


    xinzeng();

    $('#bt_5').click(function () {
        // $('#sum_diagnosis').css('display', 'block');
        $('#bt_6').css('color', '#5bc0de');
        $('#bt_7').css('color', '#5bc0de');
        $('#bt_5').css('color', 'white');
        // $('.t_anhui').css('display', 'block');
        xinzeng();
    });

    $('#bt_6').click(function () {
        // $('#cur_diagnosis').css('display', 'block');
        $('#bt_5').css('color', '#5bc0de');
        $('#bt_7').css('color', '#5bc0de');
        $('#bt_6').css('color', 'white');
        // $('.t_anhui').css('display', 'block');
        sum_diagnosis();
    });
    $('#bt_7').click(function () {
        // $('#cur_diagnosis').css('display', 'block');
        $('#bt_5').css('color', '#5bc0de');
        $('#bt_6').css('color', '#5bc0de');
        $('#bt_7').css('color', 'white');
        // $('.t_anhui').css('display', 'block');
        sum_cure();
    });
});


