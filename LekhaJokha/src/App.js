import React , {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import firebase from '@firebase/app';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount(){
        // Initialize Firebase
        require('firebase/auth');
        var config = {
            apiKey: 'AIzaSyDLgJZ3xW7z5Bx043qEzt_T-PWFZ9TaGLk',
            authDomain: 'lekha-jokha-77f5d.firebaseapp.com',
            databaseURL: 'https://lekha-jokha-77f5d.firebaseio.com',
            projectId: 'lekha-jokha-77f5d',
            storageBucket: '',
            messagingSenderId: '374362239393',
            appId: '1:374362239393:web:5efc863e38dfe43a'
    };
    firebase.initializeApp(config);
    }

    render(){
        return(
            <Provider store = {createStore(reducers)}>
                <LoginForm/>
            </Provider>    
        );
    }

}

export default App;