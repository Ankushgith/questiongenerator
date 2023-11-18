class QuestionStore {
    constructor() {
      this.questions = [];
    }
  
    addQuestion(question) {
      this.questions.push(question);
    }
  
    getQuestionsByDifficulty(difficulty) {
      return this.questions.filter(q => q.difficulty === difficulty);
    }
  }
  
  module.exports = QuestionStore;
  