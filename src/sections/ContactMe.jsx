import emailjs from "@emailjs/browser";
import { CardBody, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import AlertSuccess from "../components/AlertSuccess";
import MotionSection from "../components/MotionSection";
import TextHighlight from "../components/TextHighlight";
import { initial, viewport, whileInView } from "../GlobalVariables";

export default function ContactMe() {
  const form = useRef();
  const [showAlert, setShowAlert] = useState(false); // State to manage alert visibility

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_h2haymm", "template_iztbuwv", form.current, {
        publicKey: "AKhRafMpglbunSBsq",
      })
      .then(
        () => {
          setShowAlert(true); // Show alert on success
          form.current.reset(); // Clears the input fields
          setTimeout(() => setShowAlert(false), 11000); // force hide alert after 11 seconds
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      {/* Display success alert */}
      {showAlert && <AlertSuccess show={showAlert} />}

      <MotionSection id="contactme">
        <div className="container mx-auto mb-10 text-center">
          <Typography color="white" className="mb-2 font-bold uppercase">
            Contact Me
          </Typography>
          <Typography variant="h2" color="white" className="mb-4">
            Let's Connect
          </Typography>
          <Typography className="mx-auto w-full dark:text-zinc-400 lg:w-10/12">
            Whether you have a project in mind, a collaboration opportunity, or
            just want to chat, I'm always open to new conversations. Feel free
            to reach out and{" "}
            <TextHighlight>let's make something great together</TextHighlight>.
          </Typography>
        </div>
        <motion.div
          className="bg-cardBackground rounded-3xl shadow-md shadow-zinc-950/80 mb-4 max-w-2xl lg:max-w-3xl justify-center mx-auto p-2"
          initial={initial}
          whileInView={whileInView}
          viewport={viewport}
        >
          <CardBody className="bg-cardBackground flex flex-col items-center justify-center rounded-3xl p-4">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4 w-full"
            >
              <label className="text-zinc-400 text-lg">Name:</label>
              <input
                type="text"
                name="user_name"
                className="p-3 w-full rounded-md bg-gray-950 text-white border border-zinc-700 focus:border-cyan-400"
                required
              />

              <label className="text-zinc-400 text-lg">Email:</label>
              <input
                type="email"
                name="user_email"
                className="p-3 w-full rounded-md bg-gray-950 text-white border border-zinc-700 focus:border-cyan-400"
                required
              />

              <label className="text-zinc-400 text-lg">Message:</label>
              <textarea
                name="message"
                className="p-3 w-full rounded-md bg-gray-950 text-white border border-zinc-700 focus:border-cyan-400 h-24 min-h-24"
                rows="4"
                required
              />

              <input
                type="submit"
                value="Send Message"
                className="mt-2 cursor-pointer p-2 w-full rounded-lg bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition-all max-w-max self-end"
              />
            </form>
          </CardBody>
        </motion.div>
      </MotionSection>
    </>
  );
}
