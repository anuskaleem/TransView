import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/configureStore';
import AppNavigator from './navigator'

export default class App extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        );
    }
}