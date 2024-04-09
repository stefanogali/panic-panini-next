import React, { useState } from "react";
import "../FAQStyle.css"; 

const Questions = [
  {
    question: "What is a CodeClash?",
    answer:
      "CodeClash is a hackathon where developers from diverse backgrounds all over India collaborate to create innovative software or hardware solutions within a limited timeframe.",
  },
  {
    question: "Who can attend CodeClash?",
    answer:
      "Everyone is welcome to join the CodeClash family! Whether you're a student from any course or college, we're thrilled to have you on board.",
  },
  {
    question: "I am a first-time participant, what should I do?",
    answer:
      "Welcome aboard, newbie! Don't fret, we're all about supporting our first-timers. Dive into our exciting workshops and events designed to kickstart your hackathon journey with a bang!",
  },
  {
    question: "How does team formation work for CodeClash?",
    answer:
      "Teamwork makes the dream work at CodeClash! Gather your squad of up to four members, or if you're flying solo, fear not! We'll help you connect with like-minded hackers to form the ultimate dream team.",
  },
  {
    question: "Is there a registration fee for CodeClash?",
    answer:
      "Nope, zero, nil! CodeClash is all about breaking barriers, and that includes registration fees. It's free for all passionate participants!",
  },
  {
    question: "Will there be swags?",
    answer:
      "You betcha! Get ready to snag some cool CodeClash swag as you dive into the hackathon frenzy. Who knows? You might just walk away with some awesome goodies!",
  },
  {
    question: "How do I contact CodeClash?",
    answer:
      "Need directions to the most electrifying event of the year? Drop us a line at codeclash.glbitm@gmail.com, and we'll point you in the right direction. Let's make magic happen together at CodeClash!",
  },
];

const Question = () => {
  const [openQuestions, setOpenQuestions] = useState(Array(Questions.length).fill(false));

  const toggleQuestion = (index) => {
    const updatedOpenQuestions = [...openQuestions];
    updatedOpenQuestions[index] = !updatedOpenQuestions[index];
    setOpenQuestions(updatedOpenQuestions);
  };

  return (
    <div>
      {Questions.map((q, index) => (
        <div key={index} className="px-6 py-3">
          <div className="flex justify-between" onClick={() => toggleQuestion(index)}>
            <p className="font-bold py-2">{q.question}</p>
            {openQuestions[index] ? <img src={"./faqimages/icon-minus.svg"} alt="" className="filter grayscale"/> : <img src={"./faqimages/icon-plus.svg"} alt="" className="filter grayscale"/>}
          </div>
          {openQuestions[index] && <p className="px-3 py-3 text-zinc-400 text-lg leading-5 tracking-wider">{q.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Question;
