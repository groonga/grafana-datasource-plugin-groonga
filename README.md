# Grafana Gronnga Data Source Plugin

![CI](https://github.com/groonga/grafana-datasource-plugin-groonga/workflows/CI/badge.svg)

View report data from Groonga in your Grafana.

## Install the Data Source
Use the new grafana-cli tool to install groonga-datasource from the commandline:

```
grafana-cli plugins install groonga-datasource
```

The plugin will be installed into your grafana plugins directory; the default is /var/lib/grafana/plugins if you installed the grafana package.

## Configure the Data Source

Accessed from the Grafana main menu, newly installed data sources can be added immediately within the [Data Sources] section.
Next, click the [Add data source] button in the upper right. The data source will be available for selection in the Type select box.
To see a list of installed data sources, click the Plugins item in the main menu. Both core data sources and installed data sources will appear.
Select Groonga-datasource and enter the [Name], [URL], [Default table name], and [Default field name] in the displayed setting screen.


## Usage

- `Table Name`: target table name.
- `Time field`: the key time field for the table.
- `Output columns`: output columns by csv format. (ex: `timefield,value1,value2`)
- `limit num`: number of output records. default value is `10`.
- `Filter string`: filtering string according to [Groonga Script](https://groonga.org/ja/docs/reference/grn_expr/script_syntax.html).
- `Sort columns`: sort key columns by csv format. (ex: `timefield,value1,-value2`)
  - If you want to use descending order, add `-` at the beginning.)

If you want to perform aggregation processing, specify the following.
- `Key columns`: Aggregate key columns by csv format.
- `Type`: data aggregation method(count/sum/max/min/avg).
- `Target`: column to be aggregated.
- `Interval`: Interval when aggregation is performed for each fixed period.

> **Note:**
> - If you want to aggregate every certain period in the graph panel, `Interval` is required.
> - Aggregated time is stored in a column called AGGTIME and can be used in Key columns and Output columns.
> - If you want to display aggregated values, specify a special column name in Output columns.
> 
> |Aggregation method|Special column name|
> |---|---|
> |count|_nsubrecs|
> |sum|_sum|
> |max|_max|
> |min|_min|
> |avg|_avg|

> **Limitations:**
> - If multiple queries are used, the settings of the first query will be valid except for the aggregated items.

## Learn more
- [Build a data source plugin tutorial](https://grafana.com/tutorials/build-a-data-source-plugin)
- [Grafana documentation](https://grafana.com/docs/)
- [Grafana Tutorials](https://grafana.com/tutorials/) - Grafana Tutorials are step-by-step guides that help you make the most of Grafana
- [Grafana UI Library](https://developers.grafana.com/ui) - UI components to help you build interfaces using Grafana Design System

## License

Apache License 2.0, see [LICENSE](LICENSE).
