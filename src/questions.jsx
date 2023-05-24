import React from "react";
import { SingleQuestion } from "./singleQuestion";

//Alternate Approach
export const Questions = ({ ques, activeId, toggleQuestion }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {ques.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
};

// Simple Approach
// export const Questions = ({ ques }) => {
//   return (
//     <section className="container">
//       <h1>Questions</h1>
//       {ques.map((question) => {
//         return (
//           <SingleQuestion key={question.id} {...question}></SingleQuestion>
//         );
//       })}
//     </section>
//   );
// };
