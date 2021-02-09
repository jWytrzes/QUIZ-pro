import styled from 'styled-components';
import H3 from '../../atoms/H3/H3';

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
