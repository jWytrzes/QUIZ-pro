import styled from 'styled-components';

export const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 2rem;

	@media (min-width: 768px) {
		grid-template-columns: minmax(200px, 1fr) minmax(200px, 1fr);
	}

	@media (min-width: 992px) {
		grid-template-columns: minmax(200px, 1fr) minmax(200px, 1fr) minmax(
				200px,
				1fr
			);
	}

	@media (min-width: 1200px) {
		grid-template-columns:
			minmax(200px, 1fr) minmax(200px, 1fr) minmax(200px, 1fr)
			minmax(200px, 1fr);
	}
`;
