// // 口座残高割合(pie)（カスタム後）
// function getRatioData(){
//     // 金額をランダムに返す（単位：万）
//     var randomScalingFactor = function() {
//         return Math.round(Math.random() * 1000);
//     };
// 
//     var date = new Date();
//     var year = date.getFullYear();
//     var month = date.getMonth();
//     
//     // パーセント表示用にデータを整形
//     var dataArray = [];
//     var dataSum = 0;
//     for(var i = 0; i < 4; i++){
//         var dataTmp = randomScalingFactor();
//         dataSum += dataTmp;
//         dataArray[i] = dataTmp;
//     }
//     for(var i = 0; i < 5; i++){
//         dataArray[i] = Math.round((dataArray[i] / dataSum) * 100);
//     }
//     
//     // タイトルを作成
//     var title = year + '/' + (month + 1) + '　　total：' + (dataSum * 1000) + '';
//     
//     
//     var chartColors = window.chartColors;
//     var color = Chart.helpers.color;
//     
//     // グラフ用データを作成
//     var configData = {
//         type: 'pie',
//         data: {
//             datasets: [{
//                 data: dataArray,
//                 backgroundColor: [
//                     color(chartColors.orange).alpha(1.0).rgbString(),
//                     color(chartColors.yellow).alpha(1.0).rgbString(),
//                     color(chartColors.green).alpha(1.0).rgbString(),
//                     color(chartColors.blue).alpha(1.0).rgbString(),
//                 ],
//                 label: 'Dataset 1'
//             }],
//             labels: [
//                 "A-Bank",
//                 "B-Bank",
//                 "C-Bank",
//                 "D-Bank"
//             ]
//         },
//         options: {
//             responsive: true,
//             title: {
//                 display: true,
//                 text: title,
//                 fontSize:14
//             },
//             tooltips: {
//               callbacks: {
//                 label: function (tooltipItem, data) {
//                   return data.labels[tooltipItem.index]
//                     + ": "
//                     + data.datasets[0].data[tooltipItem.index]
//                     + " %";
//                 }
//               }
//             },
//             legend: {
//               display: false
//             }
//         }
//     };
//     
//     return configData;
// }

// // 口座残高割合(polar area chart)（デフォルト）
// function getRatioData(){
//     // 金額をランダムに返す（単位：万）
//     var randomScalingFactor = function() {
//         return Math.round(Math.random() * 1000);
//     };
// 
//     var date = new Date();
//     var year = date.getFullYear();
//     var month = date.getMonth();
//     
//     // パーセント表示用にデータを整形
//     var dataArray = [];
//     var dataSum = 0;
//     for(var i = 0; i < 6; i++){
//         var dataTmp = randomScalingFactor();
//         dataSum += dataTmp;
//         dataArray[i] = dataTmp;
//     }
//     for(var i = 0; i < 6; i++){
//         dataArray[i] = Math.round((dataArray[i] / dataSum) * 100);
//     }
//     
//     // タイトルを作成
//     var title = year + '年' + (month + 1) + '月　　合計：' + (dataSum * 1000) + '円';
//     
//     
//     var chartColors = window.chartColors;
//     var color = Chart.helpers.color;
//     
//     // グラフ用データを作成
//     var configData = {
//         data: {
//             datasets: [{
//                 data: dataArray,
//                 backgroundColor: [
//                     color(chartColors.red).alpha(0.5).rgbString(),
//                     color(chartColors.orange).alpha(0.5).rgbString(),
//                     color(chartColors.yellow).alpha(0.5).rgbString(),
//                     color(chartColors.green).alpha(0.5).rgbString(),
//                     color(chartColors.blue).alpha(0.5).rgbString(),
//                 ],
//                 label: 'My dataset' // for legend
//             }],
//             labels: [
//                 "A-Bank",
//                 "B-Bank",
//                 "C-Bank",
//                 "D-Bank",
//                 "E-Bank"
//             ]
//         },
//         options: {
//             responsive: true,
//             legend: {
//                 position: 'right',
//             },
//             title: {
//                 display: true,
//                 text: title
//             },
//             scale: {
//               ticks: {
//                 beginAtZero: true
//               },
//               reverse: false
//             },
//             animation: {
//                 animateRotate: false,
//                 animateScale: true
//             },
//             tooltips: {
//               callbacks: {
//                 label: function (tooltipItem, data) {
//                   return data.labels[tooltipItem.index]
//                     + ": "
//                     + data.datasets[0].data[tooltipItem.index]
//                     + " %";
//                 }
//               }
//             }
//         }
//     };
//     return configData;
// }

