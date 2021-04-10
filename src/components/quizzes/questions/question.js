import React, {useState, useEffect} from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";
import "./questions.style.client.css";

const Question = ({question, quizId}) => {
    const [answer, setAnswer] = useState(null) // temp answer
    const [submitted, setSubmitted] = useState(null) // answer for graded

    return(
        <div>
            <h4>
                {question.question} &nbsp; 
                {
                    submitted !== null &&
                    <span>
                    {
                        submitted === question.correct &&
                        <i className="fas fa-check"></i>
                    }
                    {
                        submitted !== question.correct &&
                        <i className="fas fa-times"></i>
                    }
                    </span>
                }

            </h4>        
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion
                    question={question}
                    answer={answer}
                    setAnswer={setAnswer}
                    submitted={submitted}
                    setSubmitted={setSubmitted}
                    />
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion
                    question={question}
                    answer={answer}
                    setAnswer={setAnswer}
                    submitted={submitted}
                    setSubmitted={setSubmitted}
                    />
            }
            <br/>
            <span className="float-left">
                Your Answer: 
            </span>
            {
                submitted &&
                <span>
                    {submitted}
                </span>
            }            
            <br/>
            <button 
                type="button" 
                className="btn btn-success float-left"
                onClick={() => setSubmitted(answer)}>
                Grade
            </button>                    
        </div>
    )
}

export default Question;