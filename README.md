
# Prometheus and Grafana workshop2

## 0 - Introduction

### Locally with Docker

- Prometheus: [http://localhost:8080](http://localhost:8080)
- Grafana: [http://localhost:3000](http://localhost:3000) (user: grep / pass: demo)
- Microservice-demo: [http://localhost:8000](http://localhost:8000) (user: grep / pass: demo)

### 1 - Expose /metrics from a micro-service

After running docker compose file you can check the localhost:8000/metrics enpoint to display all the microservice metrics.

### 2 - Implement histagram endpoint

You can try solve this by reading the nodejs prometheus client repo [documentation](https://github.com/siimon/prom-client/blob/master/README.md)

<details>
  <summary>💡 Solution</summary>

```ts
const req_histogram = new Prometheus.Histogram({
    name: 'req_histogram',
    help: 'Four bucket histogram for requests',
    buckets: [0.4, 1, 3, 5],
});

app.all('/histogram', (req, res) => { 
    const randomValue = Math.floor(Math.random() * 5);
    req_histogram.observe(randomValue);
    res.json({ status: 'ok' });
});

```
</details>

### 3 - Create instagram UI component

Create histagram 

<details>
  <summary>💡 Solution</summary>

```sh
histogram_quantile(0.9, sum(rate(req_histogram_bucket{}[5m])) by (le))
```
</details>