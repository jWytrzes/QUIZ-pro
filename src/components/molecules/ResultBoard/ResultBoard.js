import { checkIfPassed } from '../../../utils';
import { StyledInner, StyledScore, StyledH3 } from './styles-ResultBoard';

const ResultBoard = ({ score, max }) => {
	const isPassed = checkIfPassed(score, max);
	return (
		<StyledInner>
			<StyledH3> Zdobyte punkty </StyledH3>
			<StyledScore isPassed={isPassed}>
				{score}/{max}
			</StyledScore>
			<div> Quiz {!isPassed && `nie`} został zaliczony. </div>
		</StyledInner>
	);
};

export default ResultBoard;
