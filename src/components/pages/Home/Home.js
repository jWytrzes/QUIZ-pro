import { Plus } from 'react-feather';
import Button from '../../atoms/Button/Button';
import H2 from '../../atoms/H2/H2';
import QuizBox from '../../molecules/QuizBox/QuizBox';
import GridTemplate from '../../templates/GridTemplate/GridTemplate';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import { StyledHeading } from './styles-Home';

const quizes = [
	{
		title: 'Podstawy języka Kotlin',
		questions: new Array(20),
		id: 1,
		completed: false,
	},
	{
		title: 'Dziedziczenie',
		questions: new Array(10),
		id: 1,
		completed: false,
	},
	{
		title: 'Podstawy języka Java',
		questions: new Array(16),
		id: 1,
		completed: 4,
	},
	{
		title: 'Podstawy języka Kotlin',
		questions: new Array(16),
		id: 1,
		completed: 14,
	},
];

const Home = () => {
	return (
		<MainTemplate>
			<StyledHeading>
				<H2> Dostępne quizy </H2>
				<Button primary>
					Nowy quiz <Plus size={18} />
				</Button>
			</StyledHeading>
			<GridTemplate>
				{quizes.map((quiz, id) => (
					<QuizBox key={id} data={quiz} id={id} />
				))}
			</GridTemplate>
		</MainTemplate>
	);
};

export default Home;
