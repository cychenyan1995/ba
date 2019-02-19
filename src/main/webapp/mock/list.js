import { parse } from 'url';
import mockjs from 'mockjs';

// mock userList
let userList = [];
// 用户行为轨迹
let operationList = [];

for (let i = 0; i < 10; i++) {
  userList.push(mockjs.mock({
    key: mockjs.Random.guid(),
    id: mockjs.Random.integer(13000,99999),
    mobileNo: mockjs.Random.integer(13000000000,19999999999),
    registerTime: mockjs.Random.date(),
    name: mockjs.Random.cname(),
    idNumber: mockjs.Random.id(),
    gender: mockjs.Random.integer(0, 1),
    province: mockjs.Random.region(),
    city: mockjs.Random.city(),
    licenseNumber: mockjs.Random.integer(10000,99999),
    type: mockjs.Random.cname(),
    programTime: mockjs.Random.float(10, 100, 1, 1),
    terminalTime: mockjs.Random.float(10, 100, 1, 1),
    terminalSumFlow: mockjs.Random.float(10, 100, 1, 1),
    terminalDailyFlow: mockjs.Random.float(1, 10, 1, 2),
    expiry: mockjs.Random.date(),
  }));
}
function getList(req, res, u) {
  let url = u;
  if (!url || Object.prototype.toString.call(url) !== '[object String]') {
    url = req.url; // eslint-disable-line
  }

  const params = parse(url, true).query;

  let dataSource = userList;

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

  /* const result = {
    list: dataSource,
    pagination: {
      total: dataSource.length,
      pageSize,
      current: parseInt(params.currentPage, 10) || 1,
    },
  }; */
  const result = {
    list: dataSource,
    total: dataSource.length,
    pageSize,
    current: parseInt(params.currentPage, 10) || 1,
  };

  return res.json(result);
}

for (let i = 0; i < 10; i++) {
  operationList.push(mockjs.mock({
    key: mockjs.Random.guid(),
    date: mockjs.Random.date('yyyy-MM-dd'),
    time:mockjs.Random.time(),
    action:'评论车头条“深圳宣布执行国六标准”',
  }));
}

function getOperationList(req, res, u) {
  let url = u;
  if (!url || Object.prototype.toString.call(url) !== '[object String]') {
    url = req.url; // eslint-disable-line
  }

  const params = parse(url, true).query;

  let dataSource = operationList;

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
    total: dataSource.length,
    pageSize,
    current: parseInt(params.currentPage, 10) || 1,
  };

  return res.json(result);
}

export default {
  'GET /list/queryList': getList,
  'GET /list/queryOperationList': getOperationList,
};
