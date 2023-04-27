function createChart(id, type, data, options) {
  const ctx = document.getElementById(id);
  new Chart(ctx, {
    type: type,
    data: data,
    options: options
  });
}

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

const options = {
  responsive: true
};

document.addEventListener('DOMContentLoaded', function () {
  createChart('myChart', 'line', data, options);
  createChart('myChart2', 'line', data, options);
  createChart('myChart3', 'line', data, options);
  createChart('blueChart1', 'bar', data, options);
  createChart('blueChart2', 'bar', data, options);
  createChart('blueChart3', 'bar', data, options);
  createChart('redChart1', 'scatter', data, options);
  createChart('redChart2', 'scatter', data, options);
  createChart('redChart3', 'scatter', data, options);
});
