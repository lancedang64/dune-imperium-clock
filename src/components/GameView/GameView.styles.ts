import { StyleSheet } from 'react-native';

import { BACKGROUND_COLOR } from '@/styling';

export const styles = StyleSheet.create({
    component: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: BACKGROUND_COLOR,
        padding: 30,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
});
