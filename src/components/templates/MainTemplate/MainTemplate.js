import TopBar from '../../molecules/TopBar/TopBar';
import { StyledInner } from './styles-MainTemplate';

const MainTemplate = ({ children }) => {
	return (
		<div>
			<TopBar />
			<StyledInner>{children}</StyledInner>
		</div>
	);
};

export default MainTemplate;
