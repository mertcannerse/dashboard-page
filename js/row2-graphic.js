const ctx2 = document.getElementById("row2-graphic");

new Chart(ctx2, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "# of Votes",
        data: [10, 20, 80],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
