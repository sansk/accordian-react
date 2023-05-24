import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

//Alternate Approach
export const SingleQuestion = ({
  id,
  title,
  info,
  activeId,
  toggleQuestion,
}) => {
  const isActive = id === activeId;

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => toggleQuestion(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};

// Simple Approach
// const SingleQuestion = ({ title, info }) => {
//   const [showInfo, setShowInfo] = useState(false);
//   return (
//     <article className="question">
//       <header>
//         <h5>{title}</h5>
//         <button className="question-btn" onClick={() => setShowInfo(!showInfo)}>
//           {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
//         </button>
//       </header>
//       {showInfo && <p>{info}</p>}
//     </article>
//   );
// };