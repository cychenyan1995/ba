import { routerRedux } from 'dva/router';
import { message } from 'antd';
import { queryUser, getUser, removeUser,addUser,updateUser } from '@/services/demo';

export default {

  // models 命名空间,调用action的时候需要： dispatch({type: 'demoUser/reducers或者是effects',payload: params});
  // @connect 时候参数state, mapStateToProps({ demoUser(命名空间名字对应) })
  namespace: 'demoUser',

  // State 表示 Model 的状态数据
  state: {
    data: {
      // 数据列表
      list: [],
      // 分页信息
      pagination: {},
      // 数据过滤条件(搜索条件)
      filters: {
        text: '',
        name: '',
        age: '',
        addr: '',
        total: 0,
        page: 1
      }
    },
  },

  // Reducer 处理State值,计算函数
  reducers: {
    setFilter(state, action) {
      // console.log("filter reducers "+ JSON.stringify(action.payload));
      return {
        ...state,
        data: action.payload,
      };
    },
    setHighfilter(state, action) {
      console.log("setHighfilter reducers "+ JSON.stringify(action.payload));
      return {
        ...state,
        data: action.payload,
      };
    },
    list(state, action) {
      // console.log(action.payload);
      action.payload = {
        ...action.payload,
        filters: state.data.filters
      }

      return {
        ...state,
        data: action.payload,
      };
    },
  },

  // Effect 被称为副作用，在我们的应用中，最常见的就是异步操作
  effects: {
    *fetch({ payload }, { call, put }) {
      let response = yield call(queryUser, payload);
      yield put({
        type: 'list',
        payload: response,
      });
    },
    *add({ payload, callback }, { call, put }) {
      const response = yield call(addUser, payload);
      yield put({
        type: 'list',
        payload: response,
      });
      if (callback) callback();
    },
    *remove({ payload, callback }, { call, put }) {
      const response = yield call(removeUser, payload);
      yield put({
        type: 'list',
        payload: response,
      });
      if (callback) callback();
    },
    *update({ payload, callback }, { call, put }) {
      const response = yield call(updateUser, payload);
      yield put({
        type: 'list',
        payload: response,
      });
      if (callback) callback();
    }
  },

  // Subscriptions 是一种从源获取数据的方法
  subscriptions: {},
};
