import React from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import { dimensions } from '../../constants';
import { Button, OutlinedButton } from '../../components';

interface QuizProps {
    index: number;
    quiz: Quiz;
    selected: Choice;
    onSelected: (choice: Choice) => void;
}

const QuizItem: React.FC<QuizProps> = ({ index, quiz, selected, onSelected }) => {
    return (
        <View>
            <Text>{index}. {quiz.question}</Text>
            <FlatList
                style={styles.list}
                data={quiz.choices}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return selected?.id == item.id ? <Button
                        title={item.choice}
                        onPress={() => onSelected(item)}
                        style={styles.choiceBtn}
                    /> : <OutlinedButton
                        title={item.choice}
                        onPress={() => onSelected(item)}
                        style={styles.choiceBtn}
                    />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        marginTop: dimensions.mainMargin
    },
    choiceBtn: {
        marginTop: dimensions.mainGap
    }
});

export default QuizItem;