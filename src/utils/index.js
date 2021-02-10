export const baseUrl = 'http://localhost:8088/api/v1/';
export const RESULTS = 'QUIZ_RESULTS';

export const checkIfUserAnswerIsCorrect = (question) => {
	let correct = 0;
	for (let i = 0; i < question.answers.length; i++) {
		const a = question.answers[i];
		let userAnswer = a.checked;

		if (userAnswer === undefined) userAnswer = false;

		if (a.isCorrect === userAnswer) {
			correct++;
		}
	}
	if (correct === question.answers.length) return true;
	return false;
};

export const countScore = (questions) => {
	let score = 0;

	questions.forEach((q) => {
		const isCorrect = checkIfUserAnswerIsCorrect(q);
		if (isCorrect) score++;
	});

	return score;
};

export const checkIfPassed = (score, max) => {
	if (score / max > 0.5) return true;
	return false;
};

export const setQuizResultsToLs = (quizResult) => {
	const LSArr = JSON.parse(localStorage.getItem(RESULTS)) || [];
	const index = LSArr.findIndex((item) => item.id === quizResult.id);
	if (index < 0) {
		LSArr.push(quizResult);
		localStorage.setItem(RESULTS, JSON.stringify(LSArr));
	}
};