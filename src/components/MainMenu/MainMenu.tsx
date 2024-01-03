import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './MainMenu.styles';
import { MenuOption } from './MenuOption';
import { GameView } from '../GameView';

import { AppMode } from '@/models';

interface ComponentProps {}

export const MainMenu = (props: ComponentProps) => {
    const [mode, setMode] = React.useState<AppMode>('MainMenu');

    return (
        <GameView onPressBack={() => undefined}>
            <MenuOption appMode="MainMenu" onPress={() => setMode('MainMenu')} />
        </GameView>
    );

    if (mode === 'DuneUprising') {
        return <MenuOption appMode="MainMenu" onPress={() => setMode('MainMenu')} />;
    }

    // Default render being MainMenu
    return (
        <View style={styles.component}>
            <Text style={styles.credit}>
                Dune Imperium Clock Support App by Lance Dang
                <br />
                Inspired by the OG app made by Cheesable
            </Text>
            <View style={styles.menu}>
                <MenuOption appMode="DuneUprising" onPress={() => setMode('DuneUprising')} />
            </View>
        </View>
    );
};
