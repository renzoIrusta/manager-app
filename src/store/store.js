import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';
import { calendarReducer } from '../reducers/calendarReducer';
import { customersReducer } from '../reducers/customersReducer';
import { uiReducer } from '../reducers/uiReducer';
import { usersReducer } from '../reducers/usersReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    users: usersReducer,
    calendar: calendarReducer,
    customers: customersReducer,
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);