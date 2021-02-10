import styled from 'styled-components';

export const StyledWrapper = styled.div`
	padding: 2rem;
	border-radius: 1.5rem;
	box-shadow: 0 0.5rem 1.5rem ${({ theme }) => theme.shadow};
	background-color: ${({ theme }) => theme.base2};
`;

export const StyledP = styled.p`
	margin-bottom: 1.5rem;
	margin-top: 0;
`;
