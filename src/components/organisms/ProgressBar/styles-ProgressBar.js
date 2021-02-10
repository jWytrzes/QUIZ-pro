import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

export const StyledWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;

	@media (min-width: 992px) {
		flex-wrap: nowrap;
	}
`;

export const StyledMarkersWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 0 2rem;
	width: 100%;
	order: 1;

	@media (min-width: 992px) {
		order: unset;
		margin-bottom: 0;
		margin: 0 3rem;
	}
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
			: theme.base2};
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

export const StyledButton = styled(Button)`
	order: 2;
	width: 47%;
	min-width: unset;

	svg {
		transition: transform 0.2s ease-out;
	}

	&:hover {
		svg {
			transform: ${({ leftIcon }) =>
				leftIcon ? 'translateX(-1rem)' : 'translateX(1rem)'};
		}
	}

	@media (min-width: 992px) {
		order: unset;
		width: auto;
		min-width: inherit;
	}
`;
