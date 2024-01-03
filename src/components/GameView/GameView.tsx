import { Button } from '@rneui/base';
import React from 'react';
import { View } from 'react-native';

import { styles } from './GameView.styles';

interface ComponentProps {
    onPressBack: () => void;
    // TODO: not optional
    onPressPause?: () => void;
    children?: React.ReactNode;
}

export const GameView = ({ onPressBack, onPressPause, children }: ComponentProps) => {
    return (
        <View style={styles.component}>
            <View style={styles.header}>
                <Button onPress={onPressBack} title="Back" />
                <Button onPress={onPressPause} title="Pause" />
                <Button title="Zoom buttons" />
            </View>
            {children}
        </View>
    );
};
