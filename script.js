
var myChart = null
window.addEventListener('load', function () {
    //The document is loaded
    //We invoke this the first time
    getPythonData()
});

//We create function to request the data from Python Web Server
function updatePythonData(){
    fetch("http://127.0.0.1:5000", {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
      }).then(response => {
        response.json().then(jsonObject => {
            myChart.data.datasets[0].data = jsonObject.current_data
            myChart.data.datasets[1].data = jsonObject.prediction_data
            myChart.update()
        })
    })
}

//Obtains data from Python Web Server and creates the graph for the first time
function getPythonData(){
    fetch("http://127.0.0.1:5000", {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
      }).then(response => {
        response.json().then(jsonObject => {
            const ctx = document.getElementById('myChart').getContext('2d');

            const data = {
                labels: [],
                datasets: [
                    {
                        label: 'Actual value',
                        data: jsonObject.current_data,
                        borderColor: "#0008FF",
                        backgroundColor: "#B4B6FC"
                    },
                    {
                        label: 'Predicted data',
                        data: jsonObject.prediction_data,
                        borderColor: "#FC0000",
                        backgroundColor:"#FF8C8C"
                    }
                ]
            };
    
            const config = {
                type: 'line',
                data: data,
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Apple Stock Prediction (2 minutes window)',
                            fullSize: true
                        }
                    },
                    scales: {
                        x: {
                          display: true,
                          title: {
                            display: true,
                            text:'Time'
                          }
                        },
                        y: {
                          display: true,
                          title: {
                            display: true,
                            text: 'Standarized closed prices'
                          }
                        }
                    },
                }
            };
            myChart = new Chart(ctx, config);
            fetchInterval = 120000; // 120 seconds.
            setInterval(updatePythonData, fetchInterval);
        })
    })
}


