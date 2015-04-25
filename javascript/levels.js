app = angular.module("quizlet");

app.factory("levels", function() {
  var levels = [
    {
      minimun_score: 2,
  		title: "Calouro do Marketing Digital",
  		text: "Você começou a trilhar agora o seu caminho em marketing digital. Continue firme e forte!"
  	},
    {
      minimun_score: 4,
  		title: "Recém-graduado em Marketing Digital",
  		text: "Você já aprendeu o essencial e está pronto para seguir seu caminho!"
  	},
    {
      minimun_score: 5,
  		title: "Expert em Marketing Digital",
  		text: "Você já sabe quase tudo de marketing digital."
  	},
    {
      minimun_score: 5,
      title: "Ninja do Marketing Digital",
      text: "Você sabe tudo de marketing digital. Me dá um autógrafo?"
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
