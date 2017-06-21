import { combineReducers } from 'redux';
import routesReducer from './routes_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
  routes: routesReducer,
  errors: errorsReducer,
  session: sessionReducer,
});

export default rootReducer;
