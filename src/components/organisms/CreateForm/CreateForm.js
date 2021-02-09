import { useState, useEffect, useRef } from 'react';
import { Plus, Check } from 'react-feather';
import QuestionInput from '../../molecules/QuestionInput/QuestionInput';
import AnswersGroup from '../AnswersGroup/AnswersGroup';
import { StyledForm, StyledButton } from './styles-CreateForm';

const CreateForm = () => {
	const blankQuestion = {
		content: '',
		answers: [],
	};
	const blankAnswer = {
		description: '',
		isCorrect: true,
	};
	const [questionsState, setQuestionsState] = useState([{ ...blankQuestion }]);

	const addQuestionInput = () => {
		console.log('add input');
		// setQuestions([...questions, { ...blankQuestion }]);
		const newQuestions = JSON.parse(JSON.stringify(questionsState));
		newQuestions.push({ ...blankQuestion });
		setQuestionsState(newQuestions);
	};

	const publishQuestion = (q) => {
		console.log('publish question');
		// console.log('bef mod: ', questions, [...questions]);
		if (q.replace(/\s/g, '').length > 1) {
			// TODO
			// publish question to dbb
			const newQuestions = JSON.parse(JSON.stringify(questionsState));
			console.log('aft copy:', newQuestions);
			newQuestions[newQuestions.length - 1].answers.push(blankAnswer);
			setQuestionsState(newQuestions);
			console.log('aft mods: ', newQuestions);
		}
	};

	const prevQuestionsRef = useRef();
	useEffect(() => {
		console.log('USE EFFECT', prevQuestionsRef.current, questionsState);
		prevQuestionsRef.current = questionsState;
		if (
			prevQuestionsRef.current[prevQuestionsRef.current.length - 1].answers
				.length != questionsState[questionsState.length - 1].answers
		) {
			addQuestionInput();
		}
	}, [questionsState]);

	return (
		<StyledForm>
			{questionsState.map((val, i) => (
				<QuestionInput
					key={`question-${i}`}
					id={i}
					publishQuestion={publishQuestion}
					answers={val.answers}
				/>
			))}
			{/* <StyledButton onClick={addQuestionInput} type="button">
				Nowe pytanie <Plus size={18} />
			</StyledButton> */}
			<StyledButton type="submit" primary>
				Opublikuj quiz <Check size={18} />
			</StyledButton>
		</StyledForm>
	);
};

export default CreateForm;
