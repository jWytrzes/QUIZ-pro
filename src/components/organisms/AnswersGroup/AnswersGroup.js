import React from 'react';
import Label from '../../atoms/Label/Label';
import AnswerInput from '../../molecules/AnswerInput/AnswerInput';
import { StyledWrapper } from './styles-AnswersGroup';

const AnswersGroup = ({ answers }) => {
	return (
		<StyledWrapper>
			{answers.map((ans, i) => (
				<div key={`ans-${i}`}>
					<Label htmlFor={`ans-${i}`}> Odpowiedź {i + 1} </Label>
					<AnswerInput id={`ans-${i}`} correct={ans.correct} />
				</div>
			))}
		</StyledWrapper>
	);
};

export default AnswersGroup;
