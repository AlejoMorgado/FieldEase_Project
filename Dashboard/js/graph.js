

document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'http://192.168.80.24:3000/api/sensorsData'; // Replace with your API endpoint
  const averageH = "averageHumidity"
  const averageF1 = "averageFloor1"
  const averageF2 = "averageFloor2"
  const averageT = "averageTemperature"
  const Atemperature = 'blueChart1';
  const floor1 = 'blueChart2';
  const Ahumidity = 'redChart1';
  const floor2 = 'redChart2';
  const chartType = 'line';

  


  const staticH = async () =>{
    const data = await fetchData();
    const airHumidity = data.map(item => item.air_humidity);
    const averageAirHumidity = Math.round((airHumidity.reduce((sum, value) => sum + value, 0) / airHumidity.length) * 100) / 100;
    console.log(averageAirHumidity);
    const avgH = document.getElementById(averageH)
    avgH.textContent = `Promedio de la humedad esta semana:`
    avgH.textContent= ` ${averageAirHumidity}%`
  
  }
  const staticF1 = async () =>{
    const data = await fetchData();
    const floor1 = data.map(item => item.floor_sensor1);
    const averageFloor1 = Math.round((floor1.reduce((sum, value) => sum + value, 0) / floor1.length) * 100) / 100;
    const avgF1 = document.getElementById(averageF1)
    avgF1.textContent= ` ${averageFloor1}%`
  
  }
  const staticF2 = async () =>{
    const data = await fetchData();
    const floor2 = data.map(item => item.floor_sensor2);
    const averageFloor2 = Math.round((floor2.reduce((sum, value) => sum + value, 0) / floor2.length) * 100) / 100;
    const avgF2 = document.getElementById(averageF2)
    avgF2.textContent= ` ${averageFloor2}%`
  }
  const staticT = async () =>{
    const data = await fetchData();
    const airTemperature = data.map(item => item.air_temperature);
    const averageAirTemperature = Math.round((airTemperature.reduce((sum, value) => sum + value, 0) / airTemperature.length) * 100) / 100;
    console.log(averageAirTemperature);
    const avgT = document.getElementById(averageT)
    avgT.textContent= ` ${averageAirTemperature}°C`
  
  }
  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }


  const temperatureChart = async () => {
    try {
      const data = await fetchData();
      const labels = data.map(item => {
        const date = new Date(item.actual_date);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      });
      const airTemperature = data.map(item => item.air_temperature);
  
      const ctx = document.getElementById(Atemperature).getContext('2d');
      new Chart(ctx, {
        type: chartType,
        data: {
          labels: labels,
          datasets: [{
            label: 'Air Temperature',
            data: airTemperature,
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
        },
        options: {}
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  const floor1Chart = async () => {
    try{
    const data = await fetchData();
    const labels = data.map(item => {
      const date = new Date(item.actual_date);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    });
    const floor1Data = data.map(item => item.floor_sensor1);
  
    const ctx = document.getElementById(floor1).getContext('2d');
    new Chart(ctx, {
      type: chartType,
      data: {
        labels: labels,
        datasets: [{
          label: 'Floor humidity 1',
          data: floor1Data,
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
      },
      options: {}
    })}catch(error) {
      console.error('Error:', error);
    }
  };
  
  const humidityChart = async () =>{
    try{
    const data = await fetchData();
    const labels = data.map(item => {
      const date = new Date(item.actual_date);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    });
    const airHumidity = data.map(item => item.air_humidity);

    const ctx = document.getElementById(Ahumidity).getContext('2d');
    new Chart(ctx, {
      type: chartType,
      data: {
        labels: labels,
        datasets: [{
          label: 'Air Humidity',
          data: airHumidity,
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
      },
      options: {}
    })}catch(error) {
      console.error('Error:', error);
    }
  }
  
  const floor2Chart = async () =>{
  try{
    const data = await fetchData();
    const labels = data.map(item => {
      const date = new Date(item.actual_date);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    });
    const floor2Data = data.map(item => item.floor_sensor2);

    const ctx = document.getElementById(floor2).getContext('2d');
    new Chart(ctx, {
      type: chartType,
      data: {
        labels: labels,
        datasets: [{
          label: 'Floor humidity 2',
          data: floor2Data,
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
      },
      options: {}
    })}catch(error) {
      console.error('Error:', error);
    }
  }


  staticH();
  staticF1();
  staticF2();
  staticT();

  floor2Chart()
  humidityChart()
  floor1Chart();
  temperatureChart();
});
