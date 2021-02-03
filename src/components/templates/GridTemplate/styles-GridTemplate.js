import styled from 'styled-components';

export const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 2rem;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, minmax(200px, 1fr));
	}

	@media (min-width: 992px) {
		grid-template-columns: repeat(3, minmax(200px, 1fr));
	}

	@media (min-width: 1200px) {
		grid-template-columns: repeat(4, minmax(200px, 1fr));
	}
`;
