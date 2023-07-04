
# Prometheus and Grafana workshop2

## 0 - Introduction

### Locally with Docker

- Prometheus: [http://localhost:8080](http://localhost:8080)
- Grafana: [http://localhost:3000](http://localhost:3000) (user: grep / pass: demo)
- Microservice-demo: [http://localhost:8000](http://localhost:8000) (user: grep / pass: demo)

### 1 - Expose /metrics from a micro-service

After running docker compose file you cna check the localhost:8000/metrics enpoint to display all the microservice metrics.
