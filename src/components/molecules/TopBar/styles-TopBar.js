import styled from 'styled-components';

export const StyledWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 2rem;
	margin-bottom: 5rem;

	@media (min-width: 992px) {
		padding: 1rem 2rem;
		margin-bottom: 10rem;
	}
`;
