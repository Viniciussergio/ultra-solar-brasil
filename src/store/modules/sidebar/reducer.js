import * as types from '../types';

const initialState = {
  toggleSidebar: false,
};

export default function sidebarReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.TOGGLE_SIDEBAR_SUCCESS: {
      const newState = { ...state };
      newState.toggleSidebar = !newState.toggleSidebar;
      return newState;
    }

    default: {
      return state;
    }
  }
}
