import React from 'react';
import { View, Text } from 'react-native'

const Header = (props) =>{
    // return <Text>Welcome to the world of React Native</Text>;
    const {customTextStyle} = myTextStyles;
    const {customViewStyle} = myViewStyles;
    return (
        <View style={customViewStyle}>
            <Text style={customTextStyle}>{props.headerText}</Text>
        </View>
        );    

        // <View style={customViewStyle}>
            // <Text style={customTextStyle}>Welcome to the world of React Native</Text>
        // </View>
};

const myTextStyles = {
    customTextStyle: {
        fontSize : 24
    }
};
const myViewStyles = {
    customViewStyle:{
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        shadowColor:'#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        elevation: 2,
        position: 'relative'

    },
    customViewStyle1:{
        backgroundColor:'#00cc99',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 2,
        paddingLeft: 10,
        shadowColor:'#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        elevation: 10,
        position: 'relative'

    }
};

//Make the component available to other parts of the app
export {Header};