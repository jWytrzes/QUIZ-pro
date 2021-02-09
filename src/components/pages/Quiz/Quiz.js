import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../../utils/data';
import ActiveQuestion from '../../organisms/ActiveQuestion/ActiveQuestion';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import ProgressBar from '../../organisms/ProgressBar/ProgressBar';
import NumLabel from '../../atoms/NumLabel/NumLabel';
import H2 from '../../atoms/H2/H2';

const Quiz = () => {
	const { id } = useParams();
	const [quiz, setQuiz] = useState(null);
	const [activeQuestion, setActiveQuestion] = useState(null);

	useEffect(() => {
		// TODO
		//fetch quiz
		const result = data.find((item) => item.id === id);
		setQuiz(result);
		setActiveQuestion(0);
	}, []);

	const changeQuestion = (id) => {
		if (id >= 0 && id < quiz.questions.length) {
			setActiveQuestion(id);
		}
	};

	const check = (questionId, answerId) => {};

	const submitQuiz = () => {
		//TODO
		//submit
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
					/>
					<ProgressBar
						questions={quiz.questions.length}
						activeQuestion={activeQuestion}
						changeQuestion={changeQuestion}
						submitQuiz={submitQuiz}
					/>
				</div>
			)}
		</MainTemplate>
	);
};

export default Quiz;
