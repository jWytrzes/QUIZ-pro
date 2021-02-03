import Logo from '../../atoms/Logo/Logo';
import Username from '../../atoms/Username/Username';
import { StyledWrapper } from './styles-TopBar';

const TopBar = () => {
	return (
		<StyledWrapper>
			<Logo />
			<Username> 160816@stud.prz.edu.pl </Username>
		</StyledWrapper>
	);
};

export default TopBar;
