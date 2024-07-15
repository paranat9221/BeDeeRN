import React, { useEffect, useState } from 'react';
import { Button, Container } from '../components';
import { StyleSheet, Text, View } from 'react-native';
import { ParamListBase, RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator'
import { dimensions } from '../constants';
import textStyles from '../styles/textStyles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ResultScreenRouteProp = RouteProp<RootStackParamList, 'Result'>;

type Props = {
    route: ResultScreenRouteProp;
};

const ResultScreen: React.FC<Props> = ({ route }) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const { quizzes, selectedList } = route.params;
    const [score, setScore] = useState<number>(0);
    useEffect(() => {
        setScore(calcScore());
    }, []);

    function calcScore(): number {
        let result: number = 0;

        for (let i in quizzes) {
            if (quizzes[i].answer == selectedList[i].id) {
                result++;
            }
        }

        return result;
    }

    return (
        <Container showHeader={false}>
            <View style={styles.body}>
                <Text style={textStyles.lg}>Your score is</Text>
                <Text style={styles.score}>{score}</Text>
                <Button
                    title='Done'
                    onPress={() => navigation.goBack()}
                    style={styles.btn}
                />
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    score: {
        ...textStyles.highlight,
        marginTop: dimensions.sectionPadding
    },
    btn: {
        marginTop: dimensions.sectionPadding
    }
})

export default ResultScreen;