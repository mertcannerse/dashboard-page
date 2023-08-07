let ctx1 = document.getElementById("row1-rightside").getContext("2d");
let chart = new Chart(ctx1, {
  type: "bar",
  data: {
    labels: [
      "00-02",
      "02-04",
      "04-06",
      "06-08",
      "08-10",
      "10-12",
      "12-14",
      "14-16",
      "16-18",
      "18-20",
      "20-22",
      "22-24",
    ],
    datasets: [
      {
        data: [
          [0, 2],
          [2, 4],
          [4, 6],
          [6, 8],
          [8, 10],
          [10, 12],
          [12, 14],
        ], // Verileri tersine çevir
        label: ["0.20", "21.45", "22.50", "23.40"],
        backgroundColor: [
          "#BACCEA",
          "#8FB4EF",
          "#649BF4",
          "#0F6CFF",
          "#8FB4EF",
          "#0F6CFF",
        ],
      },
    ],
  },

  options: {
    indexAxis: "y",
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          color: "#989ABC",
          font: {
            size: 10,
            family: "Arial",
          },
        },
      },
      x: {
        beginAtZero: false,
        ticks: {
          callback: function (value, index) {
            const myLabels = [
              "Pazartesi",
              "Salı",
              "Çarşamba",
              "Perşembe",
              "Cuma",
              "Cumartesi",
              "Pazar",
            ];
            return myLabels[index];
          },
          color: "#989ABC",
        },
      },
    },
    plugins: {
      legend: {
        display: false
      }
    }
  },
});