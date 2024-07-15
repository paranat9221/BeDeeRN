import mockQuizzes from "./mocks/quizMocks";

export const fetchQuizzes = async (): Promise<Quiz[]> => {
    try {
        let result: Quiz[];

        function getRandomItems<T>(arr: T[], numItems: number): T[] {
            const shuffled = arr.slice();

            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }

            return shuffled.slice(0, numItems);
        }


        result = await new Promise<Quiz[]>((resolve) => {
            setTimeout(() => {
                resolve(getRandomItems(mockQuizzes, 5));
            }, 3000); // Mock fetching data
        });

        return result;
    } catch (error) {
        console.error('Error fetching quizzes:', error);
        throw error;
    }
};
