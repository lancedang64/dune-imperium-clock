import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './MainMenu.styles';
import { MenuOption } from './MenuOption';

import { DuneUprisingMain } from '@/components/dune-uprising';
import { AppMode } from '@/models';

interface ComponentProps {}

export const MainMenu = (props: ComponentProps) => {
    const [mode, setMode] = React.useState<AppMode>('MainMenu');

    if (mode === 'DuneUprising') {
        return <DuneUprisingMain />;
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
