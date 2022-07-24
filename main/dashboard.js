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
        'السبت',
        'الأحد',
        'الإثنين',
        'الثلاثاء',
        'الأربعاء',
        'الخميس',
        'الجمعة'
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

// Rod Request Status
const data = {
  labels: [
    'Unsolved',
    'Solved',
    'Inprogress'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};
new Chart("rodRequestStatus", {
  type: 'doughnut',
  data: data,
  options: {
    title: {
      display: true,
      text: "Rod El-Farag Request Status"
    }
  }
});

// Khalafawi Request Status
const dataKh = {
  labels: [
    'Unsolved',
    'Solved',
    'Inprogress'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};
new Chart("khalRequestStatus", {
  type: "pie",
  data: dataKh,
  options: {
    title: {
      display: true,
      text: "Khalafawi Request Status"
    }
  }
});


// Weekly Requests
const labels = ["Computer", "Net", "Printing", "AC", "Pumping", "Wood Work", "Electricity", "Metal Work", "Arcitecture", "Glass", "Cleaning", "Education", "Others"];

const dataWeekly = {
  labels: labels,
  datasets: [
    {
      label: "Solved",
      backgroundColor: "blue",
      data: [3,7,4]
  },
  {
      label: "Unsolved",
      backgroundColor: "red",
      data: [4,3,5]
  },
  {
      label: "Inprogress",
      backgroundColor: "orange",
      data: [5,2,6]
  }
  ]
};
new Chart("weekly", {
  type: 'bar',
  data: dataWeekly,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});