import styled from 'styled-components';
import check from '../../../assets/check.svg';

export const StyledWrapper = styled.div`
	margin-top: 1.5rem;
	display: flex;
	align-items: flex-start;
`;

export const FakeInput = styled.label`
	width: 1.8rem;
	height: 1.8rem;
	border-radius: 0.3rem;
	border: 1px solid
		${({ theme, disabled }) => (disabled ? '#bbb' : theme.primary)};
	margin: 0.2rem 0 0;
	position: relative;
	cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
	opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
	flex-shrink: 0;

	&::before {
		content: '';
		display: block;
		width: 1.5rem;
		height: 1.5rem;
		background-color: ${({ theme, disabled }) =>
			disabled ? '#bbb' : theme.primary};
		background-image: url(${check});
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		margin: 0;
		background-repeat: no-repeat;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		transform: scale(0);
		transition: transform 0.1s ease-out;
		border-radius: 0.2rem;
	}
`;

export const StyledLabel = styled.label`
	color: ${({ theme, markCorrect, markIncorrect }) =>
		markCorrect ? theme.success : markIncorrect ? theme.error : 'inherit'};
	font-weight: ${({ isChecked }) => (isChecked ? 'bold' : 'normal')};
	margin-left: 1rem;
	cursor: pointer;
	cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
`;

export const StyledInput = styled.input`
	position: absolute;
	opacity: 0;
	z-index: -9999;

	&:checked + ${FakeInput} {
		&::before {
			transform: scale(1);
		}
	}
`;
