import React,{Component} from 'react';
import {View, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import socketIOClient from 'socket.io-client';

export default class Oxymeter extends Component{
    constructor(props){
        super(props);
        this.state={ data :[89,90,91,92,90,91,92 ],
            endpoint: "http://192.168.225.244:4001",
            Level:'#09FAD2'
        };
    }

    componentDidMount(){
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("Oximeter",data=>this.setState({
            data:data
        },()=>{
                if(this.state.data[6] > 95 || this.state.data[6] < 89 ){
                    this.setState({
                        Level:'#FF4D00'
                    })
                }else{
                    this.setState({
                        Level:'#09FAD2'
                    })
                }
        }));
        
    }

    render(){

        const data = {
            datasets: [{
              data: this.state.data,
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,// optional
              strokeWidth: 2 // optional
            }]
          }

          const chartConfig = {
            borderRadius:10,
            backgroundGradientFrom: this.state.Level,
            backgroundGradientTo: '#FFFFFF',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            strokeWidth: 2 // optional, default 3
          }

        return(
           <View style={{backgroundColor:this.state.Level,elevation:10, shadowColor: '#000',shadowOffset: { width: 0, height: 1 },shadowOpacity: 0.8,shadowRadius: 2, borderRadius:10  }}>
                    <LineChart
                            height={300}
                            data={data}
                            width={Dimensions.get('window').width-20}
                            chartConfig={chartConfig}
                    />
            </View>
        )
    }
}


