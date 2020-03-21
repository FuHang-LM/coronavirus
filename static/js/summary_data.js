(function (func) {
    $.ajax({
        url: "/data/getSummary",
        type: "GET",
        dataType: "json",
        success: function (update_data) {
            func(update_data.series);
            if (update_data.series[0]['curConfirmRelative'] > 0) {
                document.querySelector("#num1_relative").innerHTML = '+' + update_data.series[0]['curConfirmRelative'];
            } else {
                document.querySelector("#num1_relative").innerHTML = update_data.series[0]['curConfirmRelative'];
            }
            if (update_data.series[0]['curSuspectedRelative'] > 0) {
                document.querySelector("#num2_relative").innerHTML = '+' + update_data.series[0]['curSuspectedRelative'];
            } else {
                document.querySelector("#num2_relative").innerHTML = update_data.series[0]['curSuspectedRelative'];
            }
            if (update_data.series[0]['curIcuRelative'] > 0) {
                document.querySelector("#num3_relative").innerHTML = '+' + update_data.series[0]['curIcuRelative'];
            } else {
                document.querySelector("#num3_relative").innerHTML = update_data.series[0]['curIcuRelative'];
            }
            if (update_data.series[0]['confirmedRelative'] > 0) {
                document.querySelector("#num4_relative").innerHTML = '+' + update_data.series[0]['confirmedRelative'];
            } else {
                document.querySelector("#num4_relative").innerHTML = update_data.series[0]['confirmedRelative'];
            }
            if (update_data.series[0]['curedRelative'] > 0) {
                document.querySelector("#num5_relative").innerHTML = '+' + update_data.series[0]['curedRelative'];
            } else {
                document.querySelector("#num5_relative").innerHTML = update_data.series[0]['curedRelative'];
            }
            if (update_data.series[0]['diedRelative'] > 0) {
                document.querySelector("#num6_relative").innerHTML = '+' + update_data.series[0]['diedRelative'];
            } else {
                document.querySelector("#num6_relative").innerHTML = update_data.series[0]['diedRelative'];
            }


            document.querySelector("#num1").innerHTML = update_data.series[0]['curConfirm'];
            // document.querySelector("#num1_relative").innerHTML = update_data.series[0]['curConfirmRelative'];
            document.querySelector("#num2").innerHTML = update_data.series[0]['curSuspected'];
            // document.querySelector("#num2_relative").innerHTML = update_data.series[0]['curSuspectedRelative'];
            document.querySelector("#num3").innerHTML = update_data.series[0]['curIcu'];
            // document.querySelector("#num3_relative").innerHTML = update_data.series[0]['curIcuRelative'];
            document.querySelector("#num4").innerHTML = update_data.series[0]['confirmed'];
            // document.querySelector("#num4_relative").innerHTML = update_data.series[0]['confirmedRelative'];
            document.querySelector("#num5").innerHTML = update_data.series[0]['cured'];
            // document.querySelector("#num5_relative").innerHTML = update_data.series[0]['curedRelative'];
            document.querySelector("#num6").innerHTML = update_data.series[0]['died'];
            // document.querySelector("#num6_relative").innerHTML = update_data.series[0]['diedRelative'];
            // console.log(update_data.series[0]['curConfirm'])
        }
    });
})(function (update_data) {
    function probability() {
        var data1 = [];
        var data2 = [];
        var data3 = [];
        $(update_data).each(function (k, v) {
            data1.push(v.confirmed);
            data2.push(v.cured);
            data3.push(v.died);
            // console.log(v.years, v.shouru)
        });
        var cure = (data2[0] / data1[0] * 100).toFixed(2);
        var die = (data3[0] / data1[0] * 100).toFixed(2);
        // console.log(cure)
        var probability = echarts.init(document.querySelector("#probability"));
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: ({d}%)'
            },
            legend: {
                orient: 'horizontal',
                left: 20,
                bottom:-5,
                textStyle: {
                  color: '#4c9bfd'
                },
                // top: 100,
                data: ['治愈率', '死亡率']
            },
            color: ['#6acca3', 'darkred'],
            series: [
                {
                    name: '治愈/死亡',
                    type: 'pie',
                    top:-25,
                    radius: ['55%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: cure, name: '治愈率'},
                        {value: die, name: '死亡率'},
                    ]
                }
            ]
        };
        probability.setOption(option);
    }

    probability();
});