// TRENDYOL START
const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const data = {
    labels: labels,
    datasets: [
        {
            label: "",
            data: [60, 65, 80, 70, 40, 90, 80, 50, 40, 40, 50, 100, 400],
            fill: false,
            borderColor: "#F83000",
            tension: 0.1,
            pointRadius: 1,
        },
    ],
};

const config = {
    type: "line",
    data: data,
    options: {
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {  // Tooltip eklentisini etkinleştirin
                enabled: true,
                mode: 'nearest',  // En yakın veri noktasını seçmek için
            },
        },
    },
};
let trendyol = new Chart(document.getElementById("trendyol"), config);

// TRENDYOL END

// HEPSİBURADA START

const data1 = {
    labels: labels,
    datasets: [
        {
            label: "",
            data: [60, 40, 50, 80, 90, 70, 60, 40, 50, 70, 60, 80, 400],
            fill: false,
            borderColor: "#F87600",
            tension: 0.1,
            pointRadius: 1,
        },
    ],
};
const config1 = {
    type: "line",
    data: data1,
    options: {
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {  // Tooltip eklentisini etkinleştirin
                enabled: true,
                mode: 'nearest',  // En yakın veri noktasını seçmek için
            },
        },
    },
};
let hepsiBurada = new Chart(document.getElementById("hepsiBurada"), config1);

// HEPSİBURADA END

// AMAZON START

const data2 = {
    labels: labels,
    datasets: [
        {
            label: "",
            data: [30, 40, 50, 60, 50, 60, 70, 30, 50, 80, 40, 50, 400],
            fill: false,
            borderColor: "#4BBBCE",
            tension: 0.1,
            pointRadius: 1,
        },
    ],
};

const config2 = {
    type: "line",
    data: data2,
    options: {
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {  // Tooltip eklentisini etkinleştirin
                enabled: true,
                mode: 'nearest',  // En yakın veri noktasını seçmek için
            },
        },
    },
};
let amazon = new Chart(document.getElementById("amazon"), config2);

// AMAZON END

// CİCEKSEPETİ START
const data4 = {
    labels: labels,
    datasets: [
        {
            label: "",
            data: [50, 40, 70, 50, 90, 50, 70, 40, 60, 70, 80, 70, 400],
            fill: false,
            borderColor: "#00BE83",
            tension: 0.1,
            pointRadius: 1,
        },
    ],
};
const config4 = {
    type: "line",
    data: data4,
    options: {
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {  // Tooltip eklentisini etkinleştirin
                enabled: true,
                mode: 'nearest',  // En yakın veri noktasını seçmek için
            },
        },
    },
};
let cicekSepeti = new Chart(document.getElementById("cicekSepeti"), config4);
// CİCEKSEPETİ END

// N11 START
// Chart.js eklentisini projenize eklediğinizden emin olun.
// chartjs-plugin-tooltip eklentisini kullanabilmek için ayrıca Chart.js sürümünüzün 3.0 veya üstü olması gerekebilir.

const data5 = {
    labels: labels,
    datasets: [
        {
            label: "",
            data: [70, 40, 50, 50, 70, 60, 50, 80, 60, 70, 80, 50, 400],
            fill: false,
            borderColor: "purple",
            tension: 0.1,
            pointRadius: 1,
        },
    ],
};

const config5 = {
    type: "line",
    data: data5,
    options: {
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {  // Tooltip eklentisini etkinleştirin
                enabled: true,
                mode: 'nearest',  // En yakın veri noktasını seçmek için
            },
        },
    },
};

let n11 = new Chart(document.getElementById("n11"), config5);

// N11 END
