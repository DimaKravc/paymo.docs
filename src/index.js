import React from 'react';
import ReactDOM from 'react-dom';

import {AppContainer} from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR


import root from './js/router/Root';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer className="root__inner">
            <Component className="root__inner" />
        </AppContainer>
        ,
        document.getElementById('root')
    );
};

render(root);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept(root, () => {
        render(root)
    });
}

