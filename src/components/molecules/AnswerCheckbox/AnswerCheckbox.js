import React from 'react';
import {
	StyledLabel,
	StyledWrapper,
	StyledInput,
	FakeInput,
} from './styles-AnswerCheckbox';

const AnswerCheckbox = ({ answer, questionId, check, disabled }) => {
	return (
		<StyledWrapper>
			<StyledInput
				type="checkbox"
				name={`q${questionId}`}
				id={`q${questionId}-a${answer.id}`}
				checked={answer.checked || false}
				onChange={(e) => check(questionId, answer.id, e.target.checked)}
				disabled={disabled}
			/>
			<FakeInput htmlFor={`q${questionId}-a${answer.id}`} disabled={disabled} />
			<StyledLabel
				htmlFor={`q${questionId}-a${answer.id}`}
				isChecked={disabled && answer.checked ? true : false}
				disabled={disabled}
				markCorrect={disabled ? answer.isCorrect : undefined}
				markIncorrect={
					disabled
						? !answer.isCorrect && answer.checked
							? true
							: false
						: false
				}
			>
				{answer.description}
			</StyledLabel>
		</StyledWrapper>
	);
};

export default AnswerCheckbox;
