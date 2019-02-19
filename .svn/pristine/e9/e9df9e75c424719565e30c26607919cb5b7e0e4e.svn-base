// import {notification} from "antd/lib/index";
import {queryOperationList,queryDeviceEventList,queryProgramEventList} from '@/services/list';

export default {
  namespace: 'userListDetail',

  state: {
    detail:null,
    list: [],
    total: 0,
    filters:{},
    currentPage:1,
    pageSize:10
  },
  effects: {
    * fetchDetail({payload}, {call, put}) {
      const response = yield call(queryOperationList, payload);
      yield put({
        type: 'getDetail',
        payload: response,
      });
    },
    * fetchDeviceList({ payload }, {call, put}){
      const response = yield call(queryDeviceEventList,payload);
      yield put({
        type : 'getDeviceList',
        payload : response
      })
    },
    * fetchProgramList({ payload }, {call, put}){
      const response = yield call(queryProgramEventList,payload);
      yield put({
        type : 'getProgramList',
        payload : response
      })
    }
  },
  reducers: {
    getDetail(state,action){
      return{
        ...state,
        detail: action.payload.data.user,
        current:action.payload.current,
      }
    },
    getDeviceList(state,action){
      return{
        ...state,
        list: action.payload.data,
        total: action.payload.pageTotal,
        current:action.payload.current,
      }
    },
    getProgramList(state,action){
      return{
        ...state,
        list: action.payload.data,
        total: action.payload.pageTotal,
        current:action.payload.current,
      }
    },
    getFilters(state,action){
      return {
        ...state,
        filters: action.payload
      }
    }
  },
};
