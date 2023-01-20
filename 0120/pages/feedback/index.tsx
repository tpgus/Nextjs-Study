import type { GetStaticProps } from "next";
import { useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback/index";

interface PropsType {
  feedbackItems: {
    id: string;
    email: string;
    text: string;
  }[];
}

interface FeedbackItem {
  id: string;
  email: string;
  text: string;
}

const FeedbackPage = (props: PropsType) => {
  const [feedbackData, setFeedbackData] = useState<FeedbackItem>(
    {} as FeedbackItem
  );

  const loadFeedbackHandler = (id: string) => {
    fetch("/api/feedback/" + id)
      .then((response) => response.json())
      .then((data) => setFeedbackData(data.items));
  };

  return (
    <>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => loadFeedbackHandler(item.id)}>
              show details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  //여기에서 내부 API를 사용할 때에는 fetch()를 사용하면 안됨 => 하나의 프로젝트 = 하나의 서버 = 그냥 바로 서버사이드 코드 작성.
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
};

export default FeedbackPage;
