import React, { Component } from 'react';
 
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native';
 
import Icon from 'react-native-vector-icons/FontAwesome';

import Container from './accessories/Container';
import Button from './accessories/Button';
import Label from './accessories/Label';

export default class Login extends Component {

    press(){
        
    }

    render() {
      return (
          <ScrollView style={styles.scroll}>
             <Container>
                <Label text="Username or Email" />
                <TextInput
                    style={styles.textInput}
                />
            </Container>
            <Container>
                <Label text="Password" />
                <TextInput
                    secureTextEntry={true}
                    style={styles.textInput}
                />
            </Container>
             
            <Container>
                <Button 
                    label="Forgot Login/Pass"
                    styles={{button: styles.alignRight, label: styles.label}} 
                    onPress={this.press.bind(this)} />
            </Container>

            <View style={styles.footer}>
            <Container>
                <Button 
                    label="Sign In"
                    styles={{button: styles.primaryButton, label: styles.buttonWhiteText}} 
                    onPress={this.press.bind(this)} />
            </Container>
            <Container>
                <Button 
                    label="CANCEL"
                    styles={{label: styles.buttonBlackText}} 
                    onPress={this.press.bind(this)} />
    </Container>
</View>
          </ScrollView>
      );
    }
  }

const styles = StyleSheet.create({
    scroll: {
        padding: 30,
        flexDirection: 'column'
    },
    label: {
        color: '#0d8898',
        fontSize: 20
    },
    alignRight: {
        alignSelf: 'flex-end'
    },
    textInput: {
        height: 80,
        fontSize: 30,
        backgroundColor: '#FFF'
    },

    buttonWhiteText: {
        fontSize: 20,
        color: '#FFF',
    },
    buttonBlackText: {
        fontSize: 20,
        color: '#595856'
    },
    primaryButton: {
        backgroundColor: '#34A853'
    },
    footer: {
       marginTop: 100
    }
});