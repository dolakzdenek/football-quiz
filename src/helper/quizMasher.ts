import questionList from '../../assets/trivia/facts/questionList.json'
import quizList from '../../assets/trivia/facts/quizList.json'

export const getMashedQuizData = ({id}) => {
  const quizFromList = quizList.find(quiz => quiz.id === id)
  console.log('quizFromList', quizFromList)
  const {categories = [], numberOfQ = 10, levels = [], numberOfA = 4} = quizFromList
  const questions = questionList.filter(question => {
    const isCategory = question.categories.some(category => categories.includes(category))
    const isLevel = levels.includes(question.level)
    return isCategory && isLevel
  })
  questions.sort(() => 0.5 - Math.random())
  questions.forEach(question => {
    const answers = question.answers
    const correctAnswers = answers.filter(answer => answer.correct)
    const incorrectAnswers = answers.filter(answer => !answer.correct)
    // Calculate the number of incorrect answers to keep
    let numberOfIncorrectAnswers = numberOfA - correctAnswers.length
    // If the number of correct answers is equal to or exceeds numberOfA, return correct answers only
    if (numberOfIncorrectAnswers <= 0) {
      return correctAnswers
    }
    // Randomly select incorrect answers to match the required total count
    const selectedIncorrectAnswers = incorrectAnswers.slice(0, numberOfIncorrectAnswers)
    // Combine correct and selected incorrect answers
    question.answers = correctAnswers.concat(selectedIncorrectAnswers)
    question.answers.sort(() => 0.5 - Math.random())

  })
  return questions
}
