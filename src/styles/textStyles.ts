import { StyleSheet } from 'react-native';
import { colors, dimensions, fonts } from '../constants';

const textStyles = StyleSheet.create({
    main: {
        color: colors.textPrimary,
        fontFamily: fonts.regular,
        fontSize: dimensions.fontSizeMedium,
    },
    bold: {
        color: colors.textPrimary,
        fontFamily: fonts.bold,
        fontSize: dimensions.fontSizeMedium,
    },
    sm: {
        color: colors.textPrimary,
        fontFamily: fonts.regular,
        fontSize: dimensions.fontSizeSmall,
    },
    lg: {
        color: colors.textPrimary,
        fontFamily: fonts.regular,
        fontSize: dimensions.fontSizeLarge,
    },
    lgBold: {
        color: colors.textPrimary,
        fontFamily: fonts.bold,
        fontSize: dimensions.fontSizeLarge,
    },
    title: {
        color: colors.textSecondary,
        fontFamily: fonts.bold,
        fontSize: dimensions.fontSizeExtraLarge,
    },
    homeTitle: {
        color: colors.textWhite,
        fontFamily: fonts.bold,
        fontSize: dimensions.fontSizeHomeTitle,
    },
    header: {
        color: colors.textWhite,
        fontFamily: fonts.bold,
        fontSize: dimensions.fontSizeLarge,
    },
    highlight: {
        color: colors.appRed,
        fontFamily: fonts.bold,
        fontSize: dimensions.fontHighlight,
    }
});

export default textStyles;
