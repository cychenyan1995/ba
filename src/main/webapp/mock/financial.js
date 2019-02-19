import { parse } from 'url';
import mockjs from 'mockjs';

// mock tableListDataSource
let financialDataSource = [];

for (let i = 0; i < 86; i++) {
  financialDataSource.push(mockjs.mock({
    key: mockjs.Random.guid(),
    month: mockjs.Random.date(),
    deviceName: mockjs.Random.cname(),
    merchantGroup: mockjs.Random.cname(),
    serviceName: mockjs.Random.cname(),
    serviceType: mockjs.Random.integer(0, 1),
  }));
}

function getFinancial(req, res, u) {
  let url = u;
  if (!url || Object.prototype.toString.call(url) !== '[object String]') {
    url = req.url; // eslint-disable-line
  }

  const params = parse(url, true).query;

  let dataSource = financialDataSource;

  if (params.sorter) {
    const s = params.sorter.split('_');
    dataSource = dataSource.sort((prev, next) => {
      if (s[1] === 'descend') {
        return next[s[0]] - prev[s[0]];
      }
      return prev[s[0]] - next[s[0]];
    });
  }

  if (params.status) {
    const status = params.status.split(',');
    let filterDataSource = [];
    status.forEach(s => {
      filterDataSource = filterDataSource.concat(
        dataSource.filter(data => parseInt(data.status, 10) === parseInt(s[0], 10))
      );
    });
    dataSource = filterDataSource;
  }

  if (params.name) {
    dataSource = dataSource.filter(data => data.name.indexOf(params.name) > -1);
  }

  let pageSize = 10;
  if (params.pageSize) {
    pageSize = params.pageSize * 1;
  }

  const result = {
    list: dataSource,
    pagination: {
      total: dataSource.length,
      pageSize,
      current: parseInt(params.currentPage, 10) || 1,
    },
  };

  return res.json(result);
}

function postFinancial(req, res, u, b) {

  let url = u;
  if (!url || Object.prototype.toString.call(url) !== '[object String]') {
    url = req.url; // eslint-disable-line
  }

  const body = (b && b.body) || req.body;
  const { method, key, keys } = body;
  console.log('demo user:' + JSON.stringify(body));
  switch (method) {
    /* eslint no-case-declarations:0 */
    case 'delete':
      // financialDataSource = financialDataSource.filter(item => key.indexOf(item.key) === -1);
      let ids = keys.split(',');

      // 单项删除
      // financialDataSource = financialDataSource.filter(u => u.key !== key);

      // 支持批量删除
      financialDataSource = financialDataSource.filter(u => !ids.includes(u.key));

      break;
    case 'create':
      const { month, deviceName, merchantGroup, serviceName, serviceType } = body;
      const i = Math.ceil(Math.random() * 10000);
      financialDataSource.unshift({
        key: mockjs.Random.guid(),
        month: month,
        deviceName: deviceName,
        merchantGroup:merchantGroup,
        serviceName: serviceName,
        serviceType: serviceType,
      });
      break;
    case 'update':
      const { values } = body;
      financialDataSource = financialDataSource.map(item => {
        if (item.key === key) {
          Object.assign(item, values);
          return item;
        }
        return item;
      });
      break;
    default:
      break;
  }

  const result = {
    list: financialDataSource,
    pagination: {
      total: financialDataSource.length,
    },
  };

  return res.json(result);
}

export default {
  'GET /api/demo/financial': getFinancial,
  'POST /api/demo/financial': postFinancial,
};
