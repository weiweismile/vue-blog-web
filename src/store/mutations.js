import * as types from './mutation-types';

export default{
  [types.SET_INFO](state, data) {
    state.info = data;
  },
};
