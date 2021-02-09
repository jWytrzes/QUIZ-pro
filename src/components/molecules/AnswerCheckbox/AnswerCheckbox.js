import React from 'react';
import { StyledWrapper } from './styles-AnswerCheckbox';

const AnswerCheckbox = ({ answer, questionId, check }) => {
	return (
		<StyledWrapper>
			<input
				type="checkbox"
				name={`q${questionId}`}
				id={`q${questionId}-a${answer.id}`}
				value={answer.checked || false}
				onChange={() => check(questionId, answer.id)}
			/>
			<label htmlFor={`q${questionId}-a${answer.id}`}>
				{answer.description}
			</label>
		</StyledWrapper>
	);
};

export default AnswerCheckbox;
