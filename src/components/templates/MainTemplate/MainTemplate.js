import TopBar from '../../organisms/TopBar/TopBar';
import { StyledInner } from './styles-MainTemplate';

const MainTemplate = ({ isDarkTheme, setIsDarkTheme, children }) => {
	return (
		<div>
			<TopBar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
			<StyledInner>{children}</StyledInner>
		</div>
	);
};

export default MainTemplate;
