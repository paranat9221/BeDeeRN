import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Container, Divider } from '../../components';
import { colors, dimensions } from '../../constants';
import QuizItem from './quiz';
import { buttonStyles } from '../../styles';
import shadowStyles from '../../styles/shadowStyles';
import { fetchQuizzes } from '../../services/quizService';

const MainScreen: React.FC = () => {
    const [selectedList, setSelectedList] = useState<Choice[]>([]);
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const ItemSeparatorComponent = useCallback(() => <Divider />, []);
    const [quizzes, setQuizzes] = useState<Quiz[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadQuizzes = async () => {
            try {
                const quizData = await fetchQuizzes();
                setQuizzes(quizData);
            } catch (error) {
                console.error('Failed to fetch quizzes:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadQuizzes();
    }, []);

    const updateSelectedList = (index: number, choice: Choice) => {
        setSelectedList((prev) => {
            prev[index] = choice;
            return [...prev];
        });
    };

    const selectedCount = selectedList.filter(list => list).length;

    return (
        <Container
            title={'QUIZ!'}
            headerAction={
                {
                    icon: <Icon name="podium" size={dimensions.iconSize} color={colors.appWhite} />,
                    onPress: () => navigation.navigate('LeaderBoard')
                }
            }
        >
            <View style={{ ...shadowStyles.main, flex: 1 }}>
                {isLoading ?
                    <ActivityIndicator size="large" color={colors.appWhite} />
                    :
                    <View style={styles.body}>
                        <Text style={styles.scoreText}>{selectedCount}/{quizzes.length}</Text>
                        <FlatList
                            style={styles.box}
                            contentContainerStyle={styles.contentBox}
                            data={quizzes}
                            renderItem={({ item, index }) => <View>
                                <QuizItem
                                    quiz={item}
                                    index={index + 1}
                                    selected={selectedList[index]}
                                    onSelected={(item: Choice) => {
                                        updateSelectedList(index, item)
                                    }}
                                />
                            </View>}
                            keyExtractor={(item) => item.id}
                            ItemSeparatorComponent={ItemSeparatorComponent}
                            ListFooterComponent={
                                <View>
                                    <Divider />
                                    <Button
                                        disabled={selectedCount < quizzes.length}
                                        title='Submit'
                                        onPress={() => Alert.alert('Confirm Submit', '', [
                                            { text: 'Cancel', style: 'destructive' },
                                            {
                                                text: 'Confirm', onPress: () => navigation.replace('Result', {
                                                    quizzes, selectedList
                                                })
                                            },
                                        ])}
                                        style={styles.submitBtn}
                                        color={colors.appGreen}
                                    />
                                </View>
                            }
                        />
                    </View>
                }
            </View>
        </Container >
    );
};


const styles = StyleSheet.create({
    body: {
        flex: 1
    },
    scoreText: {
        textAlign: 'center'
    },
    box: {
        backgroundColor: colors.backgroundColor,
        borderRadius: dimensions.sectionPadding / 2,
        margin: dimensions.sectionPadding,
    },
    contentBox: {
        padding: dimensions.sectionPadding
    },
    submitBtn: {
        ...buttonStyles.buttonLarge,
    },
});

export default MainScreen;