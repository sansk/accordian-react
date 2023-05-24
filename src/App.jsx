import { useState } from "react";
import { Questions } from "./questions";

import data from "./data";

const App = () => {
  // Alternate Approach
  const [ques, setQues] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <main>
      <Questions
        ques={ques}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  );

  // Simple Approach
  //   const [ques, setQues] = useState(data);

  //   return (
  //     <main>
  //       <Questions ques={ques} />
  //     </main>
  //   );
};
export default App;
