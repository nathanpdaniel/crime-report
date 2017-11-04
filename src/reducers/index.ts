import CombineReducers from './combineReducers';

const appReducer = CombineReducers({
  // list of reducers in here.
});

const rootReducer = (state:any, action:any) => {
  if (action.type === `user/USER_LOGOUT`) {
      delete state.auth.profile;
      delete state.user;
      delete state.locations;
  }
  return appReducer(state, action);
};

export default rootReducer;