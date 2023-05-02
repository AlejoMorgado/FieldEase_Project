const getsensors = async () => {
  try {
      const response = await fetch('http://192.168.1.97:3000/api/sensorsData', {
        mode: 'cors' // Agrega la opción 'mode' para manejar CORS
      });
      const datasensors = await response.json();
      // return datasensors;
  } catch (error) {
      console.error(error);
  }
}
getsensors()