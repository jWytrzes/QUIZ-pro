import styled from 'styled-components';

export const StyledWrapper = styled.div`
	background-color: ${({ theme }) => theme.white};
	border-radius: 0.7rem;
	margin: 2rem 0;
	box-shadow: 0 0.3rem 0.6rem ${({ theme }) => theme.shadow};
	padding: 2rem;
	min-height: 29.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	& > div {
		width: 100%;
	}

	@media (min-width: 992px) {
		padding: 4rem;
		margin: 5rem 0;
	}
`;
