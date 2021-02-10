import { Moon, Sun } from 'react-feather';
import { StyledButton } from './styles.ToggleTheme';

const ToggleTheme = ({ isDarkTheme, setIsDarkTheme }) => {
	return (
		<StyledButton onClick={() => setIsDarkTheme(!isDarkTheme)}>
			{isDarkTheme ? (
				<>
					Tryb dzienny <Sun size={20} />
				</>
			) : (
				<>
					Tryb nocny <Moon size={20} />
				</>
			)}
		</StyledButton>
	);
};

export default ToggleTheme;
