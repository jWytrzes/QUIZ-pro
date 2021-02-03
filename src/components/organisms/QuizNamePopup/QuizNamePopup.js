import { useState } from 'react';
import { X } from 'react-feather';
import { Redirect } from 'react-router-dom';
import routes from '../../../utils/routes';
import Input from '../../atoms/Input/Input';
import {
	StyledH2,
	StyledButton,
	StyledLayer,
	StyledWrapper,
	StyledHeading,
	StyledClose,
} from './styles-QuizNamePopup';

const QuizNamePopup = ({ togglePopup }) => {
	const [quizName, setQuizName] = useState('');
	const [redirect, setRedirect] = useState(null);

	const createQuiz = () => {
		// TODO
		//create quiz in db

		setRedirect(routes.creator);
	};

	return (
		<>
			<StyledWrapper>
				<StyledHeading>
					<StyledH2> Nazwa nowego quizu </StyledH2>
					<StyledClose onClick={togglePopup}>
						<X />
					</StyledClose>
				</StyledHeading>
				<Input
					value={quizName}
					onChange={(e) => setQuizName(e.target.value)}
					placeholder="np. Podstawy języka Java"
				/>
				<StyledButton primary onClick={createQuiz}>
					Stwórz quiz
				</StyledButton>
			</StyledWrapper>
			<StyledLayer onClick={togglePopup}></StyledLayer>
			{redirect && <Redirect to={redirect} />}
		</>
	);
};

export default QuizNamePopup;
