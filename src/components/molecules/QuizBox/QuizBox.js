import { ArrowRight } from 'react-feather';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button/Button';
import H3 from '../../atoms/H3/H3';
import NumLabel from '../../atoms/NumLabel/NumLabel';
import ResultLabel from '../../atoms/ResultLabel/ResultLabel';
import { StyledWrapper, StyledP } from './styles-QuizBox';

const QuizBox = ({ data }) => {
	return (
		<StyledWrapper>
			<NumLabel> QUIZ #{data.num} </NumLabel>
			<H3> {data.title} </H3>
			<StyledP> {data.questionsNum} pytań </StyledP>
			{data.completed ? (
				<ResultLabel points={data.completed} max={data.questionsNum} />
			) : (
				<Button as={Link} to={`/quiz/${data.id}`}>
					Rozpocznij <ArrowRight size={18} />
				</Button>
			)}
		</StyledWrapper>
	);
};

export default QuizBox;
