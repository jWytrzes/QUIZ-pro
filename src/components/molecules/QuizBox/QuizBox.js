import { ArrowRight } from 'react-feather';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button/Button';
import H3 from '../../atoms/H3/H3';
import NumLabel from '../../atoms/NumLabel/NumLabel';
import ResultLabel from '../../atoms/ResultLabel/ResultLabel';
import { StyledWrapper, StyledP } from './styles-QuizBox';

const QuizBox = ({ data, score }) => {
	return (
		<StyledWrapper>
			<NumLabel> QUIZ #{data.id} </NumLabel>
			<H3> {data.title} </H3>
			<StyledP> {data.questions.length} pytań</StyledP>
			{score != null ? (
				<ResultLabel
					points={score}
					max={
						score != null ? data.questions.length - 1 : data.questions.length
					}
				/>
			) : (
				<Button as={Link} to={`/quiz/${data.id}`} primary={1}>
					Rozpocznij <ArrowRight size={18} />
				</Button>
			)}
		</StyledWrapper>
	);
};

export default QuizBox;
