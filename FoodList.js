import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
    StatusBar, 
    Modal,
} from 'react-native';
import { MainContext } from './App';
//import px,{px2dp} from 'react-native-px2dp';

function FoodList() {
    const mc = React.useContext(MainContext);
        let listArr = [];
        // Current date
        let currentDate = new Date();

        if (mc.state.foodList.length>0){
            for( let i =0; i<mc.state.foodList.length; i++){
                // Best before date of item i
                let bbDate = new Date(mc.state.foodList[i].bbDate);
                var differenceTime = bbDate.getTime() - currentDate.getTime();
                var differenceDay = (differenceTime / (1000 * 3600 * 24)).toFixed(0) >>> 0;

                let item = (
                <View key = {i}>
                  <View style={[styles.flexs, { height: 80}]}>
                  <Image style={[styles.foodImage]} source={{uri: mc.state.foodList[i].imageUrl}}></Image>
                  <Text style={[styles.TitleName]}>{mc.state.foodList[i].foodName}</Text>
                  <Text style={[styles.Number]}>{differenceDay}</Text>
                  <Text style={[styles.Days]}>{mc.state.foodList[i].number=="1"?"day":"days"}</Text>
                  <Image style={[styles.Process]} source={require('./src/img/png/进度条.png')}></Image>

                    {/* <View style={styles.container}>
                    <View style={[styles.pre]}>
                    <View style={[styles.preOisn, { width: px2dp(213) * (80 / 100) }]}></View>
                    <View style={[styles.preMain,{justifyContent: 'flex-end'}]}>
                    <Text style={{ color: '#FF0000', fontSize: px2dp(14)}}>{80}%</Text>
                    </View>
                    </View>
                    </View> */}

                  </View>
                </View>
                )
                listArr.push(item)
        }
        } else {
            listArr = <Text>nothing here</Text>
        }

    return (
        <View>
            {listArr} 
        </View>
    )

}



const styles = StyleSheet.create({

    foodImage: {
        display: 'flex',
        position: 'absolute',
        left: 10,
        width: 50, height: 50, resizeMode: 'contain'
    },

    flexs: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    TitleName: {
        position: 'absolute',
        left: 100,
        width: 300,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333333',
        height: 50
    },

    Number: {
        position: 'absolute',
        right: 20,
        fontWeight: 'bold',
        fontSize: 30,
        color: '#333333',
        marginTop: 20,
        height: 70,
        width: 100
    },

    Days: {
        position: 'absolute',
        right: 0,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#233333',
        marginTop: 10,
        height: 50,
        width: 80,
    },

    Process: {
        right: 30, width: 250, height: 50, top: 30, resizeMode: 'contain',
        position: 'absolute'
    },

    


    // container: {
    //     flex: 1,
    //     backgroundColor: '#333333',
    // },
    // pre: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     // borderWidth: Pixel,
    //     borderColor: '#FFB1B1',
    //     width: px2dp(213),
    //     height: px2dp(20),
    //     borderRadius: px2dp(20),
    //     paddingLeft: px2dp(10),
    //     paddingRight: px2dp(10),
    //     marginBottom: px2dp(10),
    //     marginTop: px2dp(10),
    //     position: 'relative',
    //     overflow: 'hidden',
    // },
    // preMain: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     height: 20,
    //     position: 'relative',
    //     flex: 1,
    //     zIndex: 9
    // },
    // preOisn: {
    //     position: 'absolute',
    //     height: px2dp(20),
    //     backgroundColor: '#FFCFCF',
    //     borderBottomLeftRadius: px2dp(2000),
    //     borderTopLeftRadius: px2dp(2000),
    //     zIndex: 8
    // },


})


export default FoodList;