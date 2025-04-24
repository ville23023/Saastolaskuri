const ctx = document.getElementById('myChart');
const labels = ['0 y', '1 y', '2 y', '3 y', '4 y', '5 y', '6 y'];
new Chart(ctx, { 
    type: 'line',
    data: { 
        labels: labels,
        datasets: [
            {
            label: 'Actual savings €',
            data: [50, 80, 120, 250, 300, 250, 400],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          },
          {
            label: 'Saving goal €',
            data: [50, 100, 150, 200, 250, 300, 350],
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
        }
        ]
        }
})
