import H3 from '../../atoms/H3/H3';
import NumLabel from '../../atoms/NumLabel/NumLabel';
import AnswerCheckbox from '../../molecules/AnswerCheckbox/AnswerCheckbox';
import ResultBoard from '../../molecules/ResultBoard/ResultBoard';
import { StyledWrapper } from './styles-ActiveQuestion';

const ActiveQuestion = ({ question, activeNum, check, score, max }) => {
	return (
		<StyledWrapper>
			{question.answers ? (
				<>
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
								disabled={score != null}
							/>
						))}
					</div>
				</>
			) : (
				<ResultBoard score={score} max={max} />
			)}
		</StyledWrapper>
	);
};

export default ActiveQuestion;
