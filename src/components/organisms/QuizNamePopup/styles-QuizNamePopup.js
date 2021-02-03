import styled from 'styled-components';
import H2 from '../../atoms/H2/H2';
import Button from '../../atoms/Button/Button';

export const StyledWrapper = styled.div`
	padding: 2rem;
	border-radius: 1.5rem;
	box-shadow: 0 0.5rem 1.5rem ${({ theme }) => theme.shadow};
	background-color: ${({ theme }) => theme.white};
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	width: 100%;
	max-width: calc(100% - 4rem);
	z-index: 30;
	display: flex;
	flex-direction: column;

	@media (min-width: 992px) {
		width: 40%;
		max-width: 60rem;
	}
`;

export const StyledLayer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 20;
`;

export const StyledH2 = styled(H2)`
	margin-bottom: 2rem;
`;

export const StyledButton = styled(Button)`
	margin: 2rem 0 0 auto;
`;

export const StyledHeading = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const StyledClose = styled.button`
	background: none;
	border: none;
	padding: 0.5rem;
	line-height: 1;
	height: fit-content;
`;
