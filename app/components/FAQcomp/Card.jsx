import React from "react";
// import staricon from ""; 
//import "./index.css";
import Question from "../FAQcomp/Question";

const Card = () => {
  return (
    <div>
      {/* "h-[650px] w-[600px] bg-white rounded-lg absolute left-[50%] top-[50%]  ml-[-300px] mt-[-325px]" */}
      {/* <div className="bg-white mx-auto max-w-4xl min-w-fit mt-50 rounded-lg sm:max-w-lg" id="container"> */}
      <div className="bg-white mx-auto max-w-4xl mt-50 rounded-lg" id="container">
        <div className="flex py-6 px-6 gap-4">
          <span>
            <img src={"./faqimages/icon-star.svg"} alt="" className="mt-1" />
          </span>
          <h1 className="text-5xl font-extrabold" id="faq">FAQs</h1>
        </div>
        <Question />
      </div>
    </div>
  );
};

export default Card;