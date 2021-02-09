import React from 'react';
import { StyledWrapper } from './styles-AnswerCheckbox';

const AnswerCheckbox = ({ answer, questionId, check }) => {
	return (
		<StyledWrapper>
			<input
				type="checkbox"
				name={`q${questionId}`}
				id={`q${questionId}-a${answer.id}`}
				checked={answer.checked || false}
				onChange={(e) => check(questionId, answer.id, e.target.checked)}
			/>
			<label htmlFor={`q${questionId}-a${answer.id}`}>
				{answer.description}
			</label>
		</StyledWrapper>
	);
};

export default AnswerCheckbox;
