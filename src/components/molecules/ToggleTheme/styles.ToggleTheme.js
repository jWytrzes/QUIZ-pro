import styled from 'styled-components';

export const StyledButton = styled.button`
	margin: 0;
	border: none;
	background-color: ${({ theme }) => theme.text};
	color: ${({ theme }) => theme.base};
	border-radius: 0.7rem;
	padding: 1.8rem 3.2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.6rem;
	font-weight: 600;
	font-family: inherit;
	cursor: pointer;

	svg {
		margin-left: 1.1rem;
	}
`;
