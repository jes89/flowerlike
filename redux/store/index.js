// import { createStore, compose, applyMiddleware } from 'redux';
// 
// import reducers from '../reducers';

// export default createStore(
//     reducers,
//     {},
//     compose(
//         applyMiddleware(thunk)
//     )
// );

import { combineReducers, compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import sUser from '../actions'

export default createStore(
    combineReducers({
        sUser,
        // 다른 리듀서를 만들게되면 여기에 넣어줌..
    }),
    {},
    compose(
        applyMiddleware(thunk)
    )
);
  