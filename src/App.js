import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Creator from './components/pages/Creator/Creator';
import Home from './components/pages/Home/Home';
import Quiz from './components/pages/Quiz/Quiz';
import GlobalStyle from './utils/GlobalStyle';
import routes from './utils/routes';
import theme from './utils/theme';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router>
				<Switch>
					<Route exact path={routes.home}>
						<Home />
					</Route>
					<Route path={routes.quiz}>
						<Quiz />
					</Route>
					<Route path={routes.creator}>
						<Creator />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	);
};

export default App;
