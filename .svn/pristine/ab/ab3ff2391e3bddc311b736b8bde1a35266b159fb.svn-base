import {queryList} from '@/services/list';

export default {
  namespace : 'userListTable',
  state : {
    list: [],
    total: 0,
    filters:{},
    search:{},
    showSearch:false
  },

  effects : {
    * fetchList({ payload }, {call, put}){
      const response = yield call(queryList,payload);
      yield put({
        type : 'getList',
        payload : response
      })
    }
  },

  reducers : {
    getList(state,action){
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
    },
    search(state, action) {
      return {
        ...state,
        search: action.payload
      };
    },
    showSearch(state, action) {
      return {
        ...state,
        showSearch: action.payload
      };
    }
  }
}
