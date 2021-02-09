import styled from 'styled-components';

export const StyledWrapper = styled.div`
	background-color: ${({ theme }) => theme.white};
	border-radius: 0.7rem;
	margin: 2rem 0;
	box-shadow: 0 0.3rem 0.6rem ${({ theme }) => theme.shadow};
	padding: 2rem;

	@media (min-width: 992px) {
		padding: 4rem;
		margin: 5rem 0;
	}
`;
