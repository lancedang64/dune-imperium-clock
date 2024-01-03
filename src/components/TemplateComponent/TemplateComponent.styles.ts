import { StyleSheet } from 'react-native';

import { BACKGROUND_COLOR } from '@/styling';

export const styles = StyleSheet.create({
    component: {
        backgroundColor: BACKGROUND_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 50,
    },
});
