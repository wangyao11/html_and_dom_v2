var Questions = require("./questions");
var _ = require("lodash");

function Question(name, rightAnswer, scorce){
  this.name = name;
  this.rightAnswer = rightAnswer;
  this.scorce = scorce;
}
Question.all = function(){
  return Questions.getQuestions();
};

Question.prototype.calculateScorce = function () {

};

module.exports = Question;
