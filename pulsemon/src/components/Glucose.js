import React,{Component} from 'react';
import {View, Dimensions, Text} from 'react-native';
import { LineChart, Grid } from 'react-native-svg-charts';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class Glucose extends Component{
    constructor(props){
        super(props);
        this.state={ data :[ 50, 10, 40, 95 ], Level:'#09FAD2'};
    }
    render(){
        return(
        <View style={{backgroundColor:Colors.dark,flex:1,marginTop:50}}>
            <Text style={{fontSize:30,color:"white",textAlign:"center"}}>Glucose</Text>    
           <View style={{backgroundColor:this.state.Level,elevation:10, shadowColor: '#000',shadowOffset: { width: 0, height: 1 },shadowOpacity: 0.8,shadowRadius: 2, borderRadius:10 ,marginTop:20}}>
                <LineChart
                            style={{ height: 200 }}
                            data={ this.state.data }
                            svg={{ stroke: 'rgb(134, 65, 244)' }}
                            animate={true}
                            animationDuration={300}
                            contentInset={{ top: 20, bottom: 20 }}
                    >
                </LineChart>
            </View>
        </View>
        )
    }
}