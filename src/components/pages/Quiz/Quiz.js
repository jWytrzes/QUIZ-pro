import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../../utils/data';
import ActiveQuestion from '../../organisms/ActiveQuestion/ActiveQuestion';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import ProgressBar from '../../organisms/ProgressBar/ProgressBar';
import NumLabel from '../../atoms/NumLabel/NumLabel';
import H2 from '../../atoms/H2/H2';
import { baseUrl, countScore, setQuizResultsToLs } from '../../../utils';

const Quiz = () => {
	const { id } = useParams();
	const [quiz, setQuiz] = useState(null);
	const [activeQuestion, setActiveQuestion] = useState(null);
	const [score, setScore] = useState(null);

	useEffect(() => {
		// TODO
		//fetch quiz
		fetch(`${baseUrl}quiz/${id}`)
			.then((response) => response.json())
			.then((data) => setQuiz(data.quiz));

		// const result = data.find((item) => item.id === id);
		// setQuiz(result);
		setActiveQuestion(0);
	}, [id]);

	const changeQuestion = (id) => {
		if (id >= 0 && id < quiz.questions.length) {
			setActiveQuestion(id);
		}
	};

	const check = (questionId, answerId, value) => {
		let updatedQuiz = JSON.parse(JSON.stringify(quiz));
		const question = updatedQuiz.questions.find((q) => q.id === questionId);

		const aId = question.answers.findIndex((a) => a.id === answerId);
		let updatedAnswers = [...question.answers];
		updatedAnswers[aId].checked = value;

		const qId = updatedQuiz.questions.findIndex((q) => q.id === questionId);
		let updatedQuestions = [...updatedQuiz.questions];
		updatedQuestions[qId].answers = updatedAnswers;

		updatedQuiz.questions = updatedQuestions;
		setQuiz(updatedQuiz);
	};

	const submitQuiz = () => {
		if (!score) {
			const countedScore = countScore(quiz.questions);
			setScore(countedScore);
			let updatedQuiz = quiz;
			const quizResult = {
				id: quiz.id,
				score: countedScore,
				max: quiz.questionsNum,
			};
			updatedQuiz.questions.push(quizResult);
			setActiveQuestion(activeQuestion + 1);
			setQuizResultsToLs(quizResult);
		}
	};

	return (
		<MainTemplate>
			{quiz && (
				<div>
					<div>
						<NumLabel> Quiz #{quiz.num} </NumLabel>
						<H2> {quiz.title} </H2>
					</div>
					<ActiveQuestion
						question={quiz.questions[activeQuestion]}
						activeNum={activeQuestion}
						check={check}
						score={score}
						max={quiz.questionsNum}
					/>
					<ProgressBar
						questions={quiz.questions}
						activeQuestion={activeQuestion}
						changeQuestion={changeQuestion}
						submitQuiz={submitQuiz}
						result={score != null ? true : false}
					/>
				</div>
			)}
		</MainTemplate>
	);
};

export default Quiz;
