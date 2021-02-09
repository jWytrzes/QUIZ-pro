import styled from 'styled-components';

export const StyledWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const StyledMarkersWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 3rem;
	width: 100%;
`;

export const StyledMarker = styled.button`
	display: flex;
	width: 100%;
	margin-right: 0.3rem;
	height: ${({ active }) => (active ? '2rem' : '1rem')};
	border-radius: 0.5rem;
	border: 1px solid
		${({ theme, done, result, isCorrect }) =>
			result && isCorrect != null
				? isCorrect
					? theme.success
					: theme.error
				: done
				? theme.primary
				: theme.border};
	background: ${({ theme, done, result, isCorrect }) =>
		result && isCorrect != null
			? isCorrect
				? theme.success
				: theme.error
			: done
			? theme.primary
			: theme.white};
	cursor: pointer;

	&:last-of-type {
		margin-right: 0;
	}

	@media (min-width: 992px) {
		margin-right: 1rem;
	}
`;
