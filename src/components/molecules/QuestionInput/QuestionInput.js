import React, { useState } from 'react';
import { Check, Edit } from 'react-feather';
import IconButton from '../../atoms/IconButton/IconButton';
import Input from '../../atoms/Input/Input';
import { StyledWrapper } from './styles-QuestionInput';

const QuestionInput = () => {
	const [question, setQuestion] = useState('');
	const [read, setRead] = useState(false);

	return (
		<StyledWrapper>
			<Input value={question} onChange={(e) => setQuestion(e.target.value)} />
			<IconButton primary>{read ? <Edit size={20} /> : <Check />}</IconButton>
		</StyledWrapper>
	);
};

export default QuestionInput;
