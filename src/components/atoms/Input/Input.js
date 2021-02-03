import styled from 'styled-components';

const Input = styled.input`
	background-color: ${({ theme }) => theme.white};
	border-radius: 0.7rem;
	border: 1px solid rgba(35, 35, 35, 0.16);
	padding: 1.3rem 1.5rem;
	font-family: inherit;
	display: block;
	width: 100%;
	font-size: 1.6rem;

	&::placeholder {
		opacity: 0.23;
	}
`;

export default Input;
