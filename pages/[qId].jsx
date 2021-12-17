import Link from "next/link";
import { useEffect } from "react";
// import { useRouter } from "next/router";
// import questionsData from "../mockData/questions";

function QuestionDetails({ question }) {
  useEffect(() => {
    console.log(`question.embed`, question.embed);
  }, []);
  // const router = useRouter();
  // const qId = router.query.qId;
  // const question = questionsData.find((question) => question.id == qId);
  return (
    <div>
      <h1>{question.question}</h1>
      <p>{question.answer}</p>
      {/* {question.links.length &&
        question.links.map((link, i) => {
          return (
            <div key={i}>
              <p>
                <span>
                  <a href={link} target="_blank" rel="noreferrer">
                    Link_{i}
                  </a>
                </span>
              </p>
            </div>
          );
        })} */}
      {/* {question.embed} */}
      {/* <iframe
        src="https://codesandbox.io/embed/explain-memory-leak-0wtoc?fontsize=14&hidenavigation=1&theme=dark"
        style={{
          width: "100%",
          height: "500px",
          border: 0,
          borderRadius: "4px",
          overflow: "hidden",
        }}
        title="explain-memory-leak"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      /> */}
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/questions");
  const data = await res.json();
  const paths = data.map((question) => ({
    params: { qId: `${question.id}` },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const qId = context.params.qId;
  const res = await fetch(`http://localhost:3000/api/questions?qId=${qId}`);
  const data = await res.json();
  return {
    props: {
      question: data,
    },
  };
}

export default QuestionDetails;
