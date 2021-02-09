import { useEffect } from 'react';
import H3 from '../../atoms/H3/H3';
import NumLabel from '../../atoms/NumLabel/NumLabel';
import AnswerCheckbox from '../../molecules/AnswerCheckbox/AnswerCheckbox';
import { StyledWrapper } from './styles-ActiveQuestion';

const ActiveQuestion = ({ question, activeNum, check }) => {
	return (
		<StyledWrapper>
			<div>
				<NumLabel> Pytanie #{activeNum + 1} </NumLabel>
				<H3> {question.content} </H3>
			</div>
			<div>
				{question.answers.map((answer) => (
					<AnswerCheckbox
						key={answer.id}
						answer={answer}
						questionId={question.id}
						check={check}
					/>
				))}
			</div>
		</StyledWrapper>
	);
};

export default ActiveQuestion;
