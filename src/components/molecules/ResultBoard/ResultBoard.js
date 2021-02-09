import { checkIfPassed } from '../../../utils';
import {
	StyledInner,
	StyledScore,
	StyledWrapper,
	StyledH3,
} from './styles-ResultBoard';

const ResultBoard = ({ score, max }) => {
	const isPassed = checkIfPassed(score, max);
	return (
		<StyledWrapper>
			<StyledInner>
				<StyledH3> Zdobyte punkty </StyledH3>
				<StyledScore isPassed={isPassed}>
					{score}/{max}
				</StyledScore>
				<div> Quiz {!isPassed && `nie`} został zaliczony. </div>
			</StyledInner>
		</StyledWrapper>
	);
};

export default ResultBoard;
