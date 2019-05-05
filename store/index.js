import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default () => {
  return new Vuex.Store({
    state : {
      stocks: []
    },
    mutations,
    actions,
    getters
  });
}