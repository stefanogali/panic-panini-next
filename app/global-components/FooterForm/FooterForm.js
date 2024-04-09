"use client";

import ButtonGhost from "../CustomButtons/ButtonOutline";

export default function FooterForm() {
  return (
    <div className="w-full max-w-[35rem] lg:w-10/12">
      <div className=" lg:justify-end">
        <a
          href="https://drive.google.com/file/d/1z0KJsr7jtzcsLrp3YIBEwGjqPRgOzBaN/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonGhost>Code Of Conduct</ButtonGhost>
        </a>
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
