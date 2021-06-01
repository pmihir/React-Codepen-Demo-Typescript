import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { ActionType } from './action-types';

export const store = createStore(reducers, {}, applyMiddleware(thunk));

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: 'abc',
    type: 'code',
    content: 'var a  = 1;var b = 2;'
  },
});

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: 'xyz',
    type: 'text',
    content: 'var a  = 1;var b = 2;'
  },
});

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'code',
    // eslint-disable-next-line no-template-curly-in-string
    content: 'var a  = 1;var b = 2;'
  },
});

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'text',
    content: 'var a  = 1;var b = 2;'
  },
});
