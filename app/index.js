import React from 'react';
import ReactDOM from 'react-dom';
import Index from './view/index.jsx';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
    <AppContainer>
        <BrowserRouter>
            <Route path="/" component={Index} />
        </BrowserRouter>
    </AppContainer>,
    document.getElementById('app'));

// webpack Hot Module Replacement API
if (module.hot) {
    // keep in mind - here you are configuring HMR to accept CHILDREN MODULE
    // while `hot` would configure HMR for the CURRENT module
    module.hot.accept('./view/index.jsx', () => {
        // if you are using harmony modules ({modules:false})
        render(Index)
        // in all other cases - re-require App manually
        render(require('./view/index.jsx'))
    })
}