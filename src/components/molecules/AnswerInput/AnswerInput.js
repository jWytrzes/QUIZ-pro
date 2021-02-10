import React, { useState } from 'react';
import { Check, Edit, X } from 'react-feather';
import IconButton from '../../atoms/IconButton/IconButton';
import Input from '../../atoms/Input/Input';
import { StyledWrapper } from './styles-AnswerInput';

const AnswerInput = ({ correct }) => {
	const [question, setQuestion] = useState('');
	const [read, setRead] = useState(false);

	return (
		<StyledWrapper>
			<Input value={question} onChange={(e) => setQuestion(e.target.value)} />
			<IconButton success={correct}>{correct ? <Check /> : <X />}</IconButton>
		</StyledWrapper>
	);
};

export default AnswerInput;
