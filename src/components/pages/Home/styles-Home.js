import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

export const StyledHeading = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 3rem;

	h2 {
		margin-bottom: 0;
	}

	button {
		margin-left: auto;
	}

	@media (min-width: 992px) {
		margin-bottom: 5rem;
	}
`;

export const StyledButton = styled(Button)`
	background-color: ${({ theme }) => theme.errorSecondary};
	color: ${({ theme }) => theme.error};
`;
