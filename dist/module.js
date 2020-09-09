/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/ui","@grafana/data","@grafana/runtime","lodash"],(function(e,t,a,r,n){return function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a(a.s=5)}([function(t,a){t.exports=e},function(e,a){e.exports=t},function(e,t){e.exports=a},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t,a){"use strict";a.r(t);var r=a(2),n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)};function i(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}var l=function(){return(l=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function o(e,t,a,r){return new(a||(a=Promise))((function(n,i){function l(e){try{u(r.next(e))}catch(e){i(e)}}function o(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,o)}u((r=r.apply(e,t||[])).next())}))}function u(e,t){var a,r,n,i,l={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;l;)try{if(a=1,r&&(n=2&i[0]?r.return:i[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,i[1])).done)return n;switch(r=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,r=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(n=l.trys,(n=n.length>0&&n[n.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){l.label=i[1];break}if(6===i[0]&&l.label<n[1]){l.label=n[1],n=i;break}if(n&&l.label<n[2]){l.label=n[2],l.ops.push(i);break}n[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],r=0}finally{a=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}}var s=a(3),g=(a(4),[{text:"None",value:"none",columnText:"",queryText:"",requiresField:!1,isGraphAggType:!1},{text:"Count",value:"count",columnText:"_nsubrecs",queryText:"COUNT",requiresField:!1,isGraphAggType:!0},{text:"Average",value:"avg",columnText:"_avg",queryText:"AVG",requiresField:!0,isGraphAggType:!0},{text:"Sum",value:"sum",columnText:"_sum",queryText:"SUM",requiresField:!0,isGraphAggType:!0},{text:"Max",value:"max",columnText:"_max",queryText:"MAX",requiresField:!0,isGraphAggType:!0},{text:"Min",value:"min",columnText:"_min",queryText:"MIN",requiresField:!0,isGraphAggType:!0}]);function c(e){var t=g.find((function(t){return t.value===e}));return void 0===t?"":t.queryText}var h=function(){function e(e,t,a,r,n){var i=this;this.rangeFrom=a,this.rangeTo=r,this.table=t[0].table,this.timeField=e,this.query=void 0===t[0].queryText?"":t[0].queryText,this.filter=t[0].filter,this.sortby=t[0].sortby,this.limit=t[0].limit,this.aggs=[],t.forEach((function(e){var t={refId:e.refId,aggType:e.aggregateType,aggKeyStr:e.aggregateKeyStr,aggTarget:e.aggregateTarget,aggInterval:void 0===e.aggregateInterval?"":e.aggregateInterval};i.aggs.push(t)})),this.intervalMs=void 0===n?1e3:n}return e.prototype.isEnableAggregate=function(e){var t=e<0||e>=this.aggs.length?0:e,a=c(this.aggs[t].aggType);return this.isExist(this.aggs[t].aggKeyStr)&&a.length>0},e.prototype.getAggTimeColName=function(){return"AGGTIME"},e.prototype.isOnlyAggTimeCol=function(e){var t=e<0||e>=this.aggs.length?0:e;return this.aggs[t].aggKeyStr===this.getAggTimeColName()},e.prototype.isAggregate=function(e){var t=e<0||e>=this.aggs.length?0:e,a=c(this.aggs[t].aggType);return this.isExist(this.aggs[t].aggKeyStr)&&a.length>0},e.prototype.getQueries=function(){return this.splitCsv(this.query)},e.prototype.getMetrics=function(e){var t=e<0||e>=this.aggs.length?0:e;return this.splitCsv(this.aggs[t].aggKeyStr)},e.prototype.buildQueryParameters=function(){var e=this,t=this.isEnableAggregate(0),a="";a+=this.getQueryStr(!1,"table",this.table);var r="";if(this.isExist(this.timeField)&&(r="between("+this.timeField+","+this.rangeFrom.toString()+","+this.rangeTo.toString()+")"),a+=this.getQueryStr(!0,"filter",r),this.isExist(this.filter)&&(a+="%26%26"+this.filter.replace(/&/g,"%26")),void 0!==this.limit&&this.limit>=0){var n=t?10:this.limit;a+=this.getQueryStr(!0,"limit",n)}if(this.isExist(this.query)&&(a+=this.getQueryStr(!0,"output_columns",this.query)),t){if(this.aggs.forEach((function(t,r){a+=e.getDrilldownStrs(r)})),void 0!==this.aggs[0].aggInterval&&this.aggs[0].aggInterval.length>0){a+=this.getColumnsStr(!0,"stage","initial"),a+=this.getColumnsStr(!0,"type","Time");var i=this.getTimeClassifyStr(this.aggs[0].aggInterval);a+=this.getColumnsStr(!0,"value",i)}}else this.isExist(this.sortby)&&(a+=this.getQueryStr(!0,"sortby",this.sortby));return a},e.prototype.getTimeClassifyStr=function(e){var t="time_classify_minute("+this.timeField+",1)";if(void 0===e||e.length<=0)return t;var a="time_classify_",r=e.replace(/[^0-9]/g,"");switch(e.slice(-1)){case"s":a+="second";break;case"m":a+="minute";break;case"h":a+="hour";break;case"d":a+="day";break;case"w":a+="week";break;case"M":a+="month";break;case"Y":a+="year";break;default:return t}return a+="("+this.timeField+","+r+")"},e.prototype.getDrilldownStrs=function(e){var t,a,r=e<0||e>=this.aggs.length?0:e,n=this.splitCsv(this.aggs[r].aggKeyStr),i=c(this.aggs[r].aggType),l=(t=this.aggs[r].aggType,void 0===(a=g.find((function(e){return e.value===t})))?"":a.columnText),o="";o+=this.getDrilldownsStr(r,!0,"keys",this.aggs[r].aggKeyStr),o+=this.getDrilldownsStr(r,!0,"output_columns",l),void 0===n||n.length<=1?o+=",_key":n.forEach((function(e){return o+=",_value."+e})),o+=this.getDrilldownsStr(r,!0,"calc_types",i);var u=10;return void 0!==this.limit&&this.limit>=0&&(u=this.limit),o+=this.getDrilldownsStr(r,!0,"limit",u),this.isExist(this.aggs[r].aggTarget)&&(o+=this.getDrilldownsStr(r,!0,"calc_target",this.aggs[r].aggTarget)),o+=this.getDrilldownsStr(r,!0,"sort_keys",""),void 0===n||n.length<=1?o+="_key":(n.forEach((function(e){return o+="_value."+e+","})),o+=l),o},e.prototype.getQueryStr=function(e,t,a){return(e?"&":"")+t+"="+a},e.prototype.getDrilldownsStr=function(e,t,a,r){return(t?"&":"")+"drilldowns["+this.aggs[e].refId+"]."+a+"="+r},e.prototype.getColumnsStr=function(e,t,a){return(e?"&":"")+"columns["+this.getAggTimeColName()+"]."+t+"="+a},e.prototype.isExist=function(e){return!(void 0===e||e.length<=0)},e.prototype.splitCsv=function(e){var t,a,r,n=null===(t=e)||void 0===t?void 0:t.split(",");return(void 0===n||(null===(a=n)||void 0===a?void 0:a.length)<=0||1===(null===(r=n)||void 0===r?void 0:r.length)&&n[0].length<=0)&&(n=void 0),n},e}();function m(e,t,a){e.columns.push({text:t,type:a})}var f=function(e){function t(t){var a=e.call(this,t)||this;a.withCredentials=void 0!==t.withCredentials,a.url=void 0===t.url?"":t.url,a.name=t.name,a.index=void 0===t.database?"":t.database;var r=t.jsonData||{};return a.timeField=void 0===r.timeField?"":r.timeField,a.headers={"Content-Type":"application/json"},"string"==typeof t.basicAuth&&t.basicAuth.length>0&&(a.headers.Authorization=t.basicAuth),a}return i(t,e),t.prototype.query=function(e){return o(this,void 0,Promise,(function(){var t,a,r=this;return u(this,(function(n){return t=new h(this.timeField,e.targets,e.range.from.valueOf()/1e3,e.range.to.valueOf()/1e3,void 0===e.intervalMs?1e3:e.intervalMs),a=t.buildQueryParameters(),[2,Object(s.getBackendSrv)().datasourceRequest({url:this.url+"/d/select?"+a}).then((function(e){var a,n,i=t.isAggregate(0)?e.data[1][1]:e.data[1][0];return a=t.aggs[0].aggType,void 0!==(n=g.find((function(e){return e.value===a})))&&n.isGraphAggType?r.createGraphResponse(i,t):r.createTableResponse(i,t)}))]}))}))},t.prototype.testDatasource=function(){return o(this,void 0,void 0,(function(){return u(this,(function(e){return[2,this.doRequest({url:this.url+"/d/status",method:"GET"}).then((function(e){return 200===e.status?{status:"success",message:"Data source is working",title:"Success"}:{status:"error",message:"Data source is not working: "+e.message,title:"Error"}}))]}))}))},t.prototype.doRequest=function(e){return e.withCredentials=this.withCredentials,e.headers=this.headers,Object(s.getBackendSrv)().datasourceRequest(e)},t.prototype.getTypeStr=function(e){switch(e){case"Time":return"time";case"Int8":case"Int16":case"Int32":case"Int64":case"UInt8":case"UInt16":case"UInt32":case"UInt64":case"Float":return"number";default:return"string"}},t.prototype.getColumnIndex=function(e,t){var a=-1,r=t.trim();return""!==r&&(a=e.findIndex((function(e){return e[0]===r}))),a},t.prototype.getKeyColumnIndex=function(e,t){var a=-1,r=t.trim();return""!==r&&(a=e.findIndex((function(e){return e===r}))),-1===a&&(a=e.findIndex((function(e){return"Time"===e[1]}))),a},t.prototype.extractGraphMetrics=function(e,t,a,r){var n=this,i=["__dummy__"],l=-1;return t[1].filter((function(t,i){-1===e.data?e.data=i:t[0]===a.getAggTimeColName()||a.isOnlyAggTimeCol(r)&&"_key"===t[0]?e.time=i:"time"===n.getTypeStr(t[1])?l=-1===l?i:l:-1===e.metric&&(e.metric=i)})),e.time=-1===e.time?l:e.time,-1===e.metric?i.push(""):t.filter((function(t,a){if(a>=2){var r=t[e.metric];i.includes(r)||i.push(r)}})),i.shift(),i.sort(),i},t.prototype.createTableColumnHeader=function(e,t,a,r){var n,i=this,l=r.getQueries(),o=r.getMetrics(0);function u(e){var r,n,i;-1!==e&&(null===(r=t)||void 0===r||r.push({name:a[e][0],index:e,metric:(n=a[e][0],i=o,!(void 0===i||i.length<=0)&&-1!==i.findIndex((function(e){return e===n})))}))}var s=this.getKeyColumnIndex(a,r.timeField),g=r.timeField;return-1!==s&&(m(e,"Time","time"),g=a[s][0],t.push({name:g,index:s,metric:!0})),e.columns.shift(),t.shift(),void 0===l||l.length<=0?a.forEach((function(e,t){t!==s&&u(t)})):null===(n=l)||void 0===n||n.forEach((function(e){var t=i.getColumnIndex(a,e);t!==s&&u(t)})),t.forEach((function(t){var r=a[t.index][0];if(r!==g){var n=i.getTypeStr(a[t.index][1]);m(e,r,n)}})),s},t.prototype.createGraphResponse=function(e,t){var a=this,r=[{target:"",datapoints:[{}]}];return r.shift(),t.aggs.forEach((function(n,i){var l=e[n.refId],o={time:-1,metric:-1,data:-1};if(l.length>1){var u=a.extractGraphMetrics(o,l,t,i);u.forEach((function(e){return r.push({target:e,datapoints:[{}]})}));var s=t.aggs.length>1&&-1===o.metric,g=r.findIndex((function(e,t){return""===e.target})),c=s&&-1!==g?g:0;l.filter((function(e,t){if(t>=2){var a=-1!==o.metric?e[o.metric]:"",n=-1!==o.time?e[o.time]:0,i=-1!==o.data?e[o.data]:0,l=u.indexOf(a);r[s?c:-1===l?0:l].datapoints.push([i,1e3*n])}})),r.forEach((function(e){e.datapoints.shift()})),s&&(r[c].target=n.aggTarget)}})),{data:r}},t.prototype.createTableResponse=function(e,t){var a,r=e[1],n=[{name:"",index:-1,metric:!1}],i=[],l={columns:[{text:"Time",type:"time"}],rows:[{}]};i.push(l),a=this.createTableColumnHeader(l,n,r,t);for(var o,u,s=function(t){o=e[t],u=l.rows;var r=[];n.forEach((function(e){e.index===a?r.push(1e3*o[e.index]):r.push(o[e.index])})),u.push(r)},g=2;g<e.length;g++)s(g);return l.rows.shift(),{data:i}},t}(r.DataSourceApi),p=a(0),d=a.n(p),v=a(1),y=v.LegacyForms.FormField,b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onTimeFieldChange=function(e){var a=t.props,r=a.onOptionsChange,n=a.options,i=l(l({},n.jsonData),{timeField:e.target.value});r(l(l({},n),{jsonData:i}))},t}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.options,a=e.onOptionsChange,r=t.jsonData;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"gf-form-group"},d.a.createElement("div",{className:"gf-form"},d.a.createElement(v.DataSourceHttpSettings,{defaultUrl:"http://localhost:10041",dataSourceConfig:t,showAccessOptions:!1,onChange:a}))),d.a.createElement("h3",{className:"page-heading"},"Groonga Details"),d.a.createElement("div",{className:"gf-form-group"},d.a.createElement("div",{className:"gf-form"},d.a.createElement(y,{label:"Time field name",labelWidth:20,inputWidth:20,onChange:this.onTimeFieldChange,value:r.timeField||"",placeholder:""}))))},t}(p.PureComponent),T=v.LegacyForms.FormField,x=v.LegacyForms.Select,E=[{label:"none",value:""},{label:"count",value:"count"},{label:"sum",value:"sum"},{label:"max",value:"max"},{label:"min",value:"min"},{label:"avg",value:"avg"}],S=[{label:"none",value:""},{label:"10s",value:"10s"},{label:"30s",value:"30s"},{label:"1m",value:"1m"},{label:"5m",value:"5m"},{label:"15m",value:"15m"},{label:"30m",value:"30m"},{label:"1h",value:"1h"},{label:"2h",value:"2h"},{label:"6h",value:"6h"},{label:"1d",value:"1d"},{label:"1w",value:"1w"}],C=function(e){function t(t){var a=e.call(this,t)||this;a.onRunQuery=function(){var e=a.query;a.props.onChange(e),a.props.onRunQuery()},a.onTableChange=function(e){var t=e.target.value;a.query.table=t,a.setState({value:t},a.onRunQuery)},a.onQueryTextChange=function(e){var t=e.target.value;a.query.queryText=t,a.setState({value:t},a.onRunQuery)},a.onFilterTextChange=function(e){var t=e.target.value;a.query.filter=t,a.setState({value:t},a.onRunQuery)},a.onSortByTextChange=function(e){var t=e.target.value;a.query.sortby=t,a.setState({value:t},a.onRunQuery)},a.onLimitChange=function(e){var t=parseInt(e.target.value,10);a.query.limit=t,a.setState({value:t},a.onRunQuery)},a.onAggregateKeyStrChange=function(e){var t=e.target.value;a.query.aggregateKeyStr=t,a.setState({value:t},a.onRunQuery)},a.onAggregateOptionChange=function(e){var t=a.query,r=e.value?e.value:"";t.aggregateType=r,a.setState({value:r},a.onRunQuery)},a.onAggregateTargetTextChange=function(e){var t=e.target.value;a.query.aggregateTarget=t,a.setState({value:t},a.onRunQuery)},a.onAggregateIntervalChange=function(e){var t=a.query,r=e.value?e.value:"";t.aggregateInterval=r,a.setState({value:r},a.onRunQuery)};var r=Object.assign({},{queryText:"",interval:"",table:"",column:"",filter:"",sortby:"",limit:1e3,aggregateType:"",aggregateKeyStr:"",aggregateTarget:"",aggregateInterval:""},t.query);return a.query=r,a.state={queryText:r.queryText,interval:r.interval,table:r.table,column:r.column,filter:r.filter,aggregateType:r.aggregateType,aggregateKeyStr:r.aggregateKeyStr,aggregateTarget:r.aggregateTarget,aggregateInterval:r.aggregateInterval,limit:r.limit},a}return i(t,e),t.prototype.render=function(){var e=this,t=this.props.query,a=t.table,r=t.queryText,n=t.filter,i=t.sortby,l=t.limit,o=t.aggregateKeyStr,u=t.aggregateTarget;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"gf-form-group"},d.a.createElement("div",{className:"gf-form-inline"},d.a.createElement("label",{className:"gf-form-label query-keyword width-7"},"FROM"),d.a.createElement("div",{className:"gf-form"},d.a.createElement(T,{labelWidth:8,inputWidth:16,value:a||"",onChange:this.onTableChange,label:"Table Name",tooltip:d.a.createElement(d.a.Fragment,null,"table name string")}))),d.a.createElement("div",{className:"gf-form-inline"},d.a.createElement("label",{className:"gf-form-label query-keyword width-7"},"SELECT"),d.a.createElement("div",{className:"gf-form"},d.a.createElement(T,{labelWidth:8,inputWidth:16,value:r||"",onChange:this.onQueryTextChange,label:"Output columns",tooltip:d.a.createElement(d.a.Fragment,null,"Output columns : comma separated string. ")}),d.a.createElement(T,{labelWidth:8,inputWidth:6,value:l||"",onChange:this.onLimitChange,label:"limit num",tooltip:d.a.createElement(d.a.Fragment,null,"limit num")}))),d.a.createElement("div",{className:"gf-form-inline"},d.a.createElement("label",{className:"gf-form-label query-keyword width-7"},"WHERE"),d.a.createElement("div",{className:"gf-form"},d.a.createElement(T,{labelWidth:8,inputWidth:16,value:n||"",onChange:this.onFilterTextChange,label:"Filter string",tooltip:d.a.createElement(d.a.Fragment,null,"Filter string. ex : action==_id > 10000 && action='deny'")}))),d.a.createElement("div",{className:"gf-form-inline"},d.a.createElement("label",{className:"gf-form-label query-keyword width-7"},"ORDER BY"),d.a.createElement("div",{className:"gf-form"},d.a.createElement(T,{labelWidth:8,inputWidth:16,value:i||"",onChange:this.onSortByTextChange,label:"Sort columns",tooltip:d.a.createElement(d.a.Fragment,null,"Sort by columns. ex : _id,-app")}))),d.a.createElement("div",{className:"gf-form-inline"},d.a.createElement("label",{className:"gf-form-label query-keyword width-7"},"GROUP BY"),d.a.createElement("div",{className:"gf-form"},d.a.createElement(T,{labelWidth:8,inputWidth:12,value:o||"",onChange:this.onAggregateKeyStrChange,label:"Key columns",tooltip:d.a.createElement(d.a.Fragment,null,"Aggregate key columns string. ex : eventtime,action")}),d.a.createElement(T,{labelWidth:4,inputWidth:10,label:"Type",inputEl:d.a.createElement(x,{options:E,value:E.find((function(t){return t.value===(void 0===e.props.query.aggregateType?"none":e.props.query.aggregateType)})),onChange:this.onAggregateOptionChange})}),d.a.createElement(T,{labelWidth:6,inputWidth:8,value:u||"",onChange:this.onAggregateTargetTextChange,label:"Target",tooltip:d.a.createElement(d.a.Fragment,null,"Aggregate target column. ex : _id")}),d.a.createElement(T,{labelWidth:4,inputWidth:10,label:"Interval",inputEl:d.a.createElement(x,{options:S,value:S.find((function(t){return t.value===(void 0===e.props.query.aggregateInterval?"none":e.props.query.aggregateInterval)})),onChange:this.onAggregateIntervalChange})})))))},t}(p.PureComponent);a.d(t,"plugin",(function(){return w}));var w=new r.DataSourcePlugin(f).setConfigEditor(b).setQueryEditor(C)}])}));
//# sourceMappingURL=module.js.map