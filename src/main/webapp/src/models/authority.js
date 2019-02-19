import { getAuthority } from '@/services/authority';

export default {
  namespace: 'authority',

  state: {
    dynamicMenu: [],
    dynamicRoute: []
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(getAuthority, payload);
      yield put({
        type: 'global/saveAuthority',
        payload: response,
      });
    }
  }
};
