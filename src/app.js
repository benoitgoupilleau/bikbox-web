import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Modal from 'react-modal';
import { PersistGate } from 'redux-persist/lib/integration/react';
import AppRouter from './routers/AppRouter';
import { store, persistor } from './store/store';

import 'react-datepicker/dist/react-datepicker-cssmodules.css'
Modal.setAppElement('#app')

const jsx = (
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
    </PersistGate>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
