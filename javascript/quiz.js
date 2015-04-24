app = angular.module("quizlet");

app.directive('quiz', function(questions, levels) {
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: 'quiz.html',
		link: function(scope, elem, attrs) {
			scope.start = function() {
				scope.id = 0;
        scope.score = 0;
        scope.wrong_questions = [];
        scope.email = "";

				scope.quizOver = false;
				scope.inProgress = true;

				scope.getQuestion();
			};

			scope.reset = function() {
				scope.inProgress = false;
				scope.score = 0;
			}

			scope.getQuestion = function() {
				var question = questions.getQuestion(scope.id);

				if(question) {
					scope.question = question.question;
					scope.options = question.options;
					scope.answer = question.answer;
				} else {
          scope.level = levels.getLevel(scope.score);
					scope.quizOver = true;
				}
			};

			scope.checkAnswer = function() {
				if(!$('input[name=answer]:checked').length) return;

				var ans = $('input[name=answer]:checked').val();

				if(ans == scope.options[scope.answer]) {
					scope.score++;
				} else {
					scope.wrong_questions.push(questions.getQuestion(scope.id));
				}

        scope.nextQuestion();
			};

			scope.nextQuestion = function() {
				scope.id++;
				scope.getQuestion();
			}

			scope.reset();
		}
	}
});
