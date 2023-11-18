# questiongenerator
Question Paper Generator
This is a Question Paper Generator application that allows you to store questions and generate question papers based on specified criteria.
question-paper-generator/
|-- backend/
|   |-- node_modules/
|   |-- routes/
|       |-- questions.js
|   |-- models/
|       |-- Question.js
|       |-- QuestionStore.js
|       |-- QuestionPaperGenerator.js
|   |-- index.js
|   |-- package.json
|   |-- package-lock.json
|-- frontend/
|   |-- node_modules/
|   |-- src/
|       |-- components/
|           |-- QuestionList.js
|           |-- AddQuestionForm.js
|           |-- GeneratePaperButton.js
|       |-- pages/
|           |-- Home.js
|       |-- redux/
|           |-- actions/
|           |-- reducers/
|           |-- store.js
|       |-- App.js
|       |-- index.js
|-- package.json

backend: Contains the Node.js backend code.
frontend: Contains the React frontend code.

Run the backend server: node index.js
Run the frontend: npm start

