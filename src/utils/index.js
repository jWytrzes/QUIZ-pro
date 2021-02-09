export const countScore = (questions) => {
	let score = 0;

	questions.forEach((q) => {
		let correct = 0;
		for (let i = 0; i < q.answers.length; i++) {
			const a = q.answers[i];
			let userAnswer = a.checked;

			if (userAnswer === undefined) userAnswer = false;

			if (a.isCorrect === userAnswer) {
				correct++;
			}
		}
		if (correct === q.answers.length) score++;
	});

	return score;
};

export const checkIfPassed = (score, max) => {
	if (score / max > 0.5) return true;
	return false;
};
