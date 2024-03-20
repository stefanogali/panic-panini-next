"use client";

import ButtonGhost from "../CustomButtons/ButtonOutline";

export default function FooterForm() {
  return (
    <div className="mt-4 w-full max-w-[35rem] lg:w-10/12">
      <div className=" lg:justify-end">
        <a
          // href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonGhost>Call for Sponsors</ButtonGhost>
        </a>
        <a
          // href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonGhost>Call for Mentors & Judges</ButtonGhost>
        </a>
        <a
          // href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonGhost>Call for Community Partners</ButtonGhost>
        </a>
      </div>
    </div>
  );
}
