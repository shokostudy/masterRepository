// 口座残高割合(pie)
function getRatioData(){
    // 金額をランダムに返す（単位：万）
    var randomScalingFactor = function() {
        return Math.round(Math.random() * 1000);
    };

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    
    // パーセント表示用にデータを整形
    var dataArray = [];
    var dataSum = 0;
    for(var i = 0; i < 4; i++){
        var dataTmp = randomScalingFactor();
        dataSum += dataTmp;
        dataArray[i] = dataTmp;
    }
    for(var i = 0; i < 5; i++){
        dataArray[i] = Math.round((dataArray[i] / dataSum) * 100);
    }
    
    // タイトルを作成
    var title = year + '/' + (month + 1) + '　　total：' + (dataSum * 1000) + '';
    
    
    var chartColors = window.chartColors;
    var color = Chart.helpers.color;
    
    // グラフ用データを作成
    var configData = {
        type: 'pie',
        data: {
            datasets: [{
                data: dataArray,
                backgroundColor: [
                    color(chartColors.orange).alpha(1.0).rgbString(),
                    color(chartColors.yellow).alpha(1.0).rgbString(),
                    color(chartColors.green).alpha(1.0).rgbString(),
                    color(chartColors.blue).alpha(1.0).rgbString(),
                ],
                label: 'Dataset 1'
            }],
            labels: [
                "A-Bank",
                "B-Bank",
                "C-Bank",
                "D-Bank"
            ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: title,
                fontSize:14
            },
            tooltips: {
              callbacks: {
                label: function (tooltipItem, data) {
                  return data.labels[tooltipItem.index]
                    + ": "
                    + data.datasets[0].data[tooltipItem.index]
                    + " %";
                }
              }
            },
            legend: {
              display: false
            }
        }
    };
    
    return configData;
}

// // 口座残高割合(polar area chart)
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

$(document).ready(function(){
  plot2 = jQuery.jqplot('chart2', 
    [[['A-bank', 500],['B-bank', 300], ['C-bank', 700], 
    ['D-bank', 250]]], 
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
      legend: { show:true, location: 'e' },
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
});
