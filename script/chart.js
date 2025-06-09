document.getElementById('cart-count').textContent = (JSON.parse(localStorage.getItem('cart')) || []).length;

const productData = {
  'Floral Midi Dress': { 'North': 50, 'South': 30, 'East': 40, 'West': 20 },
  'Embroidered Kurta': { 'North': 20, 'South': 25, 'East': 30, 'West': 15 },
  'Classic Denim Jacket': { 'North': 10, 'South': 5, 'East': 8, 'West': 12 }
};

const barCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: Object.keys(productData['Floral Midi Dress']),
    datasets: [{
      label: 'Sales by Region',
      data: Object.values(productData['Floral Midi Dress']),
      backgroundColor: ['#F13AB1', '#E72744', '#A15AC7', '#FF8C42'],
      borderRadius: 8
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: { font: { size: 14 } }
      },
      tooltip: { enabled: true }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { font: { size: 12 }, stepSize: 5 }
      },
      x: {
        ticks: { font: { size: 12 } }
      }
    }
  }
});

const pieCtx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels: Object.keys(productData['Floral Midi Dress']),
    datasets: [{
      label: 'Sales by Region',
      data: Object.values(productData['Floral Midi Dress']),
      backgroundColor: ['#F13AB1', '#E72744', '#A15AC7', '#FF8C42']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: { font: { size: 14 } }
      },
      tooltip: { enabled: true }
    }
  }
});

document.getElementById('productSelect').addEventListener('change', function() {
  const selectedProduct = this.value;
  const selectedData = productData[selectedProduct];
  const labels = Object.keys(selectedData);
  const values = Object.values(selectedData);

  barChart.data.labels = labels;
  barChart.data.datasets[0].data = values;
  barChart.update();

  pieChart.data.labels = labels;
  pieChart.data.datasets[0].data = values;
  pieChart.update();
});

