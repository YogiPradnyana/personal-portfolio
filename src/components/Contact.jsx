// src/components/Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { ImSpinner2 } from "react-icons/im";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault(); // Mencegah form reload halaman
    setIsSubmitting(true); // Menandai proses pengiriman dimulai

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current, // Data form
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for contacting me. I will get back to you soon.",
            confirmButtonColor: "#40916C",
          });
          e.target.reset();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again later.",
            footer: `Error: ${error.text}`,
          });
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-24 px-8 sm:px-10 lg:px-32 xl:px-40 bg-white scroll-mt-12"
    >
      <div className="flex flex-col md:flex-row gap-10 md:gap-8">
        <div className="flex flex-col">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">
            Information <span className="text-pr-500">Contact</span>
          </h1>
          <p className="text-neu/60 text-sm sm:text-base mb-5 md:mb-6">
            My inbox is always open. Whether you have a question, a project
            proposal, or just want to say hello, I'll get back to you!
          </p>
          <ul className="flex flex-col gap-4 md:gap-6">
            <li className="flex items-center gap-2 text-sm sm:text-base">
              <IoCallOutline className="w-6 h-6" />
              +62 823-4073-8199
            </li>
            <li className="flex items-center gap-2 text-sm sm:text-base">
              <CiMail className="w-6 h-6" />
              15tkj1yogipradnyana@gmail.com
            </li>
            <li className="flex items-center gap-2 text-sm sm:text-base">
              <CiLocationOn className="size-5 sm:size-6" />
              Denpasar, Bali, Indonesia
            </li>
          </ul>
        </div>

        <div className="p-4 sm:p-6 rounded-3xl min-w-full md:min-w-100 xl:min-w-[480px] border border-neu/20">
          <h4 className="font-semibold text-2xl lg:text-3xl mb-2">
            Contact Me
          </h4>
          <p className="text-neu/60 text-sm sm:text-base mb-4 md:mb-6">
            Feel free to contact me at your convenience.
          </p>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="firstname"
                id="user_firstname"
                required
                placeholder="Firstname"
                className="px-3 w-1/2 py-3 text-sm border placeholder:text-neu/60 border-neu/20 rounded-full"
              />
              <input
                type="text"
                name="lastname"
                required
                id="user_lastname"
                placeholder="Lastname"
                className="px-3 w-1/2 py-3 text-sm border placeholder:text-neu/60 border-neu/20 rounded-full"
              />
            </div>
            <input
              type="email"
              name="email"
              id="user_email"
              required
              placeholder="Email"
              className="px-3 py-3 text-sm border placeholder:text-neu/60 border-neu/20 rounded-full"
            />
            <input
              type="text"
              name="phone"
              id="user_phone"
              placeholder="Phone"
              className="px-3 py-3 text-sm border placeholder:text-neu/60 border-neu/20 rounded-full"
            />
            <textarea
              rows="7"
              placeholder="Message"
              name="message"
              id="user_message"
              required
              className="px-3 py-3 text-sm placeholder:text-neu/60 border border-neu/20 rounded-3xl"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-pr text-white flex items-center justify-center px-6 py-3 font-medium cursor-pointer rounded-full transition-all disabled:cursor-not-allowed disabled:bg-pr/70"
            >
              {isSubmitting ? (
                // Jika sedang submitting, tampilkan ikon spinner yang berputar
                <ImSpinner2 className="h-6 w-6 animate-spin" />
              ) : (
                // Jika tidak, tampilkan teks
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
