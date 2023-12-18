import { Text, View, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect }  from 'react';
import { WebView } from 'react-native-webview';




export function Video({id}) {

    
    
    return(
        <View style={{flex: 1, width: 330, left: 7}}>
                <WebView
                    style={ {width: 330} }
                    allowsFullscreenVideo={true}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    androidHardwareAccelerationDisabled={true}
                    source={{uri: 'https://www.youtube.com/embed/' + id }}
                />
        </View>
    )
}