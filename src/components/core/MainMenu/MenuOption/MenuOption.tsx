import React from 'react';
import { Pressable, Text } from 'react-native';

import { styles } from './MenuOption.styles';

import { AppMode } from '@/models';

const MENU_OPTION_DICT: Record<AppMode, string> = {
    MainMenu: 'Main Menu',
    DuneUprising: 'Dune Imperium Uprising',
};

interface ComponentProps {
    appMode: AppMode;
    onPress: () => void;
}

export const MenuOption = ({ appMode, onPress }: ComponentProps) => {
    return (
        <Pressable style={styles.component} onPress={onPress}>
            <Text>{MENU_OPTION_DICT[appMode]}</Text>
        </Pressable>
    );
};
