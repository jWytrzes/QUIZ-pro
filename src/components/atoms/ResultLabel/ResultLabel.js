import React from 'react';
import { StyledPoint, StyledWrapper } from './styles-ResultLabel';

const ResultLabel = ({ points, max }) => {
	const passed = (points / max) * 100 > 50;

	return (
		<StyledWrapper passed={passed}>
			Ukończono: <StyledPoint passed={passed}> {points}pkt </StyledPoint>
		</StyledWrapper>
	);
};

export default ResultLabel;
