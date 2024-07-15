import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle, Text, TouchableOpacity } from 'react-native';
import { colors, dimensions } from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import textStyles from '../styles/textStyles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

type ContainerProps = {
    children?: ReactNode;
    style?: ViewStyle;
    title?: string;
    showHeader?: boolean;
    headerAction?: {
        icon: ReactNode,
        onPress: () => void,
    };
};

type HeaderProps = {
    showHeader?: boolean;
    title?: string;
    action?: {
        icon: ReactNode,
        onPress: () => void,
    };
}

const Container: React.FC<ContainerProps> = ({ children, style, title, headerAction: action, showHeader = true }) => {
    return <LinearGradient
        colors={[colors.appBlue, colors.appBlue, colors.appWhite]}
        locations={[0, 0.2, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={[styles.container, style]}
    >
        <Header title={title} action={action} showHeader={showHeader} />
        <View style={styles.body}>
            {children}
        </View>
    </LinearGradient >
};

const Header: React.FC<HeaderProps> = ({ title, action, showHeader }) => {
    const navigation = useNavigation();

    if (showHeader) {
        return <SafeAreaView>
            <View style={styles.header}>
                {leftItem()}
                <Text style={textStyles.header}>{title}</Text>
                {rightItem()}
            </View>
        </SafeAreaView>
    }

    return <View />

    function leftItem() {
        const canGoBack: boolean = navigation.canGoBack();

        return <TouchableOpacity
            style={styles.item}
            disabled={!canGoBack}
            onPress={() => navigation.goBack()}
        >
            {canGoBack &&
                <Icon name="arrow-back" size={dimensions.iconSize} color={colors.appWhite} />
            }
        </TouchableOpacity>;
    }

    function rightItem() {
        return <TouchableOpacity style={styles.item} onPress={action?.onPress}>
            {action?.icon}
        </TouchableOpacity>;
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
    },
    body: {
        flex: 1,
        zIndex: 1,
    },
    header: {
        height: dimensions.appBarHeight,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    headerDivider: {
        height: dimensions.headerDivider,
        width: '100%',
        position: 'absolute',
        bottom: -dimensions.headerDivider
    },
    item: {
        width: dimensions.appBarBtnWidth,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Container;