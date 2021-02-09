import styled from 'styled-components';

const Button = styled.button`
	font-size: 1.6rem;
	font-weight: 600;
	padding: 1.8rem 3.2rem;
	display: inline-flex;
	align-items: center;
	border: none;
	border-radius: 0.7rem;
	font-family: inherit;
	background-color: ${({ primary, theme }) =>
		primary ? theme.primary : theme.secondary};
	color: ${({ primary, theme }) => (primary ? theme.white : theme.primary)};
	cursor: pointer;
	text-decoration: none;
	min-width: 17.9rem;
	justify-content: center;

	svg {
		margin-left: ${({ leftIcon }) => (leftIcon ? 0 : '1.1rem')};
		margin-right: ${({ leftIcon }) => (leftIcon ? '1.1rem' : 0)};
		flex-shrink: 0;
	}
`;

export default Button;
