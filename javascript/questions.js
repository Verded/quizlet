app = angular.module("quizlet");

app.factory("questions", function() {
  var questions = [
    {
  			question: "Which is the largest country in the world by population?",
  			options: ["India", "USA", "China", "Russia"],
  			answer: 2,
        links: [
          { name: "China on Wikipedia", link: "http://www.example.com" },
        ]
  		},
  		{
  			question: "When did the second world war end?",
  			options: ["1945", "1939", "1944", "1942"],
  			answer: 0,
        links: [
          { name: "The second world war", link: "http://www.example.com" }
        ]
  		},
  		{
  			question: "Which was the first country to issue paper currency?",
  			options: ["USA", "France", "Italy", "China"],
  			answer: 3,
        links: [
          { name: "The paper currency history", link: "http://www.example.com" }
        ]
  		},
  		{
  			question: "Which city hosted the 1996 Summer Olympics?",
  			options: ["Atlanta", "Sydney", "Athens", "Beijing"],
  			answer: 0,
        links: [
          { name: "The Olympics official website", link: "http://www.example.com" }
        ]
  		},
  		{
  			question: "Who invented telephone?",
  			options: ["Albert Einstein", "Alexander Graham Bell", "Isaac Newton", "Marie Curie"],
  			answer: 1,
        links: [
          { name: "The inventors index", link: "http://www.example.com" }
        ]
  		}
  ];

  return {
    length: function() { return questions.length; },
		getQuestion: function(id) {
			if(id < questions.length) {
				return questions[id];
			} else {
				return false;
			}
		}
  };
});
