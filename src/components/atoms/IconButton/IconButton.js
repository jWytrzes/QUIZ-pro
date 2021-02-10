import styled from 'styled-components';

const IconButton = styled.button`
	font-size: 1.6rem;
	font-weight: 600;
	width: 4.7rem;
	height: 4.7rem;
	padding: 0.8rem;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: none;
	border-radius: 0.7rem;
	font-family: inherit;
	background-color: ${({ primary, success, theme }) =>
		primary
			? theme.primary
			: success
			? theme.successSecondary
			: theme.errorSecondary};
	color: ${({ primary, success, theme }) =>
		primary ? theme.base2 : success ? theme.success : theme.error};
	border: 1px solid
		${({ primary, success, theme }) =>
			primary ? theme.primary : success ? theme.success : theme.error};
	cursor: pointer;
	margin-left: 2rem;
	flex-shrink: 0;

	@media (min-width: 992px) {
		margin-left: 4rem;
	}
`;

export default IconButton;
