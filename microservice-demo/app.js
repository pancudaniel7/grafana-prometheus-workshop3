
const express = require('express');
const Prometheus = require('prom-client');
const app = express();

Prometheus.collectDefaultMetrics();
const req_counter = new Prometheus.Counter({
    name: 'req_counter',
    help: 'Total number of requests',
    labelNames: ['method']
});

const req_histogram = new Prometheus.Histogram({
    name: 'req_histogram',
    help: 'Four bucket histogram for requests',
    buckets: [200, 250, 300, 400],
    labelNames: ['method']
});

app.all('/health', (req, res) => { 
    req_counter.inc({
        method: req.method,
    });
    res.json({ status: 'ok' });
});

app.all('/histogram', (req, res) => { 
    const randomValue = Math.floor(Math.random() * 5);
    req_histogram.labels('/histogram').observe(randomValue);
    res.json({ status: 'ok' });
});

app.get('/metrics', (req, res) => {
    res.set('Content-Type', Prometheus.register.contentType);
    res.end(Prometheus.register.metrics());
});

const server = app.listen(8000, () => {
    console.log(`Example app listening on port 8000!`)
});
