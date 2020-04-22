import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import Header from './src/Component/Header';
import LoginForm from './src/LoginForm';
import Button from './src/Component/Button';
import CardSection from './src/Component/CardSection';
import Spinner from './src/Component/Spinner';

export default class App extends Component {
  state = { loggedIn: null };
  UNSAFE_componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyBGGk-Jzh0FiLS-qUd8WF19jB0yYah4w4Q',
    authDomain: 'authenticationproject-a2be6.firebaseapp.com',
    databaseURL: 'https://authenticationproject-a2be6.firebaseio.com',
    projectId: 'authenticationproject-a2be6',
    storageBucket: 'authenticationproject-a2be6.appspot.com',
    messagingSenderId: '1097688102373',
    appId: '1:1097688102373:web:7fd31c83c94ca3e9726b0c',
    measurementId: 'G-KWKQQZMYRF'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  clickLogout() {
    firebase.auth().signOut();
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={this.clickLogout.bind(this)}> CIKIS </Button>
        </CardSection>
        );
        case false:
          return (
            <LoginForm />
          );
    
      default:
        return (
          <View>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Giris Ekrani" />
        {this.renderContent()}
       </View>
    );
  }
}

