import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ActiveQuestion from '../../organisms/ActiveQuestion/ActiveQuestion';
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
		fetch(`${baseUrl}v1/quiz/${id}`)
			.then((response) => response.json())
			.then((data) => setQuiz(data.quiz));
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
				max: quiz.questions.length,
			};
			updatedQuiz.questions.push(quizResult);
			setActiveQuestion(activeQuestion + 1);
			setQuizResultsToLs(quizResult);
		}
	};

	return (
		<>
			{quiz && (
				<div>
					<div>
						<NumLabel> Quiz #{quiz.id} </NumLabel>
						<H2> {quiz.title} </H2>
					</div>
					<ActiveQuestion
						question={quiz.questions[activeQuestion]}
						activeNum={activeQuestion}
						check={check}
						score={score}
						max={
							score != null ? quiz.questions.length - 1 : quiz.questions.length
						}
					/>
					<ProgressBar
						questions={quiz.questions}
						activeQuestion={activeQuestion}
						changeQuestion={changeQuestion}
						submitQuiz={submitQuiz}
						result={score != null ? 1 : 0}
					/>
				</div>
			)}
		</>
	);
};

export default Quiz;
