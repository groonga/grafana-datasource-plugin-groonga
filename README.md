# README

[Groonga](http://groonga.org/) datasource plugin for [Grafana](http://grafana.org/) 2.

![grafana-plugin-datasource-groonga-screenshot](https://cloud.githubusercontent.com/assets/386687/13373741/41058f8e-ddb3-11e5-83fd-d904f810f8fe.png)

## Installation

Notice: You need to install Grafana. See [Installation - Grafana Documentation](http://docs.grafana.org/installation/).

1. Download archive
2. Copy to plugins directory
3. Restart grafana-server

### 1. Download archive

Clone git repository or download archive into temporary directory.

#### Clone

    $ git clone https://github.com/groonga/grafana-datasource-plugin-groonga.git

#### Archive

    $ wget https://github.com/groonga/grafana-datasource-plugin-groonga/releases/download/v0.1.0/grafana-datasource-plugin-groonga-0.1.0.tar.gz
    $ tar xzvf grafana-datasource-plugin-groonga-0.1.0.tar.gz

### 2. Copy to plugins directory

Copy the files to `/usr/share/grafana/public/app/plugins/datasource/groonga`.

    $ sudo cp grafana-datasource-plugin-groonga /usr/share/grafana/public/app/plugins/datasource/groonga

### 3. Restart grafana-server

Restart `grafana-server`. For example (Systemd):

    $ sudo systemctl restart grafana-server

Now, Groonga data source is avalilable.

## Usage

1. Start Groonga HTTP server
2. Add data source
3. Add a graph to dashboard

### 1. Start Groonga HTTP server

Notice: You need to create table with *Time* type column and load data with one or more numeric column (*UInt16*, *Int32*, *Float* etc.).

Start [Groonga HTTP server](http://groonga.org/docs/reference/executables/groonga-server-http.html) or [groonga-httpd](http://groonga.org/docs/reference/executables/groonga-httpd.html).

### 2. Add data source

1. Login as an admin user
2. Data sources > Overview > Add new
3. Input data source name (any name)
3. Select Type to "Groonga"
4. Input Groonga server's URL (e.g.: `http://localhost:10041`)
5. Choose "proxy"
6. Push "Save" button

### 3. Add a graph to dashboard

1. Show a dashboard
2. App Panel > Graph
3. Select data source
4. Choose a table
  * Shown only tables include one or more *Time* column
5. Choose a column
  * Shown only nuneric columns (*UInt16*, *Int32*, *Float* etc.)

## Community

* [@groonga on Twitter](https://twitter.com/groonga/)
* [Groonga page on Facebook](https://www.facebook.com/groonga)
* [Mailing list on SourceForge.net](http://lists.sourceforge.net/mailman/listinfo/groonga-talk)
* [Chat room on Gitter](https://gitter.im/groonga/grafana-datasource-plugin-groonga)

## Authors

* Masafumi Yokoyama `<yokoyama@clear-code.com>`
