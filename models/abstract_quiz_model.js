Math.randomInt = function(x) {
  return Math.floor(Math.random()*x);
}

function AbstractQuiz(q) {
  this.q = q || [];
}

AbstractQuiz.prototype.randomQuestion = function() {
  var index = Math.randomInt(this.q.length);
  return this.q[index];
}

AbstractQuiz.prototype.nQuestions = function() {
  return this.q.length;
}

AbstractQuiz.prototype.getQuestion = function(n) {
  return this.q[n];
}

module.exports = AbstractQuiz;
