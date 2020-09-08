# Grafana Groonga Data Source Plugin

![CI](https://github.com/groonga/grafana-datasource-plugin-groonga/workflows/CI/badge.svg)

View report data from Groonga in your Grafana.

## Install the Data Source
Use the new grafana-cli tool to install groonga-datasource from the commandline:

```bash
grafana-cli plugins install groonga-datasource
```

The plugin will be installed into your grafana plugins directory; the default is /var/lib/grafana/plugins if you installed the grafana package.

## Configure the Data Source

Accessed from the Grafana main menu, newly installed data sources can be added immediately within the [Data Sources] section.
Next, click the [Add data source] button in the upper right. The data source will be available for selection in the Type select box.
To see a list of installed data sources, click the Plugins item in the main menu. Both core data sources and installed data sources will appear.

## How to try

You can use [docker-compose](https://docs.docker.com/compose/) to try
groonga-datasource. Here is a command line to try groonga-datasource
1.0.0:

```bash
GF_GROONGA_DATASOURCE_DIR=/tmp/groonga-datasource \
  GF_INSTALL_PLUGINS="https://github.com/groonga/grafana-datasource-plugin-groonga/releases/download/1.0.0/groonga-datasource-1.0.0.zip;groonga-datasource" \
  docker-compose up
```

You can find Grafana at http://localhost:3000/ .

You can login as the `admin` user with `admin` for password.

You can find "Groonga" datasource at the bottom of
http://localhost:3000/datasources/new . You can use the following
parameters to use the test Groonga server that has some test data:

  * HTTP
    * URL: `http://groonga:10041/`
  * Groonga Details
    * Time field name: `timestamp`

You can use the Groonga datasource in a panel with the following
parameters:

  * Table Name: `Logs`

You can see visualized data in the test Groonga server.

## License

Apache License 2.0, see [LICENSE](LICENSE).
