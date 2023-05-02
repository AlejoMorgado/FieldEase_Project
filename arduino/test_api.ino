// // This code is meant to run in ARDUINO IDE

// #include <WiFi.h>
// #include <ArduinoHttpClient.h>
// #include <DHT.h>
// #include <TimeLib.h>

// // #define WIFI_SSID "EL HUB"
// // #define WIFI_PASSWORD "nuevasideas"
// #define WIFI_SSID "EL HUB"
// #define WIFI_PASSWORD "nuevasideas"

// // #define WIFI_SSID "FLIAMURILLO"
// // #define WIFI_PASSWORD "VALENCIA1094"

// // #define WIFI_SSID "Not_your_wifi"
// // #define WIFI_PASSWORD "Salch1papa"
// // 192.168.80.24
// // "192.168.1.48"
// #define API_HOST  "192.168.1.29"
// #define API_PORT 3000
// #define API_URL "/api/sensorsData"

// #define DHTPIN 15
// #define DHTTYPE DHT11

// #define FLOOR_SENSOR_1_PIN 32
// #define FLOOR_SENSOR_2_PIN 33

// DHT dht(DHTPIN, DHTTYPE);
// WiFiClient wifiClient;
// HttpClient httpClient = HttpClient(wifiClient, API_HOST, API_PORT);

// void setup() {
//   Serial.begin(115200);
//   dht.begin();

//   pinMode(FLOOR_SENSOR_1_PIN, INPUT);
//   pinMode(FLOOR_SENSOR_2_PIN, INPUT);

//   WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
//   while (WiFi.status() != WL_CONNECTED) {
//     delay(1000);
//     Serial.println("Connecting to  WiFi...");
//   }

//   Serial.println("Established conection ");
// }

// void loop() {
//   float temperature = dht.readTemperature();
//   float humidity = dht.readHumidity();
//   int floorSensor1 = map(analogRead(FLOOR_SENSOR_1_PIN), 0, 4095, 100, 0);
//   int floorSensor2 = map(analogRead(FLOOR_SENSOR_2_PIN), 0, 4095, 100, 0);

//   if (isnan(temperature) || isnan(humidity)) {
//     Serial.println("Error reading to DHT11");
//     delay(1000);
//     return;
//   }

//   time_t now = time(nullptr);


//   char dateTimeStr[20];
//   strftime(dateTimeStr, sizeof(dateTimeStr), "%Y-%m-%d %H:%M:%S", localtime(&now));

//   httpClient.beginRequest();
//   httpClient.post(API_URL);
//   httpClient.sendHeader("Content-Type", "application/json");

 
//   String json = String("{ \"actual_date\": \"") + dateTimeStr + String("\", \"air_temperature\": ") + temperature + String(", \"air_humidity\": ") + humidity + String(", \"floor_sensor1\": ") + floorSensor1 + String(", \"floor_sensor2\": ") + floorSensor2 + String(" }");

//   Serial.print(json);
//   httpClient.sendHeader("Content-Length", json.length());
//   httpClient.beginBody();
//   httpClient.print(json);
//   httpClient.endRequest();

//   int httpResponseCode = httpClient.responseStatusCode();
//   String response = httpClient.responseBody();

//   if (httpResponseCode == 200) {
//     Serial.println("Data successfully inserted in the API");
//   } else {
//     Serial.print("Error sending data to the API: ");
//     Serial.println(response);
//   }

//   delay(5000);
// }
