import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../../utils/data';
import ActiveQuestion from '../../organisms/ActiveQuestion/ActiveQuestion';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import ProgressBar from '../../organisms/ProgressBar/ProgressBar';
import NumLabel from '../../atoms/NumLabel/NumLabel';
import H2 from '../../atoms/H2/H2';
import { countScore } from '../../../utils';
import ResultBoard from '../../molecules/ResultBoard/ResultBoard';

const Quiz = () => {
	const { id } = useParams();
	const [quiz, setQuiz] = useState(null);
	const [activeQuestion, setActiveQuestion] = useState(null);
	const [score, setScore] = useState(null);

	useEffect(() => {
		// TODO
		//fetch quiz
		const result = data.find((item) => item.id === id);
		setQuiz(result);
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
		const countedScore = countScore(quiz.questions);
		setScore(countedScore);
	};

	return (
		<MainTemplate>
			{quiz && (
				<div>
					<div>
						<NumLabel> Quiz #{quiz.num} </NumLabel>
						<H2> {quiz.title} </H2>
					</div>
					{score != null ? (
						<ResultBoard score={score} max={quiz.questions.length} />
					) : (
						<ActiveQuestion
							question={quiz.questions[activeQuestion]}
							activeNum={activeQuestion}
							check={check}
						/>
					)}
					<ProgressBar
						questions={quiz.questions.length}
						activeQuestion={activeQuestion}
						changeQuestion={changeQuestion}
						submitQuiz={submitQuiz}
						result={score ? true : false}
					/>
				</div>
			)}
		</MainTemplate>
	);
};

export default Quiz;
