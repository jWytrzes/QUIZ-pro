import H2 from '../../atoms/H2/H2';
import H3 from '../../atoms/H3/H3';
import CreateForm from '../../organisms/CreateForm/CreateForm';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';

const Creator = () => {
	const data = {
		name: 'Podstawy języka Java',
	};

	return (
		<MainTemplate>
			<H2> Quiz: {data.name} </H2>
			<H3> Pytania </H3>
			<CreateForm />
		</MainTemplate>
	);
};

export default Creator;
