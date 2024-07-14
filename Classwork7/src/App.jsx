import React, { useState } from "react";

function App() {
  const answers = [
    "დარწმუნებული ვარ.",
    "დიახ.",
    "უდაოდ.",
    "შესაძლებელია.",
    "სავარაუდოდ კი.",
    "პასუხის გაცემა მიჭირს, ახლიდან მკითხე.",
    "სჯობს ახლა არ გითხრა.",
    "არა.",
    "არასდროს.",
    "ცუდი იდეაა.",
    "არ გარისკო!",
  ];

  const [answer, setAnswer] = useState("");

  const asker = () => {
    let int = Math.floor(Math.random() * answers.length);
    setAnswer(answers[int]);
  };
  return (
    <>
      <input type="text" />
      <button onClick={asker}>Ask</button>
      <h1>{answer.length === 0 ? "მკითხე რაც გინდა" : answer}</h1>
    </>
  );
}

export default App;
