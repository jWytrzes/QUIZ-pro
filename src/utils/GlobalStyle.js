import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
	}

	html, body {
		padding: 0;
		margin: 0;
		font-family: 'Montserrat', sans-serif;
	}

	body {
		background-color: ${({ theme }) => theme.base};
		color: ${({ theme }) => theme.text};
	}
`;

export default GlobalStyle;
