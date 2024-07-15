import { StyleSheet } from 'react-native';
import { colors } from '../constants';

const shadowStyles = StyleSheet.create({
    main: {
        shadowColor: colors.appBlack,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    button: {
        shadowColor: colors.appBlack,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    homeIconShadow: {
        shadowColor: colors.appBlue,
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    }
});

export default shadowStyles;
