// "use server";
import nodemailer from "nodemailer";
import ButtonPrimary from "../CustomButtons/ButtonPrimary";

export async function mailVerificationLink(from_name, from_email, message) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codeclash.glbitm@gmail.com",
      pass: process.env.EMAIL_PASS,
    },
  });

  var mailOptions = {
    from: "codeclash.glbitm@gmail.com",
    to: "codeclash.glbitm@gmail.com",
    subject: `Website Message From: ${from_name} (${from_email})`,
    text: `Message: ${message}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    }
  });
}

export default async function ContactForm() {
  const formHandler = async (event) => {
    event.preventDefault();
    console.log("form submitted!");
    await mailVerificationLink();
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
          rows="8"
        ></textarea>
      </div>
      <div className="flex mt-3 lg:justify-end">
        <ButtonPrimary>Send it</ButtonPrimary>
      </div>
    </form>
  );
}
