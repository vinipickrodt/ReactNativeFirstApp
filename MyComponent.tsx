import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button,
    ToastAndroid,
    Alert
} from 'react-native';

export default class MyComponent extends React.Component {
    render() {
        return (
            <View>
                <Button title="Show Toast" onPress={(e) => { ToastAndroid.show('Hello React!', ToastAndroid.SHORT); }} />
            </View>
        );
    }
}

