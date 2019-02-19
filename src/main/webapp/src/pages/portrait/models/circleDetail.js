import {queryDeviceTypeData} from '@/services/portrait';

export default {
  namespace : 'circleDetail',
  state : {
    legendData : [],
    data : [],
    title: '设备类型分布',
    color : ['#e062ae','#37a2da','#67e0e3','#ffdb5c','#ff9f7f']
  },

  effects : {
    * fetchDeviceTypeData({ payload }, {call, put}){
      const response = yield call(queryDeviceTypeData,payload);
      yield put({
        type : 'getDeviceTypeData',
        payload : response
      })
    }
  },

  reducers : {
    getDeviceTypeData(state,action){
      let data = action.payload.data;
      let legendData = [];
      data.map(item => {
        legendData.push(item.name);
      })
      return{
        ...state,
        data: action.payload.data,
        legendData: legendData
      }
    }
  }
}
