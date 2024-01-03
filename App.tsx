import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { MainMenu } from '@/components/core/MainMenu';
import { BACKGROUND_COLOR } from '@/styling';

export default function App() {
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
        backgroundColor: BACKGROUND_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
