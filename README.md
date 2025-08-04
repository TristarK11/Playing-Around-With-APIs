# Summative_Playing-Around-with-APIs

This is a Dockerized Flask web server that displays live weather information based on an API key from OpenWeatherMap. It's hosted on two web servers and load-balanced with HAProxy.

# Features

- Search for current weather by city name
- Real-time weather data via OpenWeatherMap API
- Built with Flask and Docker
- Deployed across multiple servers with HAProxy load balancing

# containers.

Web01   - Standalone container  (http://localhost:8080)
Web02   - Standalone container  (http://localhost:8081)
Load Balancer - HAProxy distributing traffic  (http://localhost:8083)

# Resources used

- Docker
- Python 3
- OpenWeatherMap API Key
