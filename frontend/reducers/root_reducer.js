import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import routesReducer from './routes_reducer';
import dashboardReducer from './dashboard_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  routes: routesReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;
