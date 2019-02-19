import {querySexData} from '@/services/portrait';

export default {
  namespace : 'pieDetail',
  state : {
    legendData : ["女", "男"],
    seriesData : [],
    title: '性别分布',
    color :  ['#e062ae','#37a2da']
  },

  effects : {
    * fetchSexData({ payload }, {call, put}){
      const response = yield call(querySexData,payload);
      yield put({
        type : 'getSexData',
        payload : response
      })
    }
  },

  reducers : {
    getSexData(state,action){
      return{
        ...state,
       // seriesData: action.payload.sexData,
       seriesData: action.payload.data,
      }
    }
  }
}
