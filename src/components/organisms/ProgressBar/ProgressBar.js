import React from 'react';
import { ArrowLeft, ArrowRight, Send } from 'react-feather';
import { checkIfUserAnswerIsCorrect } from '../../../utils';
import Button from '../../atoms/Button/Button';
import {
	StyledWrapper,
	StyledMarkersWrapper,
	StyledMarker,
} from './styles-ProgressBar';

const ProgressBar = ({
	questions,
	activeQuestion,
	changeQuestion,
	submitQuiz,
	result,
}) => {
	return (
		<StyledWrapper>
			<Button
				leftIcon={1}
				onClick={() => changeQuestion(activeQuestion - 1)}
				disabled={activeQuestion === 0}
			>
				<ArrowLeft size={18} /> Poprzednie
			</Button>
			<StyledMarkersWrapper>
				{questions.map((item, id) => {
					let res = null;
					if (result && item.answers) {
						res = checkIfUserAnswerIsCorrect(item);
					}
					return (
						<StyledMarker
							key={id}
							id={id}
							done={id <= activeQuestion ? 1 : result ? 1 : 0}
							active={id === activeQuestion ? 1 : 0}
							onClick={() => changeQuestion(id)}
							result={result}
							isCorrect={result && res}
						/>
					);
				})}
			</StyledMarkersWrapper>
			{!result && activeQuestion === questions.length - 1 ? (
				<Button primary={true} onClick={submitQuiz}>
					Zakończ <Send size={18} />
				</Button>
			) : (
				<Button
					primary={true}
					onClick={() => changeQuestion(activeQuestion + 1)}
					disabled={result && activeQuestion === questions.length - 1}
				>
					Następne <ArrowRight size={18} />
				</Button>
			)}
		</StyledWrapper>
	);
};

export default ProgressBar;
