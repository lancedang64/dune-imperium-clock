import React from 'react';
import { View } from 'react-native';

import { styles } from './MenuOption.styles';

import { AppMode } from '@/models';

const MENU_OPTION_DICT: Record<AppMode, string> = {
    MainMenu: 'Main Menu',
    DuneUprising: 'Dune Imperium Uprising',
};

interface ComponentProps {
    appMode: AppMode;
}

export const MenuOption = ({ appMode }: ComponentProps) => {
    return <View style={styles.component}>{MENU_OPTION_DICT[appMode]}</View>;
};
