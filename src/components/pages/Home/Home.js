import { useState, useEffect } from 'react';
import { baseUrl, RESULTS } from '../../../utils';
import H2 from '../../atoms/H2/H2';
import QuizBox from '../../molecules/QuizBox/QuizBox';
import GridTemplate from '../../templates/GridTemplate/GridTemplate';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import { StyledHeading } from './styles-Home';

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

	return (
		<MainTemplate>
			<StyledHeading>
				<H2> Dostępne quizy </H2>
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
		</MainTemplate>
	);
};

export default Home;
