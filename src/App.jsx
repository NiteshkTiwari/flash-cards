import { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="flashcards">
      {questions.map((e) => (
        <FlashCard
          key={e.id}
          question={e.question}
          answer={e.answer}
          selected={selectedCard === e.id}
          onClick={() => setSelectedCard(selectedCard === e.id ? null : e.id)}
        />
      ))}
    </div>
  );
}

function FlashCard({ question, answer, selected, onClick }) {
  return (
    <div className={selected ? "selected" : ""} onClick={onClick}>
      {selected ? answer : question}
    </div>
  );
}

export default App;
