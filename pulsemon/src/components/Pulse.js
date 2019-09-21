import React,{Component} from 'react';
import {View,Text} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class Pulse extends Component{
    constructor(props){
        super(props);
        this.state = { high:98, low:70};
    }
    render(){
        return(
        <View style={{backgroundColor:Colors.dark,flex:1,marginTop:50}}>
            <Text style={{fontSize:30,color:"white",textAlign:"center"}}>HeartRate</Text>
            <View style={{backgroundColor:"#09FAD2", fontSize:25, paddingTop:50 ,alignContent:'center',alignItems:'center', marginTop:20,marginRight:10, height:200, borderRadius:10}}>
                <Text textalign="center" lineHeight={20} fontWeight={"bold"} style={{fontSize:40}}>{this.state.high}</Text>
                <Text style = {{fontSize:25}}>____</Text>
                <Text style ={{fontSize:25}}>{this.state.low}</Text>
            </View>
        </View>
        )
    }
}
