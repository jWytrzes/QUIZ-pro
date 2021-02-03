import styled from 'styled-components';

export const StyledHeading = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 3rem;

	button {
		margin-left: auto;
	}

	@media (min-width: 992px) {
		margin-bottom: 5rem;
	}
`;
