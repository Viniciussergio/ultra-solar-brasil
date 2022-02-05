import * as types from '../types';

const initialState = {
  buttonClicked: false,
};

export default function exampleReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.BUTTON_CLICKED_SUCCESS: {
      const newState = { ...state };
      newState.buttonClicked = !newState.buttonClicked;
      return newState;
    }

    case types.BUTTON_CLICKED_FAILURE: {
      return state;
    }

    case types.BUTTON_CLICKED_REQUEST: {
      return state;
    }

    default: {
      return state;
    }
  }
}
