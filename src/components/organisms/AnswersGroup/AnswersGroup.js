import React from 'react';
import Label from '../../atoms/Label/Label';
import AnswerInput from '../../molecules/AnswerInput/AnswerInput';
import { StyledWrapper } from './styles-AnswersGroup';

const AnswersGroup = () => {
	const answers = [
		{ id: 0, correct: true },
		{ id: 1, correct: false },
		{ id: 2, correct: false },
		{ id: 3, correct: false },
	];
	return (
		<StyledWrapper>
			{answers.map((ans, i) => (
				<div key={ans.id}>
					<Label for={`ans${ans.id}`}> Odpowiedź {i + 1} </Label>
					<AnswerInput id={`ans${ans.id}`} correct={ans.correct} />
				</div>
			))}
		</StyledWrapper>
	);
};

export default AnswersGroup;
