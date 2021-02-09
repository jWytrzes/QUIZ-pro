import styled from 'styled-components';

export const StyledWrapper = styled.div`
	padding: 1.8rem;
	border-radius: 0.7rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ theme, passed }) =>
		passed ? theme.successSecondary : theme.errorSecondary};
	line-height: 1;
`;

export const StyledPoint = styled.div`
	font-weight: 600;
	color: ${({ theme, passed }) => (passed ? theme.success : theme.error)};
`;
