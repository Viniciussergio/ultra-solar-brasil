import { combineReducers } from 'redux';

import exampleReducer from './example/reducer';
import sidebarReducer from './sidebar/reducer';

export default combineReducers({
  example: exampleReducer,
  sidebar: sidebarReducer,
});
