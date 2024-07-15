import mockLeaderBoard from "./mocks/leaderBoardMocks";

export const fetchLeaderBoard = async (): Promise<LeaderBoardList[]> => {
    try {
        let result: LeaderBoardList[];

        function sortLeaderBoard(lists: LeaderBoardList[]): LeaderBoardList[] {
            return lists.sort((listA, listB) => listB.score - listA.score);
        }

        result = await new Promise<LeaderBoardList[]>((resolve) => {
            setTimeout(() => {
                resolve(sortLeaderBoard(mockLeaderBoard));
            }, 3000); // Mock fetching data
        });

        return result;
    } catch (error) {
        console.error('Error fetching quizzes:', error);
        throw error;
    }
};
