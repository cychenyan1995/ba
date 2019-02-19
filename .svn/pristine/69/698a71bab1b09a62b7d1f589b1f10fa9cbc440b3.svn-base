import {queryAgeData} from '@/services/portrait';

export default {
  namespace : 'ratioDetail',
  state : {
    baifenbi : [],
    age : ['55岁以上', '45-54岁', '35-44岁', '25-34岁', '18-24岁'],
    title: '年龄分布',
    color : ['#37a2da']
  },

  effects : {
    * fetchAgeData({ payload }, {call, put}){
      const response = yield call(queryAgeData,payload);
      yield put({
        type : 'getAgeData',
        payload : response
      })
    }
  },

  reducers : {
    getAgeData(state,action){
      return{
        ...state,
        // baifenbi: action.payload.baifenbi,
        baifenbi: action.payload.data,
      }
    }
  }
}