// jqplot使用円グラフ作成

    // 銀行名データを取得
    var pieBanks = JSON.parse(localStorage.getItem("bankList"));
    // 口座残高データを取得
        var pieNowDate = new Date();
        // 現在の年
        var pieNowYear = nowDate.getFullYear();
        // 現在の月
        var pieNowMonth = nowDate.getMonth() + 1;
        //  bank1
        var pieBalances1 = JSON.parse(localStorage.getItem("balanceList1"));
        var pieBalances1Data = pieBalances1[nowYear][pieNowMonth]['y'];
        //  bank2
        var pieBalances2 = JSON.parse(localStorage.getItem("balanceList2"));
        var pieBalances2Data = pieBalances2[nowYear][pieNowMonth]['y'];
        //  bank3
        var pieBalances3 = JSON.parse(localStorage.getItem("balanceList3"));
        var pieBalances3Data = pieBalances3[nowYear][pieNowMonth]['y'];
        //  bank4
        var pieBalances4 = JSON.parse(localStorage.getItem("balanceList4"));
        var pieBalances4Data = pieBalances4[nowYear][pieNowMonth]['y'];
        
        var pieTotal = pieBalances1Data + pieBalances2Data + pieBalances3Data + pieBalances4Data;
        
    // 当月分データを作成
    var pieData = [
        [pieBanks.bank1, pieBalances1Data], 
        [pieBanks.bank2, pieBalances2Data],
        [pieBanks.bank3, pieBalances3Data],
        [pieBanks.bank4, pieBalances4Data]
    ];

    $(document).ready(function(){
        // グラフ作成
        plot2 = jQuery.jqplot('chart2', 
        [pieData], 
        {
            seriesColors:['#ff9f40','#ffcd56','#4bc0c0','#36a2eb'],
            title: '', 
            seriesDefaults: {
                shadow: false, 
                renderer: jQuery.jqplot.PieRenderer, 
                rendererOptions: { 
                startAngle: 180, 
                sliceMargin: 4, 
                showDataLabels: true } 
            }, 
            legend: { show:false, location: 'se' },
            // グラフ全体を囲むグリッドの設定    														
            grid: {														
                // グラフを囲む枠線の太さ、0で消える														
                borderWidth: 0,														
                // 背景色を透明に														
                background: 'transparent',														
                // 影もいらない														
                shadow: false,														
            }
        }
        );
      
        // グラフタイトル作成
        var now_pie = new Date();
        // 現在の年
        var year_pie = now_pie.getFullYear();
        // 現在の月// 
        var month_pie = now_pie.getMonth() + 1;
        // 円グラフタイトルを設定
        document.getElementById("chart2_title").innerHTML = year_pie + '/' + month_pie + '　total : ' + pieTotal;
        // 円グラフラベル設定
        document.getElementById("pie_bank01").innerHTML = pieBanks.bank1;
        document.getElementById("pie_bank02").innerHTML = pieBanks.bank2;
        document.getElementById("pie_bank03").innerHTML = pieBanks.bank3;
        document.getElementById("pie_bank04").innerHTML = pieBanks.bank4;
        // 円グラフデータ設定
        document.getElementById("pie_value01").innerHTML = pieBalances1Data;
        document.getElementById("pie_value02").innerHTML = pieBalances2Data;
        document.getElementById("pie_value03").innerHTML = pieBalances3Data;
        document.getElementById("pie_value04").innerHTML = pieBalances4Data;

    });
    



