import questionList from '../../assets/trivia/facts/questionList.json'
import quizList from '../../assets/trivia/facts/quizList.json'

export const assembleTheQuiz = ({categories, numberOfQ, levels, numberOfA}) =>{
  
}


export const getMashedQuizData = ({categories, numberOfQ, levels, numberOfA}) => {  
  const categoriesSet = new Set(categories);
  const levelsSet = new Set(levels);

  const questions = questionList.filter(question => {
    const isCategory = categoriesSet.has('all') || question.categories.some(category => categoriesSet.has(category));
    const isLevel = levelsSet.has(question.level);
    return isCategory && isLevel;
  }).sort(() => 0.5 - Math.random()).slice(0, numberOfQ); // Do sorting and slicing here to minimize work

  questions.forEach(question => {
    let answers = question.answers;
    const correctAnswers = answers.filter(answer => answer.correct);
    let numberOfIncorrectAnswers = numberOfA - correctAnswers.length;

    if (numberOfIncorrectAnswers > 0) {
      const incorrectAnswers = answers.filter(answer => !answer.correct).slice(0, numberOfIncorrectAnswers);
      answers = correctAnswers.concat(incorrectAnswers).sort(() => 0.5 - Math.random()); // Only sort if necessary
    }
    
    question.answers = answers;
  });

  return questions;
};
