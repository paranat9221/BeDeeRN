import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Container from '../components/Container';
import { colors, dimensions } from '../constants';
import textStyles from '../styles/textStyles';
import { buttonStyles } from '../styles';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import shadowStyles from '../styles/shadowStyles';
import { Button, TextButton } from '../components';

const HomeScreen: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    return (
        <Container style={styles.container} showHeader={false}>
            <Text style={textStyles.homeTitle}>Start Quiz!</Text>
            <View style={styles.main}>
                <Icon name='library-sharp' size={200} color={colors.appWhite} style={shadowStyles.homeIconShadow} />
            </View>
            <Button
                title="Press to start"
                onPress={() => navigation.navigate('Main')}
                style={styles.startBtn}
                textStyle={textStyles.lgBold}
            />
            <TextButton
                title="LeaderBoard"
                onPress={() => navigation.navigate('LeaderBoard')}
                style={styles.leaderBoardBtn}
                textStyle={styles.leaderBoardBtnText}
            />
        </Container >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: dimensions.homePadding
    },
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    startBtn: {
        ...buttonStyles.buttonLarge,
        marginTop: dimensions.sectionPadding,
        alignSelf: 'center'
    },
    leaderBoardBtn: {
        marginTop: dimensions.sectionPadding,
        alignSelf: 'center'
    },
    leaderBoardBtnText: {
        ...textStyles.main,
        color: colors.appRed
    }
});

export default HomeScreen;