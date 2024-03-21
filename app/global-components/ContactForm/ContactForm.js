"use client";
import React, { useState } from "react";
import ButtonPrimary from "../CustomButtons/ButtonPrimary";
import { mailer } from "./mailer";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formHandler = async (event) => {
    event.preventDefault();
    console.log("form submitted!");
    const { name, email, message } = formData;
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    await mailer(name, email, message);
  };

  return (
    <form
      className="mt-6 w-full max-w-[35rem] xl:max-w-xl"
      onSubmit={formHandler}
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            className="block text-sm font-medium leading-6 text-gray-900"
            htmlFor="name"
          >
            Your Name
          </label>
          <input
            required
            className="block w-full bg-transparent rounded-md border-[2px] shadow-none p-2.5 placeholder:text-gray-400 focus:outline-none focus:ring-2 sm:leading-0 text-xs"
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label
            className="block text-sm font-medium leading-6 text-gray-900"
            htmlFor="email"
          >
            Your Email
          </label>
          <input
            required
            className="block w-full bg-transparent rounded-md border-[2px] p-2.5 text-gray-900 shadow-none placeholder:text-gray-400 focus:outline-none focus:ring-2 sm:leading-0 text-xs"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <label
          className="lock text-sm font-medium leading-6 text-gray-900"
          htmlFor="message"
        >
          Your message
        </label>
        <textarea
          required
          className="block w-full bg-transparent rounded-md border-[2px] p-2.5 text-gray-900 shadow-none placeholder:text-gray-400 focus:outline-none focus:ring-2 sm:leading-0 text-xs resize-none"
          id="message"
          name="message"
          rows="8"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="flex mt-3 lg:justify-end">
        <ButtonPrimary type="submit">Send it</ButtonPrimary>
      </div>
    </form>
  );
}
