import React, { useState } from 'react';
import data from './data';
import Question from './Question';

function App() {
  const [questions, setQuestions] = useState(data);
  return <main>
    <div className="container">
      <h3>Questions and ansers about login</h3>
      <section className="info">
      {questions.map(question => <Question key={question.id} question={question.title} answer={question.info} />)}
      </section>
    </div>
  </main>;
}

export default App;
