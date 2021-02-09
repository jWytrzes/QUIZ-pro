import styled from 'styled-components';
import H3 from '../../atoms/H3/H3';

export const StyledWrapper = styled.div`
	min-height: 29.5rem;
	background-color: ${({ theme }) => theme.white};
	border-radius: 0.7rem;
	margin: 2rem 0;
	box-shadow: 0 0.3rem 0.6rem ${({ theme }) => theme.shadow};
	padding: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (min-width: 992px) {
		padding: 4rem;
		margin: 5rem 0;
	}
`;

export const StyledInner = styled.div`
	text-align: center;
`;

export const StyledScore = styled.div`
	font-size: 9.6rem;
	font-weight: 900;
	color: ${({ theme, isPassed }) => (isPassed ? theme.success : theme.error)};
`;

export const StyledH3 = styled(H3)`
	margin-bottom: 0;
`;
