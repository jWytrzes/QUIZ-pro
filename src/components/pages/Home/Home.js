import { useState, useEffect } from 'react';
import { Plus } from 'react-feather';
import { baseUrl, RESULTS } from '../../../utils';
import data from '../../../utils/data';
import Button from '../../atoms/Button/Button';
import H2 from '../../atoms/H2/H2';
import QuizBox from '../../molecules/QuizBox/QuizBox';
import QuizNamePopup from '../../organisms/QuizNamePopup/QuizNamePopup';
import GridTemplate from '../../templates/GridTemplate/GridTemplate';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import { StyledHeading } from './styles-Home';

const Home = () => {
	const [isPopupVisible, setIsPopupVisible] = useState(false);
	const [lSData, setLsData] = useState([]);

	const togglePopup = () => {
		setIsPopupVisible(!isPopupVisible);
	};

	useEffect(() => {
		console.log(baseUrl);
		//TODO
		// fetch(`${baseUrl}quiz/`)
		// 	.then((response) => response.json())
		// 	.then((data) => console.log(data));

		const savedResults = JSON.parse(localStorage.getItem(RESULTS)) || [];
		setLsData(savedResults);
	}, []);

	return (
		<MainTemplate>
			<StyledHeading>
				<H2> Dostępne quizy </H2>
				{/* <Button primary onClick={togglePopup}>
					Nowy quiz <Plus size={18} />
				</Button> */}
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
			{isPopupVisible && <QuizNamePopup togglePopup={togglePopup} />}
		</MainTemplate>
	);
};

export default Home;
