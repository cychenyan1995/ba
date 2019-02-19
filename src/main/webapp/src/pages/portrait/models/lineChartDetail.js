import {queryOutTimeData} from '@/services/portrait'

export default {
  namespace : 'lineChartDetail',
  state : {
    xValue : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    yValue : [],
    title: '出行时间分布',
    color:['#37a2da']
  },
  effects : {
    * fetchOutTimeData({ payload },{call, put}){
      const response = yield call(queryOutTimeData,payload);
      yield put({
        type : 'getOutTimeData',
        payload : response,
      })
    }
  },

  reducers : {
    getOutTimeData(state,action){
      return{
        ...state,
        // yValue : action.payload.yValue
        yValue: [100, 600, 300, 500, 200, 1330, 1000]
       }
    }
  }
}
