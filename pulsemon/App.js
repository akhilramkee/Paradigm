/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView
} from 'react-native';

import Profile from './src/components/profile';

import BottomNavigation, {
  FullTab,
  Badge,
} from 'react-native-material-bottom-navigation'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './src/components/Login';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Oxymeter from './src/components/oxyPulse';
import Pulse from './src/components/Pulse';
import Glucose from './src/components/Glucose';


class App extends React.Component{
  
  state = {
    activeTab:'Live',
    loggedIn:true
  }

  tabs = [
    {
      key:'Live',
      label: 'Live',
      barColor: Colors.dark,
      pressColor:'rgba(255,255,255,0,16)',
      icon:'play'
    },
    {
      key:'Person',
      label:'Person',
      barColor:'#345678',
      pressColor:'rgba(255,255,255,0.16)',
      icon:'contacts'
    }
  ]

  state = {
    activeTab:this.tabs[0].key,
    loggedIn:true
  }

  renderIcon = icons => ({isActive}) => (
    <Icon size={24} color="white" name={icons} />
  )

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      showBadge={tab.key === 'Person'}
      renderBadge={() => <Badge>2</Badge>}
      key={tab.key} 
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
      />
  )
  
  render(){
    return (
      <View style={{flex:1,flexDirection:'column',backgroundColor:Colors.dark}}>
    {!this.state.loggedIn &&
      <Login />
    }
    {this.state.loggedIn &&
    <View style={{flex:1}}>
    <ScrollView>
      {this.state.activeTab === 'Live' &&  
          <View style={{backgroundColor:Colors.dark,padding:10,flex:1,flexDirection:'column'}}>
            <Text style={{fontSize:30,textAlign:"center",color:"white",padding:20}}>Oximeter Reading</Text>
            <Oxymeter />
              <View style={{flexDirection:'row'}}>
                <Pulse />
                <Glucose />
              </View>
            </View>
      }
      {this.state.activeTab === 'Person' &&
          <View style={{backgroundColor:Colors.dark,padding:10,flex:1,flexDirection:'column'}}>
            <Profile />
          </View>
      }
      </ScrollView>
          <BottomNavigation
              tabs={this.tabs}
              activeTab={this.state.activeTab}
              onTabPress={newTab => this.setState({activeTab:newTab.key})}
              renderTab={this.renderTab}
              useLayoutAnimation
      />
      </View>
  }
  </View>
  )}
  
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
