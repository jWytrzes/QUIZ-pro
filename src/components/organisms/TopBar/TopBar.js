import Logo from '../../atoms/Logo/Logo';
import ToggleTheme from '../../molecules/ToggleTheme/ToggleTheme';
import { StyledWrapper } from './styles-TopBar';

const TopBar = ({ isDarkTheme, setIsDarkTheme }) => {
	return (
		<StyledWrapper>
			<Logo />
			<ToggleTheme isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
		</StyledWrapper>
	);
};

export default TopBar;
