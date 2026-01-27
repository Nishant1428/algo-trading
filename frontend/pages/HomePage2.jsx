import React from "react";
import image from "../images/bg2.png";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import pro1 from "../images/ayush.jpg";
import pro2 from "../images/jatin.jpg";
import pro3 from "../images/shiva.jpg";
import pro4 from "../images/harsh.jpg";
import pro5 from "../images/tarder.jpg";
import bull from "../images/bull.jpg";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
import card4 from "../images/card4.png";
import card5 from "../images/card5.png";
import card6 from "../images/card6.png";

function HomePage2() {
  const comments = [
    {
      name: "AAYUSH",
      text: "Dear Gokul Sir, I've been following you for months but joined your program recently. Despite lower capital, I avoided losses thanks to your accurate calls. The 25200 PUT trade was spot-on. Hats off! Your team is amazing — I'll always stay connected with you. ❤️",
      img: pro1,
    },
    {
      name: "JATIN ANAND",
      text: "Thank you sir! I joined your premium channel on Thursday and booked a profit of ₹8,560 the same day. You're truly great at what you do. 🙏🔥",
      img: pro2,
    },
    {
      name: "SHIVA AHIR",
      text: "Gokul Sir, I earned my entire profit because of your guidance and your team. You made trading so much easier and helped me gain confidence. Thank you so much from the bottom of my heart. ❤️🙏",
      img: pro3,
    },
    {
      name: "HARSH SHARMA",
      text: "Sir, I traded with two accounts today and saw great profit thanks to your advice. You're one of the most trusted people in the entire stock market. Thank you for your support. 💖📈",
      img: pro4,
    },
    {
      name: "TRADER ZONE",
      text: "Thank you so much sir! I booked ₹83,081 in profits and it's all thanks to your live classes. Your training is truly yielding results over time. So grateful for your knowledge and guidance. 🥰🚀",
      img: pro5,
    },
  ];

  const [index, setIndex] = useState(0);

  const nextComment = () => {
    setIndex((prev) => (prev + 1) % comments.length);
  };

  const prevComment = () => {
    setIndex((prev) => (prev === 0 ? comments.length - 1 : prev - 1));
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${image})`,
          height: "auto",
          width: "100vw",
          backgroundSize: "cover",
          color: "black",
          paddingBottom: "20px",
        }}
      >
        {/* --- HEADER SECTION --- */}
        <div className="flex text-[50px] font-bold ml-[150px] pt-10 max-md:ml-10 max-md:text-[35px] max-sm:flex-col max-sm:text-[28px] max-sm:ml-5 max-sm:pt-5">
          <p className="text-white">Ab Koi Bahana nhi -</p>
          <p className="text-green-400 max-sm:mt-2">Seedha Action mei Aate hai</p>
        </div>

        {/* --- SUBTITLE --- */}
        <p className="text-white text-[20px] ml-110 mt-5 max-md:ml-10 max-md:text-[18px] max-sm:ml-5 max-sm:text-[16px] max-sm:mt-3">
          Trade part-time or full-time, we will take care of you
        </p>

        {/* --- FEATURE CARDS ROW 1 --- */}
        <div className="flex max-md:flex-col max-sm:flex-col">
          <div className="flex ml-15 mt-10 w-[550px] h-[80px] bg-green-50 border-green-200 border-2 rounded-xl max-md:w-[90%] max-md:ml-5 max-md:h-auto max-md:py-2 max-sm:w-[95%] max-sm:ml-2 max-sm:h-auto max-sm:py-2">
            <div className="ml-5 max-sm:ml-2">
              <CursorArrowRaysIcon className="w-10 text-green-700 mt-5 max-sm:w-8 max-sm:mt-2" />
            </div>
            <div className="ml-5 mt-6 max-sm:ml-3 max-sm:mt-2">
              <p className="text-[18px] font-bold max-sm:text-[14px]">
                You don't need to be an expert in trading.
              </p>
            </div>
          </div>
          <div className="flex ml-10 mt-10 w-[550px] h-[80px] bg-green-50 border-green-200 border-2 rounded-xl max-md:w-[90%] max-md:ml-5 max-md:mt-3 max-md:h-auto max-md:py-2 max-sm:w-[95%] max-sm:ml-2 max-sm:mt-2 max-sm:h-auto max-sm:py-2">
            <div className="ml-5 max-sm:ml-2">
              <CursorArrowRaysIcon className="w-10 text-green-700 mt-5 max-sm:w-8 max-sm:mt-2" />
            </div>
            <div className="ml-5 mt-6 max-sm:ml-3 max-sm:mt-2">
              <p className="text-[18px] font-bold max-sm:text-[14px]">
                You have my Trading Calls & Tips
              </p>
            </div>
          </div>
        </div>

        {/* --- FEATURE CARDS ROW 2 --- */}
        <div className="flex max-md:flex-col max-sm:flex-col">
          <div className="flex ml-15 mt-10 w-[550px] h-[80px] bg-green-50 border-green-200 border-2 rounded-xl max-md:w-[90%] max-md:ml-5 max-md:h-auto max-md:py-2 max-sm:w-[95%] max-sm:ml-2 max-sm:h-auto max-sm:py-2">
            <div className="ml-5 max-sm:ml-2">
              <CursorArrowRaysIcon className="w-10 text-green-700 mt-5 max-sm:w-8 max-sm:mt-2" />
            </div>
            <div className="ml-5 mt-6 max-sm:ml-3 max-sm:mt-2">
              <p className="text-[18px] font-bold max-sm:text-[14px]">
                You need not do any kind of analysis
              </p>
            </div>
          </div>
          <div className="flex ml-10 mt-10 w-[550px] h-[80px] bg-green-50 border-green-200 border-2 rounded-xl max-md:w-[90%] max-md:ml-5 max-md:mt-3 max-md:h-auto max-md:py-2 max-sm:w-[95%] max-sm:ml-2 max-sm:mt-2 max-sm:h-auto max-sm:py-2">
            <div className="ml-5 max-sm:ml-2">
              <CursorArrowRaysIcon className="w-10 text-green-700 mt-5 max-sm:w-8 max-sm:mt-2" />
            </div>
            <div className="ml-5 mt-6 max-sm:ml-3 max-sm:mt-2">
              <p className="text-[18px] font-bold max-sm:text-[14px]">
                Everything is now SUPER EASY for you.
              </p>
            </div>
          </div>
        </div>

        {/* --- FEATURE CARDS ROW 3 --- */}
        <div className="flex max-md:flex-col max-sm:flex-col">
          <div className="flex ml-15 mt-10 w-[550px] h-[80px] bg-green-50 border-green-200 border-2 rounded-xl max-md:w-[90%] max-md:ml-5 max-md:h-auto max-md:py-2 max-sm:w-[95%] max-sm:ml-2 max-sm:h-auto max-sm:py-2">
            <div className="ml-5 max-sm:ml-2">
              <CursorArrowRaysIcon className="w-10 text-green-700 mt-5 max-sm:w-8 max-sm:mt-2" />
            </div>
            <div className="ml-5 mt-6 max-sm:ml-3 max-sm:mt-2">
              <p className="text-[18px] font-bold max-sm:text-[14px]">
                Start Your Profitable Trading Journey Instantly.
              </p>
            </div>
          </div>
          <div className="flex ml-10 mt-10 w-[550px] h-[80px] bg-green-50 border-green-200 border-2 rounded-xl max-md:w-[90%] max-md:ml-5 max-md:mt-3 max-md:h-auto max-md:py-2 max-sm:w-[95%] max-sm:ml-2 max-sm:mt-2 max-sm:h-auto max-sm:py-2">
            <div className="ml-5 max-sm:ml-2">
              <CursorArrowRaysIcon className="w-10 text-green-700 mt-5 max-sm:w-8 max-sm:mt-2" />
            </div>
            <div className="ml-5 mt-4 pr-10 max-sm:ml-3 max-sm:mt-2 max-sm:pr-2">
              <p className="text-[18px] font-bold max-sm:text-[14px]">
                No course, Zero Knowledge? Sab chalega, we will take care of
                you.
              </p>
            </div>
          </div>
        </div>

        {/* --- TRUST MESSAGE --- */}
        <p className="text-white text-[35px] ml-40 mt-8 max-md:ml-10 max-md:text-[25px] max-sm:ml-5 max-sm:text-[20px] max-sm:mt-4">
          Aap Bas Hampe Vishwas Rakhiye Aur Apka Khayal Hum Rakhege
        </p>

        {/* --- REGISTER BUTTON 1 --- */}
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
        w-140
        border-green-200
        border-2
        ml-100
        max-md:w-[300px] max-md:p-6 max-md:ml-auto max-md:mr-auto max-md:block max-sm:w-[250px] max-sm:p-5
        "
        >
          <span className="text-white text-[20px] flex ml-15 max-sm:text-[16px] max-sm:ml-0 max-sm:justify-center">
            Register Now <p className="text-red-400 max-sm:ml-1"> @Rs.99.00/- </p>Only
          </span>
        </button>

        {/* --- SEBI REGISTRATION --- */}
        <p className="text-black text-yellow-400 text-[30px] ml-140 mt-5 max-md:ml-10 max-md:text-[22px] max-sm:ml-5 max-sm:text-[18px] max-sm:mt-3">
          SEBI Registered RA
        </p>

        {/* --- COMMUNITY STATS --- */}
        <p className="text-white text-[50px] font-bold ml-[50px] pt-10 max-md:ml-10 max-md:text-[32px] max-sm:ml-5 max-sm:text-[24px] max-sm:pt-5">
          Fake Results Hote Toh Aaj
          <span className="text-green-400"> 2 Lac+ Community </span>Nhi Hoti
        </p>

        {/* --- TESTIMONIALS SLIDER --- */}
        <div className="w-full p-6 rounded-xl text-center max-md:p-4 max-sm:p-3">
          <p className="text-white text-lg max-sm:text-[14px]">"{comments[index].text}"</p>
          <h3 className="flex mt-8 ml-150 text-white font-semibold max-md:justify-center max-md:ml-0 max-sm:mt-4 max-sm:ml-0 max-sm:justify-center">
            <img
              src={comments[index].img}
              alt=""
              className="w-10 h-10 rounded-full object-cover mb-4 max-sm:w-8 max-sm:h-8"
            />
            <p className="mt-2 ml-2 max-sm:mt-1 max-sm:text-[14px]">- {comments[index].name}</p>
          </h3>
        </div>

        {/* --- SLIDER CONTROLS --- */}
        <div className="flex justify-between mt-6 max-md:justify-center max-md:gap-8 max-sm:justify-center max-sm:gap-4">
          <div className="ml-80 max-md:ml-0 max-sm:ml-0">
            <button
              onClick={prevComment}
              className="px-4 py-2 bg-green-400 text-white rounded-lg hover:scale-110 transition max-sm:px-3 max-sm:py-2"
            >
              ⬅
            </button>
          </div>
          <div className="mr-90 max-md:mr-0 max-sm:mr-0">
            <button
              onClick={nextComment}
              className="px-4 py-2 bg-green-400 text-white rounded-lg hover:scale-110 transition max-sm:px-3 max-sm:py-2"
            >
              ➡
            </button>
          </div>
        </div>

        {/* --- TESTIMONIAL IMAGES --- */}
        <div className="flex pl-10 max-md:flex-wrap max-md:justify-center max-md:pl-0 max-sm:flex-wrap max-sm:justify-center max-sm:pl-0">
          <img src={pro2} className="w-50 mt-20 ml-10 rounded-xl max-md:w-40 max-md:mt-10 max-md:ml-3 max-sm:w-32 max-sm:mt-8 max-sm:ml-2" alt="" />
          <img src={pro4} className="w-50 mt-20 ml-10 rounded-xl max-md:w-40 max-md:mt-10 max-md:ml-3 max-sm:w-32 max-sm:mt-8 max-sm:ml-2" alt="" />
          <img src={pro5} className="w-50 mt-20 ml-10 rounded-xl max-md:w-40 max-md:mt-10 max-md:ml-3 max-sm:w-32 max-sm:mt-8 max-sm:ml-2" alt="" />
          <img src={pro3} className="w-50 mt-20 ml-10 rounded-xl max-md:w-40 max-md:mt-10 max-md:ml-3 max-sm:w-32 max-sm:mt-8 max-sm:ml-2" alt="" />
          <img src={pro1} className="w-50 mt-20 ml-10 rounded-xl max-md:w-40 max-md:mt-10 max-md:ml-3 max-sm:w-32 max-sm:mt-8 max-sm:ml-2" alt="" />
        </div>

        {/* --- REGISTER BUTTON 2 --- */}
        <button
          className="
         rounded-4xl font-bold text-black
        bg-green-400
        animate-pulse
        cursor-pointer
        transition-all duration-300
        hover:scale-110
        mt-15
        p-10
        w-140
        border-green-200
        border-2
        ml-100
        max-md:w-[300px] max-md:p-6 max-md:ml-auto max-md:mr-auto max-md:block max-sm:w-[250px] max-sm:p-5
        "
        >
          <span className="text-white text-[20px] flex ml-15 max-sm:text-[16px] max-sm:ml-0 max-sm:justify-center">
            Register Now <p className="text-red-400 max-sm:ml-1"> @Rs.99.00/- </p>Only
          </span>
        </button>

        {/* --- URGENCY MESSAGE --- */}
        <p className="text-black text-red-700 text-[25px] ml-135 mt-5 max-md:ml-10 max-md:text-[20px] max-sm:ml-5 max-sm:text-[16px] max-sm:mt-3">
          Registration Ending Soon!!
        </p>

        {/* --- CHALLENGES SECTION --- */}
        <p className="text-white text-[50px] font-bold ml-[250px] mt-15 max-md:ml-10 max-md:text-[32px] max-sm:ml-5 max-sm:text-[24px] max-sm:mt-10">
          Please Check If You Are Facing
          <p className="text-green-400 text-[50px] font-bold max-md:text-[28px] max-sm:text-[20px]">
            Any Of These challenges
          </p>
        </p>

        {/* --- BULL SECTION WITH CHALLENGES --- */}
        <div className="mt-20 flex max-md:flex-col max-md:items-center max-sm:flex-col max-sm:items-center">
          <img
            src={bull}
            alt=""
            className="w-[700px] h-[500px] mt-50 max-md:w-[90%] max-md:h-auto max-md:mt-10 max-sm:w-[95%] max-sm:h-auto max-sm:mt-5"
          />
          <div className="max-md:mt-5 max-sm:mt-3">
            {/* --- CHALLENGE CARDS --- */}
            <div className="mb-5 flex items-center bg-yellow-300 h-[100px] w-[550px] p-6 rounded-xl gap-5 shadow-md max-md:w-[90%] max-md:h-auto max-md:py-4 max-md:mb-3 max-sm:w-[95%] max-sm:h-auto max-sm:py-3 max-sm:mb-2">
              <input
                type="checkbox"
                className="w-6 h-6 accent-black cursor-pointer max-sm:w-5 max-sm:h-5"
              />
              <p className="text-black text-[18px] leading-snug text-[20px] font-bold max-sm:text-[14px]">
                Har din naye trading strategies dekh rhe hai, but fir bhi
                results ki guarantee nhi hai
              </p>
            </div>
            <div className="mb-5 flex items-center bg-yellow-300 h-[100px] w-[550px] p-6 rounded-xl gap-5 shadow-md max-md:w-[90%] max-md:h-auto max-md:py-4 max-md:mb-3 max-sm:w-[95%] max-sm:h-auto max-sm:py-3 max-sm:mb-2">
              <input
                type="checkbox"
                className="w-6 h-6 accent-black cursor-pointer max-sm:w-5 max-sm:h-5"
              />
              <p className="text-black text-[18px] leading-snug text-[20px] font-bold max-sm:text-[14px]">
                Har trade pe doubt karna – "Buy karu ya wait karu?"
              </p>
            </div>
            <div className="mb-5 flex items-center bg-yellow-300 h-[100px] w-[550px] p-6 rounded-xl gap-5 shadow-md max-md:w-[90%] max-md:h-auto max-md:py-4 max-md:mb-3 max-sm:w-[95%] max-sm:h-auto max-sm:py-3 max-sm:mb-2">
              <input
                type="checkbox"
                className="w-6 h-6 accent-black cursor-pointer max-sm:w-5 max-sm:h-5"
              />
              <p className="text-black text-[18px] leading-snug text-[20px] font-bold max-sm:text-[14px]">
                YouTube aur news ke overload se confuse hona
              </p>
            </div>
            <div className="mb-5 flex items-center bg-yellow-300 h-[100px] w-[550px] p-6 rounded-xl gap-5 shadow-md max-md:w-[90%] max-md:h-auto max-md:py-4 max-md:mb-3 max-sm:w-[95%] max-sm:h-auto max-sm:py-3 max-sm:mb-2">
              <input
                type="checkbox"
                className="w-6 h-6 accent-black cursor-pointer max-sm:w-5 max-sm:h-5"
              />
              <p className="text-black text-[18px] leading-snug text-[20px] font-bold max-sm:text-[14px]">
                Kabhi profit, kabhi loss – inconsistent results aana
              </p>
            </div>
            <div className="mb-5 flex items-center bg-yellow-300 h-[100px] w-[550px] p-6 rounded-xl gap-5 shadow-md max-md:w-[90%] max-md:h-auto max-md:py-4 max-md:mb-3 max-sm:w-[95%] max-sm:h-auto max-sm:py-3 max-sm:mb-2">
              <input
                type="checkbox"
                className="w-6 h-6 accent-black cursor-pointer max-sm:w-5 max-sm:h-5"
              />
              <p className="text-black text-[18px] leading-snug text-[20px] font-bold max-sm:text-[14px]">
                Itna sochne lagte ho ki trade ka chance hi miss ho jaata hai
              </p>
            </div>
            <div className="mb-5 flex items-center bg-yellow-300 h-[100px] w-[550px] p-6 rounded-xl gap-5 shadow-md max-md:w-[90%] max-md:h-auto max-md:py-4 max-md:mb-3 max-sm:w-[95%] max-sm:h-auto max-sm:py-3 max-sm:mb-2">
              <input
                type="checkbox"
                className="w-6 h-6 accent-black cursor-pointer max-sm:w-5 max-sm:h-5"
              />
              <p className="mb-5 text-black text-[18px] leading-snug text-[20px] font-bold mt-4 max-sm:text-[14px] max-sm:mt-2">
                Dar ya excitement mein galat decision lene se
              </p>
            </div>

            {/* --- REGISTER BUTTON 3 --- */}
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
        ml-10
        max-md:w-[300px] max-md:p-6 max-md:ml-auto max-md:mr-auto max-md:block max-sm:w-[250px] max-sm:p-5
        "
            >
              <span className="text-white text-[20px] flex ml-15 max-sm:text-[16px] max-sm:ml-0 max-sm:justify-center">
                Register Now <p className="text-red-400 max-sm:ml-1"> @Rs.99.00/- </p>Only
              </span>
            </button>

            {/* --- SEBI MESSAGE --- */}
            <p className="text-black text-yellow-400 text-[20px] ml-50 mt-5 max-md:text-center max-md:ml-0 max-sm:text-[16px] max-sm:text-center max-sm:mt-3">
              SEBI Registered RA
            </p>
          </div>
        </div>

        {/* --- WEBINAR SECTION --- */}
        <p className="text-3xl mt-20 ml-120 max-md:text-2xl max-md:ml-10 max-md:mt-10 max-sm:text-xl max-sm:ml-5 max-sm:mt-8">
          🎯<span className="text-yellow-200"> Agenda of the Masterclass</span>
        </p>
        <p className="text-white text-[50px] font-bold ml-[460px] pt-2 max-md:ml-10 max-md:text-[32px] max-sm:ml-5 max-sm:text-[24px] max-sm:pt-1">
          Webinar
          <span className="text-green-400">Highlights:</span>
        </p>

        {/* --- CARDS ROW 1 --- */}
        <div className="flex max-md:flex-col max-md:items-center max-sm:flex-col max-sm:items-center">
          <div
            className="
                    bg-white w-[400px] h-[220px] rounded-xl pt-5 mt-20 ml-10
                    shadow-xl
                    transition-all duration-300 ease-in-out
                    hover:shadow-2xl hover:scale-105
                    max-md:w-[90%] max-md:h-auto max-md:py-4 max-md:mt-10 max-md:ml-0 max-sm:w-[95%] max-sm:h-auto max-sm:py-3 max-sm:mt-6 max-sm:ml-0
                    "
          >
            <img src={card1} alt="" className="w-[120px] ml-30 max-md:w-[100px] max-md:ml-auto max-md:mr-auto max-sm:w-[80px] max-sm:ml-auto max-sm:mr-auto" />
            <p className="mx-10 font-bold text-[20px] max-md:text-center max-md:mx-2 max-sm:text-[16px] max-sm:mx-1">
              Understanding your Trading{" "}
              <span className="max-sm:block">Related Problems</span>
            </p>
          </div>
          <div
            className="
                    bg-white w-[400px] h-[220px] rounded-xl pt-5 mt-20 ml-10
                    shadow-2xl
                    transition-all duration-300 ease-in-out
                    hover:shadow-2xl hover:scale-105
                    max-md:w-[90%] max-md:h-auto max-md:py-4 max-md:mt-6 max-md:ml-0 max-sm:w-[95%] max-sm:h-auto max-sm:py-3 max-sm:mt-4 max-sm:ml-0
                    "
          >
            <img src={card2} alt="" className="w-[120px] ml-30 max-md:w-[100px] max-md:ml-auto max-md:mr-auto max-sm:w-[80px] max-sm:ml-auto max-sm:mr-auto" />
            <p className="mx-15 font-bold text-[20px] max-md:text-center max-md:mx-2 max-sm:text-[16px] max-sm:mx-1">
              Details about Calls & Tips{" "}
              <span className="max-sm:block">Services</span>
            </p>
          </div>
          <div
            className="
                    bg-white w-[400px] h-[220px] rounded-xl pt-5 mt-20 ml-10
                    shadow-xl
                    transition-all duration-300 ease-in-out
                    hover:shadow-2xl hover:scale-105
                    max-md:w-[90%] max-md:h-auto max-md:py-4 max-md:mt-6 max-md:ml-0 max-sm:w-[95%] max-sm:h-auto max-sm:py-3 max-sm:mt-4 max-sm:ml-0
                    "
          >
            <img src={card3} alt="" className="w-[120px] ml-30 max-md:w-[100px] max-md:ml-auto max-md:mr-auto max-sm:w-[80px] max-sm:ml-auto max-sm:mr-auto" />
            <p className="mx-10 font-bold text-[20px] ml-15 max-md:text-center max-md:mx-2 max-sm:text-[16px] max-sm:mx-1">
              Risk-Reward and Accuracy
            </p>
          </div>
        </div>

        {/* --- CARDS ROW 2 --- */}
        <div className="flex max-md:flex-col max-md:items-center max-sm:flex-col max-sm:items-center">
          <div
            className="
                    bg-white w-[400px] h-[220px] rounded-xl pt-5 mt-10 ml-10
                    shadow-xl
                    transition-all duration-300 ease-in-out
                    hover:shadow-2xl hover:scale-105
                    max-md:w-[90%] max-md:h-auto max-md:py-4 max-md:mt-6 max-md:ml-0 max-sm:w-[95%] max-sm:h-auto max-sm:py-3 max-sm:mt-4 max-sm:ml-0
                    "
          >
            <img src={card4} alt="" className="w-[120px] ml-30 max-md:w-[100px] max-md:ml-auto max-md:mr-auto max-sm:w-[80px] max-sm:ml-auto max-sm:mr-auto" />
            <p className="mx-10 font-bold text-[20px] max-md:text-center max-md:mx-2 max-sm:text-[16px] max-sm:mx-1">
              Understanding your Trading{" "}
              <span className="max-sm:block">Service</span>
            </p>
          </div>
          <div
            className="
                    bg-white w-[400px] h-[220px] rounded-xl pt-5 mt-10 ml-10
                    shadow-2xl
                    transition-all duration-300 ease-in-out
                    hover:shadow-2xl hover:scale-105
                    max-md:w-[90%] max-md:h-auto max-md:py-4 max-md:mt-6 max-md:ml-0 max-sm:w-[95%] max-sm:h-auto max-sm:py-3 max-sm:mt-4 max-sm:ml-0
                    "
          >
            <img src={card5} alt="" className="w-[120px] ml-30 max-md:w-[100px] max-md:ml-auto max-md:mr-auto max-sm:w-[80px] max-sm:ml-auto max-sm:mr-auto" />
            <p className="mx-25 font-bold text-[20px] max-md:text-center max-md:mx-2 max-sm:text-[16px] max-sm:mx-1">
              Enrollment Process
            </p>
          </div>
          <div
            className="
                    bg-white w-[400px] h-[220px] rounded-xl pt-5 mt-10 ml-10
                    shadow-xl
                    transition-all duration-300 ease-in-out
                    hover:shadow-2xl hover:scale-105
                    max-md:w-[90%] max-md:h-auto max-md:py-4 max-md:mt-6 max-md:ml-0 max-sm:w-[95%] max-sm:h-auto max-sm:py-3 max-sm:mt-4 max-sm:ml-0
                    "
          >
            <img src={card6} alt="" className="w-[120px] ml-30 max-md:w-[100px] max-md:ml-auto max-md:mr-auto max-sm:w-[80px] max-sm:ml-auto max-sm:mr-auto" />
            <p className="mx-10 font-bold text-[20px] max-md:text-center max-md:mx-2 max-sm:text-[16px] max-sm:mx-1">
              Understanding your Trading{" "}
              <span className="max-sm:block">Related Problems</span>
            </p>
          </div>
        </div>

        {/* --- FINAL REGISTER BUTTON --- */}
        <button
          className="
         rounded-4xl font-bold text-black
        bg-green-400
        animate-pulse
        cursor-pointer
        transition-all duration-300
        hover:scale-110
        mt-15
        p-10
        w-160
        border-green-200
        border-2
        ml-80
        max-md:w-[300px] max-md:p-6 max-md:ml-auto max-md:mr-auto max-md:block max-sm:w-[250px] max-sm:p-5
        "
        >
          <span className="text-white text-[20px] flex ml-30 max-sm:text-[16px] max-sm:ml-0 max-sm:justify-center">
            Register Now <p className="text-red-400 max-sm:ml-1"> @Rs.99.00/- </p>Only
          </span>
        </button>

        {/* --- PRICE MESSAGE --- */}
        <p className="text-3xl mt-8 ml-110 max-md:text-xl max-md:text-center max-md:ml-0 max-sm:text-lg max-sm:text-center max-sm:ml-0 max-sm:mt-4">
          <span className="text-yellow-200">Price Rises Soon : <span className="line-through">₹99</span> ₹99.00/-</span>
        </p>
      </div>
    </>
  );
}

export default HomePage2;

