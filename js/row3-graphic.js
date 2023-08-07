
const row3data = {
    labels: labels,
    datasets: [
        {
            label: "",
            data: [60, 40, 50, 80, 90, 70, 60, 40, 50, 70, 60, 80, 400],
            fill: false,
            borderColor: "#F87600",
            tension: 0.1,
            pointRadius: 0,
        },
    ],
};
const row3config = {
    type: "line",
    data: row3data,
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
        },
    },
};
let totalOrder = new Chart(document.getElementById("totalOrder"), row3config);