import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { author, notifier } from '../../ducks';

const getReducer = () => {
  return combineReducers({
    author,
    notifier,
    form: formReducer,
  });
};

export default getReducer;
