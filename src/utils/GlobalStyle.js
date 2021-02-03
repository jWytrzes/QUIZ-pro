import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
	}

	html, body {
		padding: 0;
		margin: 0;
		font-family: 'Montserrat', sans-serif;
	}

	html {
		font-size: 62.5%;
	}

	body {
		background-color: ${({ theme }) => theme.base};
		color: ${({ theme }) => theme.text};
		 font-size: 16px; 
		font-size: 1.6rem;
		line-height: 1.5;
	}
`;

export default GlobalStyle;
