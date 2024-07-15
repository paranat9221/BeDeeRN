import { StyleSheet } from 'react-native';
import { colors, dimensions, fonts } from '../constants';
import shadowStyles from './shadowStyles';

const buttonStyles = StyleSheet.create({
    buttonLarge: {
        backgroundColor: colors.appRed,
        paddingHorizontal: dimensions.mainBtnLgPaddingHorizontal,
        paddingVertical: dimensions.mainBtnLgPaddingVertical,
        borderRadius: dimensions.mainBtnBorderRadius,
        borderWidth: 1,
        borderColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: colors.appRed,
        paddingHorizontal: dimensions.mainBtnPaddingHorizontal,
        paddingVertical: dimensions.mainBtnPaddingVertical,
        borderRadius: dimensions.mainBtnBorderRadius,
        borderWidth: 1,
        borderColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonDisable: {
        backgroundColor: colors.appGray,
        paddingHorizontal: dimensions.mainBtnPaddingHorizontal,
        paddingVertical: dimensions.mainBtnPaddingVertical,
        borderRadius: dimensions.mainBtnBorderRadius,
        borderWidth: 1,
        borderColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: colors.textWhite,
        fontFamily: fonts.regular,
        fontSize: dimensions.fontSizeMedium,
    },
    textButtonText: {
        color: colors.textBlack,
        fontFamily: fonts.regular,
        fontSize: dimensions.fontSizeMedium,
        textDecorationLine: 'underline',
    },
    outlinedButton: {
        backgroundColor: 'transparent',
        paddingHorizontal: dimensions.mainBtnPaddingHorizontal,
        paddingVertical: dimensions.mainBtnPaddingVertical,
        borderRadius: dimensions.mainBtnBorderRadius,
        borderWidth: 1,
        borderColor: colors.appRed,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default buttonStyles;
