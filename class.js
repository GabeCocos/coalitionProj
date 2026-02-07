function renderBloodPressureChart(history) {
  const ctx = document.getElementById("bpChart").getContext("2d");

  const years = history.map(item => item.year);
  const systolic = history.map(item => item.systolic);
  const diastolic = history.map(item => item.diastolic);

  new Chart(ctx, {
    type: "line",
    data: {
      labels: years,
      datasets: [
        {
          label: "Systolic",
          data: systolic,
          borderWidth: 2
        },
        {
          label: "Diastolic",
          data: diastolic,
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom" }
      }
    }
  });
}
