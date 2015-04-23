app = angular.module("quizlet");

app.factory("levels", function() {
  var levels = [
    {
      minimun_score: 2,
  		title: "Time to study!",
  		text: "You need to study more"
  	},
    {
      minimun_score: 4,
  		title: "On the way!",
  		text: "You can study a little bit"
  	},
    {
      minimun_score: 5,
  		title: "Nerd herd!",
  		text: "Do you have any relationship with Albert Einstein?"
  	}
  ];

  return {
		getLevel: function(score) {
      filtered = levels.filter(function(level) {
        return level.minimun_score >= score;
      });

      return filtered[0];
		}
  };
});
