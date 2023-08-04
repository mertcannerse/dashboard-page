// TRENDYOL START
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const data = {
    labels: labels,
    datasets: [{
        label: '',
        data: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
        fill: false,
        borderColor: '#F83000',
        tension: 0.1,
        pointRadius: 0,
    }]
};
const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            }
        },
        plugins: {
            legend: {
                display: false,
            },
        }
    }
};
let trendyol = new Chart(
    document.getElementById('trendyol'),
    config
);

// TRENDYOL END



// HEPSİBURADA START

const data1 = {
    labels: labels,
    datasets: [{
        label: '',
        data: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
        fill: false,
        borderColor: '#F87600',
        tension: 0.1,
        pointRadius: 0,

    }]
};
const config1 = {
    type: 'line',
    data: data1,
    options: {
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            }
        },
        plugins: {
            legend: {
                display: false,
            },
        }
    }
};
let hepsiBurada = new Chart(
    document.getElementById('hepsiBurada'),
    config1
);

// HEPSİBURADA END

// AMAZON START

const data2 = {
    labels: labels,
    datasets: [{
        label: '',
        data: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
        fill: false,
        borderColor: '#4BBBCE',
        tension: 0.1,
        pointRadius: 0,

    }]
};


const config2 = {
    type: 'line',
    data: data2,
    options: {
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            }
        },
        plugins: {
            legend: {
                display: false,
            },
        }
    }
};
let amazon = new Chart(
    document.getElementById('amazon'),
    config2
);

// AMAZON END

// CİCEKSEPETİ START
const data4 = {
    labels: labels,
    datasets: [{
        label: '',
        data: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
        fill: false,
        borderColor: '#00BE83',
        tension: 0.1,
        pointRadius: 0,

    }]
};
const config4 = {
    type: 'line',
    data: data4,
    options: {
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            }
        },
        plugins: {
            legend: {
                display: false,
            },
        }
    }
};
let cicekSepeti = new Chart(
    document.getElementById('cicekSepeti'),
    config4
);
// CİCEKSEPETİ END

// N11 START
const data5 = {
    labels: labels,
    datasets: [{
        label: '',
        data: [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
        fill: false,
        borderColor: 'purple',
        tension: 0.1,
        pointRadius: 0,
    }]
};
const config5 = {
    type: 'line',
    data: data5,
    options: {
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            }
        },
        plugins: {
            legend: {
                display: false,
            },
        }
    }
};
let n11 = new Chart(
    document.getElementById('n11'),
    config5
);
// N11 END
