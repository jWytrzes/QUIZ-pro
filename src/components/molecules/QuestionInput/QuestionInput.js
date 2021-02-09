import React, { useState } from 'react';
import { Check, Edit } from 'react-feather';
import IconButton from '../../atoms/IconButton/IconButton';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import AnswersGroup from '../../organisms/AnswersGroup/AnswersGroup';
import { StyledWrapper, StyledInner } from './styles-QuestionInput';

const QuestionInput = ({ id, publishQuestion, answers, ...props }) => {
	const [question, setQuestion] = useState('');
	const [read, setRead] = useState(false);

	return (
		<StyledWrapper {...props}>
			{console.log(id, answers.length)}
			<Label htmlFor={`q${id}`}> Treść pytania </Label>
			<StyledInner>
				<Input
					value={question}
					onChange={(e) => setQuestion(e.target.value)}
					data-id={id}
					id={`q${id}`}
					type="text"
				/>
				<IconButton
					primary
					type="button"
					onClick={() => publishQuestion(question)}
				>
					{read ? <Edit size={20} /> : <Check />}
				</IconButton>
			</StyledInner>
			<AnswersGroup answers={answers} />
		</StyledWrapper>
	);
};

export default QuestionInput;
