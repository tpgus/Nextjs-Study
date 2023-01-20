import React, { useRef, useState } from "react";
interface FeedBackItems {
  id: string;
  email: string;
  text: string;
}

const HomePage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const feedbackRef = useRef<HTMLTextAreaElement>(null);
  const [feedbackItems, setFeedbackItems] = useState<FeedBackItems[]>([]);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredEmail = emailRef.current!.value;
    const enteredFeedback = feedbackRef.current!.value;

    const reqBody = { email: enteredEmail, feedback: enteredFeedback };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const loadFeedbackHandler = () => {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => setFeedbackItems(data.feedback));
  };

  return (
    <div>
      <h1>home page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">email</label>
          <input ref={emailRef} id="email" type="eamil" />
        </div>
        <div>
          <label htmlFor="feedback">feedback</label>
          <textarea ref={feedbackRef} rows={5} id="feedback" />
        </div>
        <button>send</button>
      </form>
      <button onClick={loadFeedbackHandler}>load feedback</button>
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
