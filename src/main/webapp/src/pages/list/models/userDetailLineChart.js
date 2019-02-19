import {queryOutTimeData} from '@/services/portrait'

export default {
  namespace : 'userDetailLineChart',
  state : {
    xValue : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    yValue : [],
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
        yValue : action.payload.yValue
       }
    }
  }
}
