"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import toast, { Toaster } from 'react-hot-toast';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    // Validation
    if (!data.email || !data.subject || !data.message) {
      toast.error("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.ok && resData.success) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setEmailSubmitted(true);
        e.target.reset();
      } else {
        toast.error(resData.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("An error occurred. Please try again or email me directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-8 relative"
    >
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'var(--toast-bg)',
            color: 'var(--toast-color)',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-light-pink-300 to-transparent dark:from-primary-900 dark:to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-3xl font-bold text-light-text-primary dark:text-white my-2 mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-pink-600 to-light-rose-600 dark:from-primary-400 dark:to-secondary-600">
            Let&apos;s Connect
          </span>
        </h5>
        <p className="text-light-text-secondary dark:text-[#ADB7BE] mb-6 max-w-md text-base leading-relaxed">
          I&apos;m always open to discussing new opportunities, collaborations, or just having a chat about tech and data. 
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="mb-6">
          <p className="text-light-text-primary dark:text-white font-semibold mb-2">Email:</p>
          <a href="mailto:zeineb.eya.rahmani@outlook.com" className="text-light-pink-600 dark:text-primary-400 hover:underline">
            zeineb.eya.rahmani@outlook.com
          </a>
        </div>
        <div className="mb-6">
          <p className="text-light-text-primary dark:text-white font-semibold mb-2">Location:</p>
          <p className="text-light-text-secondary dark:text-[#ADB7BE]">La Marsa, Tunis, Tunisia</p>
        </div>
        <div className="socials flex flex-row gap-3">
          <Link 
            href="https://github.com/zeineb-eya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform opacity-70 dark:opacity-100 hover:opacity-100"
          >
            <Image 
              src={GithubIcon} 
              alt="Github Icon" 
              width={40} 
              height={40}
              className="dark:invert-0 invert"
            />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/zeineb-eya-rahmani-1a453b156/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform opacity-70 dark:opacity-100 hover:opacity-100"
          >
            <Image 
              src={LinkedinIcon} 
              alt="Linkedin Icon" 
              width={40} 
              height={40}
              className="dark:invert-0 invert"
            />
          </Link>
        </div>
        <Link
          href="https://linktr.ee/zeineb_eya_rahmani"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-light-pink-500 to-light-rose-500 dark:from-primary-500 dark:to-secondary-500 text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.423 0 9.818 4.395 9.818 9.818s-4.395 9.818-9.818 9.818S2.182 17.423 2.182 12 6.577 2.182 12 2.182zM8.182 7.636v8.728h1.091V7.636H8.182zm6.545 0v8.728h1.091V7.636h-1.091z"/>
          </svg>
          Visit My Linktree
        </Link>
      </div>
      <div className="z-10">
        {emailSubmitted ? (
          <p className="text-green-600 dark:text-green-500 text-lg font-semibold mt-2 p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
            ✓ Email sent successfully! I&apos;ll get back to you soon.
          </p>
        ) : (
          <form className="flex flex-col bg-light-surface dark:bg-[#18191E] p-6 rounded-xl border border-light-border dark:border-[#33353F] shadow-lg" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-light-text-primary dark:text-white block mb-2 text-sm font-semibold"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-light-bg dark:bg-[#18191E] border border-light-border dark:border-[#33353F] placeholder-light-text-tertiary dark:placeholder-[#9CA2A9] text-light-text-primary dark:text-gray-100 text-sm rounded-lg block w-full p-3 focus:ring-2 focus:ring-light-pink-500 dark:focus:ring-primary-500 focus:outline-none transition-all"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-light-text-primary dark:text-white block text-sm mb-2 font-semibold"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-light-bg dark:bg-[#18191E] border border-light-border dark:border-[#33353F] placeholder-light-text-tertiary dark:placeholder-[#9CA2A9] text-light-text-primary dark:text-gray-100 text-sm rounded-lg block w-full p-3 focus:ring-2 focus:ring-light-pink-500 dark:focus:ring-primary-500 focus:outline-none transition-all"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-light-text-primary dark:text-white block text-sm mb-2 font-semibold"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                className="bg-light-bg dark:bg-[#18191E] border border-light-border dark:border-[#33353F] placeholder-light-text-tertiary dark:placeholder-[#9CA2A9] text-light-text-primary dark:text-gray-100 text-sm rounded-lg block w-full p-3 focus:ring-2 focus:ring-light-pink-500 dark:focus:ring-primary-500 focus:outline-none transition-all"
                placeholder="Let's talk about..."
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-light-pink-500 to-light-rose-500 dark:from-primary-500 dark:to-secondary-500 hover:shadow-xl text-white font-semibold py-3 px-6 rounded-lg w-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
