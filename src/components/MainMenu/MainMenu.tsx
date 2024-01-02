import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './MainMenu.styles';
import { MenuOption } from '../MenuOption';

interface ComponentProps {}

export const MainMenu = (props: ComponentProps) => {
    return (
        <View style={styles.component}>
            <Text style={styles.credit}>
                Dune Imperium Clock Support App by Lance Dang
                <br />
                Inspired by the OG app made by Cheesable
            </Text>
            <View style={styles.menu}>
                <MenuOption appMode="DuneUprising" />
            </View>
        </View>
    );
};
