import React from 'react';
import { View } from 'react-native';

import { styles } from './TemplateComponent.styles';

interface ComponentProps {}

export const TemplateComponent = (props: ComponentProps) => {
    return <View style={styles.component}>TemplateComponent</View>;
};
