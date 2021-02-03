import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const H1 = styled.h1`
	margin: 0;
	padding: 0;
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.text};
`;

export const Img = styled.img`
	height: 5.5rem;
	display: block;

	@media (min-width: 992px) {
		height: 6.7rem;
	}
`;
