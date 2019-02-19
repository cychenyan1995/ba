import { parse } from 'url';
import mockjs from 'mockjs';

 const female =mockjs.mock(mockjs.Random.integer(1,100));
 const male = mockjs.mock(mockjs.Random.integer(1,100));
  const getSexData = {
    sexData : [{name: "女", value: female},{name: "男", value: male}]
  }

  const getAgeData = {
    baifenbi : [0.111, 0.333, 0.555, 0.444, 0.777]
  }

  const getDeviceTypeData = {
    data : [
      {value:335, name:'车机'},
      {value:310, name:'GPS'},
      {value:234, name:'后视镜'},
      {value:500, name:'其他'}
    ],
  }

  const getOutTimeData ={
    yValue : [100, 600, 300, 500, 200, 1330, 1000],
  }

export default {
  'GET /portrait/querySexData': getSexData,
  'GET /portrait/queryAgeData': getAgeData,
  'GET /portrait/queryDeviceTypeData': getDeviceTypeData,
  'GET /portrait/queryOutTimeData': getOutTimeData,
};
