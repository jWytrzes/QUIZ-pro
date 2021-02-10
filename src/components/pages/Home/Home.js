import { useState, useEffect } from 'react';
import { RefreshCcw } from 'react-feather';
import { baseUrl, RESULTS } from '../../../utils';
import H2 from '../../atoms/H2/H2';
import QuizBox from '../../molecules/QuizBox/QuizBox';
import GridTemplate from '../../templates/GridTemplate/GridTemplate';
import { StyledHeading, StyledButton } from './styles-Home';

const Home = () => {
	const [lSData, setLsData] = useState([]);
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(`${baseUrl}quiz/`)
			.then((response) => response.json())
			.then((data) => setData(data.quizzes));

		const savedResults = JSON.parse(localStorage.getItem(RESULTS)) || [];
		setLsData(savedResults);
	}, []);

	const clearData = () => {
		if (lSData.length) {
			if (
				window.confirm(
					'Czy na pewno chcesz usunąć wyniki? Tej operacji nie można cofnąć.',
				)
			) {
				localStorage.removeItem(RESULTS);
				setLsData([]);
			}
		}
	};

	return (
		<>
			<StyledHeading>
				<H2> Dostępne quizy </H2>
				<StyledButton onClick={clearData}>
					Wyczyść dane <RefreshCcw size={18} />
				</StyledButton>
			</StyledHeading>
			<GridTemplate>
				{data.map((quiz) => {
					const lsObject = lSData.find((item) => item.id === quiz.id);
					let score = null;
					if (lsObject) {
						score = lsObject.score;
					}
					return <QuizBox key={quiz.id} data={quiz} score={score} />;
				})}
			</GridTemplate>
		</>
	);
};

export default Home;
