const ctx2 = document.getElementById("row2-graphic");

new Chart(ctx2, {
  type: "bar",
  data: {
    labels: ["Ocak", "Şubat", "Mart"],

    datasets: [
      {
        label: "# of Votes",
        data: [20, 40, 80],
        backgroundColor: [
          "#BACCEA",
          "#649BF4",

          "#0F6CFF",

        ],
        borderWidth: 1,
      },
    ],

  },
  options: {
    scales: {
      y: {
        display: false,
        beginAtZero: true,
      },
      x: {
        display: false
      }
    },
    plugins: {
      legend: {
        display: false
      },
    }
  },
});
