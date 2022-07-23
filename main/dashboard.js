/* globals Chart:false, feather:false */

(() => {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  const ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'الأحد',
        'الإثنين',
        'الثلاثاء',
        'الأربعاء',
        'الخميس',
        'الجمعة',
        'السبت'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          23489,
          24092,
          12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()


let xValues = ["الخلفاوي", "روض الفرج"];
let yValues = [30, 29];
let barColors = ["red", "green"];

new Chart("rodVSkh", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "الخلفاوي vs روض الفرج"
    }
  }
});


let xValuesType = ["كهربية", "شبكات", "زجاج", "أخرى", "أخرى"];
let yValuesType = [55, 49, 44, 24, 15];
let barColorsType = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChartType", {
  type: "pie",
  data: {
    labels: xValuesType,
    datasets: [{
      backgroundColor: barColorsType,
      data: yValuesType
    }]
  },
  options: {
    title: {
      display: true,
      text: "انواع المشاكل"
    }
  }
});