const template =
  '<h3>Performance test {{brand}} {{resolution}} {{env}} {{date}}</h3>\n' +
  '\n' +
  '<h4>{{name1}}</h4>\n' +
  '\n' +
  '<table>\n' +
  '    <tr>\n' +
  '        <td>Events count</td>\n' +
  '        {{#eventsCount1}}\n' +
  '        <td>{{.}}</td>\n' +
  '        {{/eventsCount1}}\n' +
  '    </tr>\n' +
  '</table>\n' +
  '<table>\n' +
  '    {{#category1}}\n' +
  '    <tr>\n' +
  '        <td>{{name}}</td>\n' +
  '        {{#values}}\n' +
  '        <td>{{.}}</td>\n' +
  '        {{/values}}\n' +
  '    </tr>\n' +
  '    {{/category1}}\n' +
  '</table>\n' +
  '<table>\n' +
  '    {{#audit1}}\n' +
  '    <tr>\n' +
  '        <td>{{name}}</td>\n' +
  '        {{#values}}\n' +
  '        <td>{{.}}</td>\n' +
  '        {{/values}}\n' +
  '    </tr>\n' +
  '    {{/audit1}}\n' +
  '</table>\n' +
  '\n' +
  '<p>Lighthouse audits - average</p>\n' +
  '<table>\n' +
  '    {{#average1}}\n' +
  '    <tr>\n' +
  '        <td>{{name}}</td>\n' +
  '        {{#values}}\n' +
  '        <td>{{.}}</td>\n' +
  '        {{/values}}\n' +
  '    </tr>\n' +
  '    {{/average1}}\n' +
  '</table>\n' +
  '\n' +
  '<p>Lighthouse audits - median</p>\n' +
  '<table>\n' +
  '    {{#median1}}\n' +
  '    <tr>\n' +
  '        <td>{{name}}</td>\n' +
  '        {{#values}}\n' +
  '        <td>{{.}}</td>\n' +
  '        {{/values}}\n' +
  '    </tr>\n' +
  '   {{/median1}}\n' +
  '</table>' +
  '<table>\n' +
  '    <tr>\n' +
  '        <td>Time to display coefficients in viewport</td>\n' +
  '        {{#coefDisplayingTime1}}\n' +
  '        <td>{{.}}</td>\n' +
  '        {{/coefDisplayingTime1}}\n' +
  '    </tr>\n' +
  '</table>\n' +
  '<table>\n' +
  '    <tr>\n' +
  '        <td>Time to display coefficients in viewport - average</td>\n' +
  '        {{#coefAverage1}}\n' +
  '        <td>{{.}}</td>\n' +
  '        {{/coefAverage1}}\n' +
  '    </tr>\n' +
  '</table>\n' +
  '<table>\n' +
  '    <tr>\n' +
  '        <td>Time to display coefficients in viewport - mediana</td>\n' +
  '        {{#coefMedian1}}\n' +
  '        <td>{{.}}</td>\n' +
  '        {{/coefMedian1}}\n' +
  '    </tr>\n' +
  '</table>\n' +
  ' {{#screenshotsSrc1}}\n' +
  '<img src="{{.}}">' +
  '{{/screenshotsSrc1}}\n' +
  '<h4>{{name2}}</h4>\n' +
  '\n' +
  '<table>\n' +
  '    <tr>\n' +
  '        <td>Events count</td>\n' +
  '        {{#eventsCount2}}\n' +
  '        <td>{{.}}</td>\n' +
  '        {{/eventsCount2}}\n' +
  '    </tr>\n' +
  '</table>\n' +
  '<table>\n' +
  '    {{#category2}}\n' +
  '    <tr>\n' +
  '        <td>{{name}}</td>\n' +
  '        {{#values}}\n' +
  '        <td>{{.}}</td>\n' +
  '        {{/values}}\n' +
  '    </tr>\n' +
  '    {{/category2}}\n' +
  '</table>\n' +
  '<table>\n' +
  '    {{#audit2}}\n' +
  '    <tr>\n' +
  '        <td>{{name}}</td>\n' +
  '        {{#values}}\n' +
  '        <td>{{.}}</td>\n' +
  '        {{/values}}\n' +
  '    </tr>\n' +
  '    {{/audit2}}\n' +
  '</table>\n' +
  '<p>Lighthouse audits - average</p>\n' +
  '<table>\n' +
  '    {{#average2}}\n' +
  '    <tr>\n' +
  '        <td>{{name}}</td>\n' +
  '        {{#values}}\n' +
  '        <td>{{.}}</td>\n' +
  '        {{/values}}\n' +
  '    </tr>\n' +
  '    {{/average2}}\n' +
  '</table>\n' +
  '\n' +
  '<p>Lighthouse audits - median</p>\n' +
  '<table>\n' +
  '    {{#median2}}\n' +
  '    <tr>\n' +
  '        <td>{{name}}</td>\n' +
  '        {{#values}}\n' +
  '        <td>{{.}}</td>\n' +
  '        {{/values}}\n' +
  '    </tr>\n' +
  '    {{/median2}}\n' +
  '</table>' +
  '<table>\n' +
  '    <tr>\n' +
  '        <td>Time to display coefficients in viewport</td>\n' +
  '        {{#coefDisplayingTime2}}\n' +
  '        <td>{{.}}</td>\n' +
  '        {{/coefDisplayingTime2}}\n' +
  '    </tr>\n' +
  '</table>\n' +
  '<table>\n' +
  '    <tr>\n' +
  '        <td>Time to display coefficients in viewport - average</td>\n' +
  '        {{#coefAverage2}}\n' +
  '        <td>{{.}}</td>\n' +
  '        {{/coefAverage2}}\n' +
  '    </tr>\n' +
  '</table>\n' +
  '<table>\n' +
  '    <tr>\n' +
  '        <td>Time to display coefficients in viewport - mediana</td>\n' +
  '        {{#coefMedian2}}\n' +
  '        <td>{{.}}</td>\n' +
  '        {{/coefMedian2}}\n' +
  '    </tr>\n' +
  '</table>\n' +
  ' {{#screenshotsSrc2}}\n' +
  '<img src="{{.}}">' +
  '{{/screenshotsSrc2}}\n' +
  '<h4>{{name3}}</h4>\n' +
  '<table>\n' +
  '    <tr>\n' +
  '        <td>Events count</td>\n' +
  '        {{#eventsCount3}}\n' +
  '        <td>{{.}}</td>\n' +
  '        {{/eventsCount3}}\n' +
  '    </tr>\n' +
  '</table>\n' +
  '<table>\n' +
  '    {{#category3}}\n' +
  '    <tr>\n' +
  '        <td>{{name}}</td>\n' +
  '        {{#values}}\n' +
  '        <td>{{.}}</td>\n' +
  '        {{/values}}\n' +
  '    </tr>\n' +
  '    {{/category3}}\n' +
  '</table>\n' +
  '<table>\n' +
  '    {{#audit3}}\n' +
  '    <tr>\n' +
  '        <td>{{name}}</td>\n' +
  '        {{#values}}\n' +
  '        <td>{{.}}</td>\n' +
  '        {{/values}}\n' +
  '    </tr>\n' +
  '    {{/audit3}}\n' +
  '</table>\n' +
  '\n' +
  '<p>Lighthouse audits - average</p>\n' +
  '<table>\n' +
  '    {{#average3}}\n' +
  '    <tr>\n' +
  '        <td>{{name}}</td>\n' +
  '        {{#values}}\n' +
  '        <td>{{.}}</td>\n' +
  '        {{/values}}\n' +
  '    </tr>\n' +
  '    {{/average3}}\n' +
  '</table>\n' +
  '\n' +
  '<p>Lighthouse audits - median</p>\n' +
  '<table>\n' +
  '    {{#median3}}\n' +
  '    <tr>\n' +
  '        <td>{{name}}</td>\n' +
  '        {{#values}}\n' +
  '        <td>{{.}}</td>\n' +
  '        {{/values}}\n' +
  '    </tr>\n' +
  '    {{/median3}}\n' +
  '</table>' +
  '<table>\n' +
  '    <tr>\n' +
  '        <td>Time to display coefficients in viewport</td>\n' +
  '        {{#coefDisplayingTime3}}\n' +
  '        <td>{{.}}</td>\n' +
  '        {{/coefDisplayingTime3}}\n' +
  '    </tr>\n' +
  '</table>\n' +
  '<table>\n' +
  '    <tr>\n' +
  '        <td>Time to display coefficients in viewport - average</td>\n' +
  '        {{#coefAverage3}}\n' +
  '        <td>{{.}}</td>\n' +
  '        {{/coefAverage3}}\n' +
  '    </tr>\n' +
  '</table>\n' +
  '<table>\n' +
  '    <tr>\n' +
  '        <td>Time to display coefficients in viewport - mediana</td>\n' +
  '        {{#coefMedian3}}\n' +
  '        <td>{{.}}</td>\n' +
  '        {{/coefMedian3}}\n' +
  '    </tr>\n' +
  '</table>\n' +
  ' {{#screenshotsSrc3}}\n' +
  '<img src="{{.}}">' +
  '{{/screenshotsSrc3}}\n';

module.exports = template;
