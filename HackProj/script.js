const poke = document.getElementById('myChart');
      
        new Chart(poke, {
          type: 'bar',
          data: {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [{
              label: 'Environmental Matrics',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 2
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });


        const as = document.getElementById('Chart');
      
        new Chart(as, {
          type: 'bar',
          data: {
            labels: ['7', '8', '9', '10', '11', '12'],
            datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
        

        
      