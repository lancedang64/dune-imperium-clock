import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { MainMenu } from '@/components/MainMenu';
// import { AppMode } from '@/models';

export default function App() {
    // const [mode, setMode] = React.useState<AppMode>('MainMenu');
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <MainMenu />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
