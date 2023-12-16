import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { MenuOption } from '@/components/MenuOption';
// import { AppMode } from '@/models';

export default function App() {
    // const [mode, setMode] = React.useState<AppMode>('MainMenu');
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <MenuOption appMode="DuneUprising" />
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
