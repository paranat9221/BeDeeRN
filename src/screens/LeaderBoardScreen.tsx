import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { Container, Divider } from '../components';
import { fetchLeaderBoard } from '../services/leaderBoardService';
import { colors, dimensions } from '../constants';
import shadowStyles from '../styles/shadowStyles';
import textStyles from '../styles/textStyles';

const LeaderBoardScreen: React.FC = () => {
    const [LeaderBoard, setLeaderBoard] = useState<LeaderBoardList[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadLeaderBoard = async () => {
            try {
                const LeaderBoardData = await fetchLeaderBoard();
                setLeaderBoard(LeaderBoardData);
            } catch (error) {
                console.error('Failed to fetch leaderboard:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadLeaderBoard();
    }, []);

    return (
        <Container title='Leader Board'>
            <View style={styles.box}>
                {isLoading ?
                    <ActivityIndicator size="large" color={colors.appWhite} />
                    :
                    <FlatList
                        style={styles.body}
                        contentContainerStyle={styles.contentBody}
                        data={LeaderBoard}
                        keyExtractor={(item) => item.id}
                        ListHeaderComponent={() => <View style={styles.tableHeader}>
                            <View style={styles.table}>
                                <Text style={{ ...textStyles.bold, ...styles.tableRank }}>Rank</Text>
                                <View style={styles.tableName}>
                                    <Text style={textStyles.bold}>Name</Text>
                                </View>
                                <Text style={{ ...textStyles.bold, ...styles.tableScore }}>Score</Text>
                            </View>
                        </View>}
                        renderItem={({ item, index }) => {
                            return <View style={styles.table}>
                                <Text style={styles.tableRank}>{index + 1}</Text>
                                <View style={styles.tableName}>
                                    <Text>{item.name}</Text>
                                </View>
                                <Text style={styles.tableScore}>{item.score}</Text>
                            </View>
                        }}
                        ItemSeparatorComponent={() => <Divider />}
                    />
                }
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: colors.backgroundColor,
        borderRadius: dimensions.sectionPadding / 2,
        margin: dimensions.sectionPadding,
    },
    contentBody: {
        padding: dimensions.sectionPadding
    },
    box: {
        ...shadowStyles.main,
        flex: 1
    },
    table: {
        flexDirection: 'row'
    },
    tableHeader: {
        marginBottom: dimensions.sectionPadding
    },
    tableRank: {
        flex: 2
    },
    tableName: {
        flex: 5
    },
    tableScore: {
        flex: 2,
        textAlign: 'right'
    }
});

export default LeaderBoardScreen;