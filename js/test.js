async function fetchData() {
  try {
    const response = await fetch('https://192.168.1.16:8000/api/sensorsData');
    const data = await response.json();
    console.log(data);
    // do something with the data
  } catch (error) {
    console.error(error);
  }
}

fetchData();
