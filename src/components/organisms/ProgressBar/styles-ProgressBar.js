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
	margin: 0 0.3rem 0 0;
	height: 1rem;
	border-radius: 0.5rem;
	transform: ${({ active }) => (active ? 'scaleY(1.5)' : 'scaleY(1)')};
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
	transition: transform 0.2s ease-out, background 0.2s ease-out,
		height 0.2s ease-out;
	outline: none;

	&:last-of-type {
		margin-right: 0;
	}

	@media (min-width: 992px) {
		margin-right: 1rem;
	}
`;
