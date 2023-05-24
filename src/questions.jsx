import React from "react";
import { SingleQuestion } from "./singleQuestion";

export const Questions = ({ ques }) => {
  return (
    <section className='container'>
        <h1>Questions</h1>
        {
            ques.map((question) => {
                return <SingleQuestion key={question.id} {...question} />
            })
        }
    </section>
  );
};
