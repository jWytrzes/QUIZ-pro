import { ArrowRight } from 'react-feather';
import Button from '../../atoms/Button/Button';
import H3 from '../../atoms/H3/H3';
import ResultLabel from '../../atoms/ResultLabel/ResultLabel';
import { StyledId, StyledWrapper, StyledP } from './styles-QuizBox';

const QuizBox = ({ data, id }) => {
	return (
		<StyledWrapper>
			<StyledId> QUIZ #{id + 1} </StyledId>
			<H3> {data.title} </H3>
			<StyledP> {data.questions.length} pytań </StyledP>
			{data.completed ? (
				<ResultLabel points={data.completed} max={data.questions.length} />
			) : (
				<Button secondary>
					Rozpocznij <ArrowRight size={18} />
				</Button>
			)}
		</StyledWrapper>
	);
};

export default QuizBox;
