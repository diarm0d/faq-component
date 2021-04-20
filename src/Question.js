import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  return <article className="question">
    <header>
      <h4>{props.question}</h4>
      <button className="btn" onClick={() => setShowInfo(!showInfo)}>
        { !showInfo ? <AiOutlinePlus /> : <AiOutlineMinus /> }
      </button>
    </header>
    { showInfo && <p>{props.answer}</p> }
  </article>;
};

export default Question;
