# import-stat-dashboard

Initialise a dashboard on kibana to view useful node.js stats

## instalation
```
npm i @nearform/import=stat-dashboard
```

## CLI Usage

```
$ import-dashboard -h $ES_HOST -p $ES_PORT -c theDashboardConfig.json
```

## Programmatic usage

```js
const importStatDashboard = require('@nearform/import-stat-dashboard')
importStatDashboard({
  host: 'es-host', // default localhost
  port: 'es-port', // default 9200
  config: '/some/config/path.json' // defaults to a path pointing to a config stored in this module
})
```

## License
Apache-2.0