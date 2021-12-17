import Link from "next/link";

function QuestionList({ questions }) {
  return (
    <ul>
      {questions.map((question, index) => {
        return (
          <li key={index}>
            <Link href={`/${question.id}`}>{question.question}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default QuestionList;
