const getsensors = async () => {
    try {
        const response = await fetch('http://192.168.1.97:3000/api/sensorsData');

        const datasensors = await response.json();
        console.log(datasensors);
        return datasensors;
    } catch (error) {
        console.error(error);
    }
}
getsensors()
