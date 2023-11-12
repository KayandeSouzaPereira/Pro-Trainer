import { Text, View, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect }  from 'react';
import { WebView } from 'react-native-webview';




export function Video({id}) {

    
    
    return(
        <View style={{flex: 1, width: 300, height: 200}}>
                <WebView
                    style={ {} }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    androidHardwareAccelerationDisabled={true}
                    source={{uri: '' }}
                />
        </View>
    )
}