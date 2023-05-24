import { useState } from "react";
import { Questions } from "./questions";

import data from "./data";

const App = () => {
  const [ques, setQues] = useState(data);

  return (
    <main>
      <Questions ques={ques} />
    </main>
  );
};
export default App;
