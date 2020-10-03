import React from 'react';
import Buy from './classcomponents/Buy';
import Quantity from './classcomponents/Quantity';
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {

    console.log(store.getState());

    return (
        <Provider store={store}>
            <div className="App">
                <Quantity />
                <hr />
                <Buy />
            </div>
        </Provider >
    );
}

export default App;
