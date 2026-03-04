import React from "react";
import image from "../images/bg2.png";
import { useState } from "react";

function HomePage4() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);


  return (
    <>
      <div
        style={{
          backgroundImage: `url(${image})`,
          height: "140vh",
          width: "100vw",
          backgroundSize: "cover",
          color: "black",
          paddingBottom: "1150px",
          // paddingBottom: "2000px"
        }}
      >
        <p className="flex text-[50px] font-bold ml-[250px] mt-10 mb-5 pt-10 text-white">
          Frequently Asked Questions{" "}
          <span className="ml-2 text-green-500">(FAQs)</span>
        </p>
        <div className="w-full max-w-xl mx-auto mt-10">
          <div
            onClick={() => setOpen(!open)}
            className={`
          flex justify-between items-center
          p-5 rounded-xl cursor-pointer
          transition-all duration-300
          ${open ? "bg-green-500 text-white" : "bg-white text-black"}
        `}
          >
            <p className="text-lg font-medium">
              How should i prepare for this masterclass?
            </p>

            <div
              className={`
            w-8 h-8 flex items-center justify-center
            rounded-full bg-white text-black text-xl font-bold
            ${open ? "" : "animate-pulse"}
          `}
            >
              {open ? "−" : "+"}
            </div>
          </div>
          <div
            className={`
          overflow-hidden transition-all duration-300
          ${open ? "max-h-40 mt-3" : "max-h-0"}
        `}
          >
            <div className="bg-white p-5 rounded-xl shadow-md">
              <p className="text-gray-700">
                You just need a stable internet connection, a pen, a paper and a
                curious mind to imbibe–implement–improve your skill set and
                mindset.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-xl mx-auto mt-5">
          <div
            onClick={() => setOpen2(!open2)}
            className={`
          flex justify-between items-center
          p-5 rounded-xl cursor-pointer
          transition-all duration-300
          ${open2 ? "bg-green-500 text-white" : "bg-white text-black"}
        `}
          >
            <p className="text-lg font-medium">
              Is this masterclass interactive or only one side?
            </p>

            <div
              className={`
            w-8 h-8 flex items-center justify-center
            rounded-full bg-white text-black text-xl font-bold
            ${open2 ? "" : "animate-pulse"}
          `}
            >
              {open2 ? "−" : "+"}
            </div>
          </div>
          <div
            className={`
          overflow-hidden transition-all duration-300
          ${open2 ? "max-h-40 mt-3" : "max-h-0"}
        `}
          >
            <div className="bg-white p-5 rounded-xl shadow-md">
              <p className="text-gray-700">
                The masterclass is highly interactive with live Q&A and engagement.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-xl mx-auto mt-5">
          <div
            onClick={() => setOpen3(!open3)}
            className={`
          flex justify-between items-center
          p-5 rounded-xl cursor-pointer
          transition-all duration-300
          ${open3 ? "bg-green-500 text-white" : "bg-white text-black"}
        `}
          >
            <p className="text-lg font-medium">
              Who will conduct the masterclass?
            </p>

            <div
              className={`
            w-8 h-8 flex items-center justify-center
            rounded-full bg-white text-black text-xl font-bold
            ${open3 ? "" : "animate-pulse"}
          `}
            >
              {open3 ? "−" : "+"}
            </div>
          </div>
          <div
            className={`
          overflow-hidden transition-all duration-300
          ${open3 ? "max-h-40 mt-3" : "max-h-0"}
        `}
          >
            <div className="bg-white p-5 rounded-xl shadow-md">
              <p className="text-gray-700">
                Gokul Chhabra, SEBI Registered Research Analyst (INH000014827).
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-xl mx-auto mt-5">
          <div
            onClick={() => setOpen4(!open4)}
            className={`
          flex justify-between items-center
          p-5 rounded-xl cursor-pointer
          transition-all duration-300
          ${open4 ? "bg-green-500 text-white" : "bg-white text-black"}
        `}
          >
            <p className="text-lg font-medium">
How will i join the online-masterclass
            </p>

            <div
              className={`
            w-8 h-8 flex items-center justify-center
            rounded-full bg-white text-black text-xl font-bold
            ${open4 ? "" : "animate-pulse"}
          `}
            >
              {open4 ? "−" : "+"}
            </div>
          </div>
          <div
            className={`
          overflow-hidden transition-all duration-300
          ${open4 ? "max-h-40 mt-3" : "max-h-0"}
        `}
          >
            <div className="bg-white p-5 rounded-xl shadow-md">
              <p className="text-gray-700">
                You will receive a Zoom/meeting link on your registered email and WhatsApp.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-xl mx-auto mt-5">
          <div
            onClick={() => setOpen5(!open5)}
            className={`
          flex justify-between items-center
          p-5 rounded-xl cursor-pointer
          transition-all duration-300
          ${open5 ? "bg-green-500 text-white" : "bg-white text-black"}
        `}
          >
            <p className="text-lg font-medium">
Do i need to download any app for this live masterclass?
            </p>

            <div
              className={`
            w-8 h-8 flex items-center justify-center
            rounded-full bg-white text-black text-xl font-bold
            ${open5 ? "" : "animate-pulse"}
          `}
            >
              {open5 ? "−" : "+"}
            </div>
          </div>
          <div
            className={`
          overflow-hidden transition-all duration-300
          ${open5 ? "max-h-40 mt-3" : "max-h-0"}
        `}
          >
            <div className="bg-white p-5 rounded-xl shadow-md">
              <p className="text-gray-700">
                No app needed. You can join directly via browser.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-xl mx-auto mt-5">
          <div
            onClick={() => setOpen6(!open6)}
            className={`
          flex justify-between items-center
          p-5 rounded-xl cursor-pointer
          transition-all duration-300
          ${open6 ? "bg-green-500 text-white" : "bg-white text-black"}
        `}
          >
            <p className="text-lg font-medium">
Will i get a reminder before the mastercalass begins?
            </p>

            <div
              className={`
            w-8 h-8 flex items-center justify-center
            rounded-full bg-white text-black text-xl font-bold
            ${open6 ? "" : "animate-pulse"}
          `}
            >
              {open6 ? "−" : "+"}
            </div>
          </div>
          <div
            className={`
          overflow-hidden transition-all duration-300
          ${open6 ? "max-h-40 mt-3" : "max-h-0"}
        `}
          >
            <div className="bg-white p-5 rounded-xl shadow-md">
              <p className="text-gray-700">
                Yes! You’ll get multiple reminders via email & WhatsApp.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-xl mx-auto mt-5">
          <div
            onClick={() => setOpen7(!open7)}
            className={`
          flex justify-between items-center
          p-5 rounded-xl cursor-pointer
          transition-all duration-300
          ${open7 ? "bg-green-500 text-white" : "bg-white text-black"}
        `}
          >
            <p className="text-lg font-medium">
What would be the medium of communication?
            </p>

            <div
              className={`
            w-8 h-8 flex items-center justify-center
            rounded-full bg-white text-black text-xl font-bold
            ${open7 ? "" : "animate-pulse"}
          `}
            >
              {open7 ? "−" : "+"}
            </div>
          </div>
          <div
            className={`
          overflow-hidden transition-all duration-300
          ${open7 ? "max-h-40 mt-3" : "max-h-0"}
        `}
          >
            <div className="bg-white p-5 rounded-xl shadow-md">
              <p className="text-gray-700">
                The masterclass will be conducted in a mix of Hindi + English.
              </p>
            </div>
          </div>
        </div>
        <button
              className="
         rounded-4xl font-bold text-black
        bg-green-400
        animate-pulse
        cursor-pointer
        transition-all duration-300
        hover:scale-110
        mt-10
        p-10
        w-120
        border-green-200
        border-2
        ml-[460px]
        "
        onClick={()=>window.location.href = "https://webinar.dilsetrader.in/add-to-cart/dstkvfFeb?code="}
            >
              <span className="text-white text-[20px] flex ml-10">
                Register Now <p className="text-red-400"> @Rs.99.00/- </p>Only
              </span>
            </button>
            <p className="text-xl mt-5 ">
              <span className="text-red-700 font-bold ml-135">
                Hurry! Only few seats left
              </span>
            </p>
      </div>
    </>
  );
}

export default HomePage4;
