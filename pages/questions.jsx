import { Container } from "@mui/material";

const { default: QuestionList } = require("@components/QuestionList");

function QuestionsPage({ questions }) {
  return (
    <Container>
      <QuestionList questions={questions} />
    </Container>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/questions`);
  const data = await res.json();
  // console.log(`data: `, data); // this will be logged on the server
  return {
    props: {
      questions: data,
    },
    revalidate: 1,
  };
}

export default QuestionsPage;
