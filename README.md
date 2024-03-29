# Webdriverio Example with Healenium

[![Docker Pulls](https://img.shields.io/docker/pulls/healenium/hlm-backend.svg?maxAge=25920)](https://hub.docker.com/u/healenium)
[![License](https://img.shields.io/badge/license-Apache-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)

This repository contains automation tests with Webdriverio + Mocha using Healenium.

[1. Start Healenium components](#1-start-healenium-components)
* [Healenium with Selenoid](#run-healenium-with-selenoid)
* [Healenium with Selenium-Grid](#run-healenium-with-selenium-grid)

[2. Configuration RemoteWebDriver for Healenium](#2-configuration-remotewebdriver-for-healenium)

[3. Run tests using Wdio](#3-run-tests-using-wdio)

[4. Monitoring tests running](#4-monitoring-tests-running)

## How to start

### 1. Start Healenium components

Go into healenium folder

```sh
cd healenium
```

#### Run Healenium with Selenium-Grid:
```sh
docker-compose 
```

#### Run Healenium with Selenoid:

```sh
docker-compose -f docker-compose-selenoid.yaml up -d
```

<b>ATTENTION</b>

Verify the next images are <b>Up</b> and <b>Running</b>
- `postgres-db` (PostgreSQL database to store etalon selector / healing / report)
- `hlm-proxy` (Proxy client request to Selenium server)
- `hlm-backend` (CRUD service)
- `selector imitator` (Convert healed locator to convenient format)
- `selenoid`/`selenium-grid` (Selenium server)

### 2. Configuration RemoteWebDriver for Healenium

To run using Healenium specify properties of wdio.conf.js :

```javascript
    services: [],
    // host/port/protocol your hlm-proxy service
    hostname: '127.0.0.1',
    port: 8085,
    protocol: 'http'
```

### 3. Run tests using wdio

```sh
npm install 
```

Run your tests

```sh
npm run wdio
```

### 4. Monitoring tests running

You can monitor tests running if you using Healenium with Selenoid plus Selenoid Ui, go to :<br/>
```sh
http://localhost:8080
```

## Community / Support

* [Telegram chat](https://t.me/healenium)
* [YouTube Channel](https://www.youtube.com/channel/UCsZJ0ri-Hp7IA1A6Fgi4Hvg)
