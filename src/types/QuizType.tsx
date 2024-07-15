type Quiz = {
    id: string;
    question: string;
    choices: Choice[];
    answer: string; //id of Choice
};

type Choice = {
    id: string;
    choice: string,
}