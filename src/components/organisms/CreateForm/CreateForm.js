import React from 'react';
import QuestionInput from '../../molecules/QuestionInput/QuestionInput';
import AnswersGroup from '../AnswersGroup/AnswersGroup';
import { StyledWrapper } from './styles-CreateForm';

const CreateForm = () => {
	return (
		<StyledWrapper>
			<QuestionInput />
			<AnswersGroup />
		</StyledWrapper>
	);
};

export default CreateForm;
