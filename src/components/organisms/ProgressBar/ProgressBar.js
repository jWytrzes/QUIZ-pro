import React from 'react';
import { ArrowLeft, ArrowRight, Send } from 'react-feather';
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
}) => {
	return (
		<StyledWrapper>
			<Button leftIcon={1} onClick={() => changeQuestion(activeQuestion - 1)}>
				<ArrowLeft size={18} /> Poprzednie
			</Button>
			<StyledMarkersWrapper>
				{[...Array(questions)].map((item, id) => (
					<StyledMarker
						key={id}
						id={id}
						done={id <= activeQuestion ? 1 : 0}
						active={id === activeQuestion ? 1 : 0}
						onClick={() => changeQuestion(id)}
					/>
				))}
			</StyledMarkersWrapper>
			{console.log(activeQuestion, questions)}
			{activeQuestion === questions - 1 ? (
				<Button primary={1} onClick={submitQuiz}>
					Zakończ <Send size={18} />
				</Button>
			) : (
				<Button primary={1} onClick={() => changeQuestion(activeQuestion + 1)}>
					Następne <ArrowRight size={18} />
				</Button>
			)}
		</StyledWrapper>
	);
};

export default ProgressBar;
