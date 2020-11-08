import React from 'react';
import { Provider } from 'react-redux';


import { store } from './store/store';
import { AppRouter } from './router/AppRouter';

import { fetchUsers } from './actions/users';

store.dispatch( fetchUsers() );

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
