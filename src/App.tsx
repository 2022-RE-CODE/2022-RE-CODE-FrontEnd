import React, { useEffect } from 'react';
import './App.css';
import AppRoutes from './routers/router';
import rootReducer from './redux';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
const store = createStore(rootReducer);

function App() {

    useEffect(() => {
        document.title = 'Re:CODE';
    }, []);

    return (
        <div className="app">
            <Provider store={store}>
                <AppRoutes />
            </Provider>
        </div>
    );
}

export default App;
