import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './components/pages/Home/Home';
import Quiz from './components/pages/Quiz/Quiz';
import MainTemplate from './components/templates/MainTemplate/MainTemplate';
import { DARK_THEME } from './utils';
import GlobalStyle from './utils/GlobalStyle';
import routes from './utils/routes';
import { lightTheme, darkTheme } from './utils/theme';

const App = () => {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const toggleTheme = (isDark) => {
		setIsDarkTheme(isDark);
		localStorage.setItem(DARK_THEME, isDark);
	};

	useEffect(() => {
		const savedTheme = JSON.parse(localStorage.getItem(DARK_THEME));
		savedTheme != null && setIsDarkTheme(savedTheme);
	}, []);

	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
			<GlobalStyle />
			<Router>
				<MainTemplate isDarkTheme={isDarkTheme} setIsDarkTheme={toggleTheme}>
					<Switch>
						<Route exact path={routes.home}>
							<Home />
						</Route>
						<Route path={routes.quiz}>
							<Quiz />
						</Route>
					</Switch>
				</MainTemplate>
			</Router>
		</ThemeProvider>
	);
};

export default App;
