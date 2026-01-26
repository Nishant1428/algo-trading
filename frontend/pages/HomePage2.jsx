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
      text: "Dear Gokul Sir, I've been following you for months but joined your program recently. Despite lower capital, I avoided losses thanks to your accurate calls. The 25200 PUT trade was spot-on. Hats off! Your team is amazing — I’ll always stay connected with you. ❤️",
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
          paddingBottom: "20px"
        }}
      >
        <div className="flex text-[50px] font-bold ml-[150px] pt-10">
          <p className="text-white">Ab Koi Bahana nhi -</p>
          <p className="text-green-400">Seedha Action mei Aate hai</p>
        </div>
        <p className="text-white text-[20px] ml-110 mt-5 ">
          Trade part-time or full-time, we will take care of you
        </p>
        <div className="flex">
          <div className="flex ml-15 mt-10 w-[550px] h-[80px] bg-green-50 border-green-200 border-2 rounded-xl">
            <div className="ml-5">
              <CursorArrowRaysIcon className="w-10 text-green-700 mt-5" />
            </div>
            <div className="ml-5 mt-6">
              <p className="text-[18px] font-bold">
                You don’t need to be an expert in trading.
              </p>
            </div>
          </div>
          <div className="flex ml-10 mt-10 w-[550px] h-[80px] bg-green-50 border-green-200 border-2 rounded-xl">
            <div className="ml-5">
              <CursorArrowRaysIcon className="w-10 text-green-700 mt-5" />
            </div>
            <div className="ml-5 mt-6">
              <p className="text-[18px] font-bold">
                You have my Trading Calls & Tips
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex ml-15 mt-10 w-[550px] h-[80px] bg-green-50 border-green-200 border-2 rounded-xl">
            <div className="ml-5">
              <CursorArrowRaysIcon className="w-10 text-green-700 mt-5" />
            </div>
            <div className="ml-5 mt-6">
              <p className="text-[18px] font-bold">
                You need not do any kind of analysis
              </p>
            </div>
          </div>
          <div className="flex ml-10 mt-10 w-[550px] h-[80px] bg-green-50 border-green-200 border-2 rounded-xl">
            <div className="ml-5">
              <CursorArrowRaysIcon className="w-10 text-green-700 mt-5" />
            </div>
            <div className="ml-5 mt-6">
              <p className="text-[18px] font-bold">
                Everything is now SUPER EASY for you.
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex ml-15 mt-10 w-[550px] h-[80px] bg-green-50 border-green-200 border-2 rounded-xl">
            <div className="ml-5">
              <CursorArrowRaysIcon className="w-10 text-green-700 mt-5" />
            </div>
            <div className="ml-5 mt-6">
              <p className="text-[18px] font-bold">
                Start Your Profitable Trading Journey Instantly.
              </p>
            </div>
          </div>
          <div className="flex ml-10 mt-10 w-[550px] h-[80px] bg-green-50 border-green-200 border-2 rounded-xl">
            <div className="ml-5">
              <CursorArrowRaysIcon className="w-10 text-green-700 mt-5" />
            </div>
            <div className="ml-5 mt-4 pr-10">
              <p className="text-[18px] font-bold">
                No course, Zero Knowledge? Sab chalega, we will take care of
                you.
              </p>
            </div>
          </div>
        </div>
        <p className="text-white text-[35px] ml-40 mt-8 ">
          Aap Bas Hampe Vishwas Rakhiye Aur Apka Khayal Hum Rakhege
        </p>
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
        "
        >
          <span className="text-white text-[20px] flex ml-15">
            Register Now <p className="text-red-400"> @Rs.99.00/- </p>Only
          </span>
        </button>
        <p className="text-black text-yellow-400 text-[30px] ml-140 mt-5 ">
          SEBI Registered RA
        </p>
        <p className="text-white text-[50px] font-bold ml-[50px] pt-10">
          Fake Results Hote Toh Aaj
          <span className="text-green-400"> 2 Lac+ Community </span>Nhi Hoti
        </p>

        <div className="w-full p-6 rounded-xl text-center">
          <p className="text-white text-lg">“{comments[index].text}”</p>
          <h3 className="flex mt-8 ml-150 text-white font-semibold">
            <img
              src={comments[index].img}
              alt=""
              className="w-10 h-10  rounded-full object-cover mb-4"
            />
            <p className="mt-2 ml-2">- {comments[index].name}</p>
          </h3>
        </div>
        <div className="flex justify-between mt-6">
          <div className="ml-80">
            <button
              onClick={prevComment}
              className="px-4 py-2 bg-green-400 text-white rounded-lg hover:scale-110 transition"
            >
              ⬅
            </button>
          </div>
          <div className="mr-90">
            <button
              onClick={nextComment}
              className="px-4 py-2 bg-green-400 text-white rounded-lg hover:scale-110 transition"
            >
              ➡
            </button>
            {/* <img src={pro1} alt="" /> */}
          </div>
        </div>
        <div className="flex pl-10">
          <img src={pro2} className="w-50 mt-20 ml-10 rounded-xl" alt="" />
          <img src={pro4} className="w-50 mt-20 ml-10 rounded-xl" alt="" />
          <img src={pro5} className="w-50 mt-20 ml-10 rounded-xl" alt="" />
          <img src={pro3} className="w-50 mt-20 ml-10 rounded-xl" alt="" />
          <img src={pro1} className="w-50 mt-20 ml-10 rounded-xl" alt="" />
        </div>
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
        "
        >
          <span className="text-white text-[20px] flex ml-15">
            Register Now <p className="text-red-400"> @Rs.99.00/- </p>Only
          </span>
        </button>
        <p className="text-black text-red-700 text-[25px] ml-135 mt-5 ">
          Registration Ending Soon!!
        </p>
        <p className="text-white text-[50px] font-bold ml-[250px] mt-15">
          Please Check If You Are Facing
          <p className="text-green-400 text-[50px] font-bold">
            Any Of These challenges
          </p>
        </p>

        <div className="mt-20 flex">
          <img src={bull} alt="" className="w-[700px] h-[500px] mt-50" />
          <div className="">
            <div className="mb-5 flex items-center bg-yellow-300 h-[100px] w-[550px] p-6 rounded-xl gap-5 shadow-md">
              <input
                type="checkbox"
                className="w-6 h-6 accent-black cursor-pointer"
              />
              <p className="text-black text-[18px] leading-snug text-[20px] font-bold">
                Har din naye trading strategies dekh rhe hai, but fir bhi
                results ki guarantee nhi hai
              </p>
            </div>
            <div className="mb-5 flex items-center bg-yellow-300 h-[100px] w-[550px] p-6 rounded-xl gap-5 shadow-md">
              <input
                type="checkbox"
                className="w-6 h-6 accent-black cursor-pointer"
              />
              <p className="text-black text-[18px] leading-snug text-[20px] font-bold">
                Har trade pe doubt karna – "Buy karu ya wait karu?"
              </p>
            </div>
            <div className="mb-5 flex items-center bg-yellow-300 h-[100px] w-[550px] p-6 rounded-xl gap-5 shadow-md">
              <input
                type="checkbox"
                className="w-6 h-6 accent-black cursor-pointer"
              />
              <p className="text-black text-[18px] leading-snug text-[20px] font-bold">
                YouTube aur news ke overload se confuse hona
              </p>
            </div>
            <div className="mb-5 flex items-center bg-yellow-300 h-[100px] w-[550px] p-6 rounded-xl gap-5 shadow-md">
              <input
                type="checkbox"
                className="w-6 h-6 accent-black cursor-pointer"
              />
              <p className="text-black text-[18px] leading-snug text-[20px] font-bold">
                Kabhi profit, kabhi loss – inconsistent results aana
              </p>
            </div>
            <div className="mb-5 flex items-center bg-yellow-300 h-[100px] w-[550px] p-6 rounded-xl gap-5 shadow-md">
              <input
                type="checkbox"
                className="w-6 h-6 accent-black cursor-pointer"
              />
              <p className="text-black text-[18px] leading-snug text-[20px] font-bold">
                Itna sochne lagte ho ki trade ka chance hi miss ho jaata hai
              </p>
            </div>
            <div className="mb-5 flex items-center bg-yellow-300 h-[100px] w-[550px] p-6 rounded-xl gap-5 shadow-md">
              <input
                type="checkbox"
                className="w-6 h-6 accent-black cursor-pointer"
              />
              <p className="mb-5 text-black text-[18px] leading-snug text-[20px] font-bold mt-4">
                Dar ya excitement mein galat decision lene se
              </p>
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
        ml-10
        "
            >
              <span className="text-white text-[20px] flex ml-15">
                Register Now <p className="text-red-400"> @Rs.99.00/- </p>Only
              </span>
            </button>
            <p className="text-black text-yellow-400 text-[20px] ml-50 mt-5 ">
              SEBI Registered RA
            </p>
          </div>
        </div>
        <p className="text-3xl mt-20 ml-120 ">
          🎯<span className="text-yellow-200"> Agenda of the Masterclass</span>
        </p>
        <p className="text-white text-[50px] font-bold ml-[460px] pt-2">
          Webinar
          <span className="text-green-400">Highlights:</span>
        </p>
        <div>
          <div className="flex">
            <div
              className="
                    bg-white w-[400px] h-[220px] rounded-xl pt-5 mt-20 ml-10
                    shadow-xl
                    transition-all duration-300 ease-in-out
                    hover:shadow-2xl hover:scale-105
                    "
            >
              <img src={card1} alt="" className="w-[120px] ml-30" />
              <p className="mx-10 font-bold text-[20px]">
                Understanding your Trading{" "}
                <span className="ml-10">Related Problems</span>
              </p>
            </div>
            <div
              className="
                    bg-white w-[400px] h-[220px] rounded-xl pt-5 mt-20 ml-10
                    shadow-2xl
                    transition-all duration-300 ease-in-out
                    hover:shadow-2xl hover:scale-105
                    "
            >
              <img src={card2} alt="" className="w-[120px] ml-30" />
              <p className="mx-15 font-bold text-[20px]">
                Details about Calls & Tips{" "}
                <span className="ml-17">Services</span>
              </p>
            </div>
            <div
              className="
                    bg-white w-[400px] h-[220px] rounded-xl pt-5 mt-20 ml-10
                    shadow-xl
                    transition-all duration-300 ease-in-out
                    hover:shadow-2xl hover:scale-105
                    "
            >
              <img src={card3} alt="" className="w-[120px] ml-30" />
              <p className="mx-10 font-bold text-[20px] ml-15">
                Risk-Reward and Accuracy
              </p>
            </div>
          </div>
          <div className="flex">
            <div
              className="
                    bg-white w-[400px] h-[220px] rounded-xl pt-5 mt-10 ml-10
                    shadow-xl
                    transition-all duration-300 ease-in-out
                    hover:shadow-2xl hover:scale-105
                    "
            >
              <img src={card4} alt="" className="w-[120px] ml-30" />
              <p className="mx-10 font-bold text-[20px]">
                Understanding your Trading{" "}
                <span className="ml-25">Service</span>
              </p>
            </div>
            <div
              className="
                    bg-white w-[400px] h-[220px] rounded-xl pt-5 mt-10 ml-10
                    shadow-2xl
                    transition-all duration-300 ease-in-out
                    hover:shadow-2xl hover:scale-105
                    "
            >
              <img src={card5} alt="" className="w-[120px] ml-30" />
              <p className="mx-25 font-bold text-[20px]">
                Enrollment Process
              </p>
            </div>
            <div
              className="
                    bg-white w-[400px] h-[220px] rounded-xl pt-5 mt-10 ml-10
                    shadow-xl
                    transition-all duration-300 ease-in-out
                    hover:shadow-2xl hover:scale-105
                    "
            >
              <img src={card6} alt="" className="w-[120px] ml-30" />
              <p className="mx-10 font-bold text-[20px]">
                Understanding your Trading{" "}
                <span className="ml-15">Related Problems</span>
              </p>
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
        mt-15
        p-10
        w-160
        border-green-200
        border-2
        ml-80
        "
        >
          <span className="text-white text-[20px] flex ml-30">
            Register Now <p className="text-red-400"> @Rs.99.00/- </p>Only
          </span>
        </button>
        <p className="text-3xl mt-8 ml-110 ">
          <span className="text-yellow-200">Price Rises Soon : <span className="line-through">₹99</span> ₹99.00/-</span>
        </p>
        </div>
      </div>
    </>
  );
}

export default HomePage2;
