//chart 1
var xValues = [
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    1000
];
new Chart("chart1", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [
            {
                data: [
                    860,
                    1140,
                    1060,
                    1060,
                    1070,
                    1110,
                    1330,
                    2210,
                    7830,
                    2478
                ],
                borderColor: "red",
                fill: false
            },
            {
                data: [
                    1600,
                    1700,
                    1700,
                    1900,
                    2000,
                    2700,
                    4000,
                    5000,
                    6000,
                    7000
                ],
                borderColor: "green",
                fill: false
            },
            {
                data: [
                    300,
                    700,
                    2000,
                    5000,
                    6000,
                    4000,
                    2000,
                    1000,
                    200,
                    100
                ],
                borderColor: "blue",
                fill: false
            }
        ]
    },
    options: {
        legend: {
            display: false
        }
    }
});
//chart 2
var xValues = [
    "Italy",
    "France",
    "Spain",
    "USA",
    "Argentina"
];
var yValues = [
    55,
    49,
    44,
    24,
    15
];
var barColors = [
    "red",
    "green",
    "blue",
    "orange",
    "brown"
];
new Chart("chart2", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [
            {
                backgroundColor: barColors,
                data: yValues
            }
        ]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: "World Wine Production 2018"
        }
    }
});
//chart 3
var xValues = [
    "Italy",
    "France",
    "Spain",
    "USA",
    "Argentina"
];
var yValues = [
    55,
    49,
    44,
    24,
    15
];
var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
];
new Chart("chart3", {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [
            {
                backgroundColor: barColors,
                data: yValues
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: "World Wide Wine Production 2018"
        }
    }
});
//chart 4
var xValues = [
    "Italy",
    "France",
    "Spain",
    "USA",
    "Argentina"
];
var yValues = [
    55,
    49,
    44,
    24,
    15
];
var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
];
new Chart("chart4", {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [
            {
                backgroundColor: barColors,
                data: yValues
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: "World Wide Wine Production 2018"
        }
    }
});
//chart 5
var xValues = [];
var yValues = [];
generateData("Math.sin(x)", 0, 10, 0.5);
new Chart("chart5", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [
            {
                fill: false,
                pointRadius: 2,
                borderColor: "rgba(0,0,255,0.5)",
                data: yValues
            }
        ]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: "y = x * 2 + 7",
            fontSize: 16
        }
    }
});
function generateData(value, i1, i2, step = 1) {
    for(let x = i1; x <= i2; x += step){
        yValues.push(eval(value));
        xValues.push(x);
    }
}

//# sourceMappingURL=login_register.184bc30f.js.map
