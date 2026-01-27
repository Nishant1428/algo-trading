import React from "react";
import sir from "../images/gokul-sir.webp";

function HomePage3() {

  return (
    <>
      <div className="pb-10">
        {/* --- WHO SHOULD ATTEND TITLE --- */}
        <p className="flex text-[50px] font-bold ml-[250px] mb-5 pt-10 text-black max-md:text-[35px] max-md:ml-10 max-md:mb-3 max-md:pt-5 max-sm:text-[28px] max-sm:ml-5 max-sm:mb-2 max-sm:pt-3">
          Who Should Attend The Workshop?
        </p>

        {/* --- CARDS CONTAINER --- */}
        <div className="max-md:flex max-md:flex-col max-sm:flex max-sm:flex-col">
          {/* --- ROW 1 --- */}
          <div className="flex max-md:flex-col max-md:items-center max-sm:flex-col max-sm:items-center">
            <div className="border-green-200 border-2 mb-5 ml-5 mt-5 flex items-center bg-green-100 h-[100px] w-[420px] p-6 rounded-xl gap-5 shadow-md max-md:w-[90%] max-md:h-auto max-md:py-4 max-md:mt-3 max-md:ml-0 max-sm:w-[95%] max-sm:h-auto max-sm:py-3 max-sm:ml-0 max-sm:mb-2">
              <span className="text-2xl max-sm:text-xl">🎯</span>
              <p className="text-black text-[18px] text-[20px] font-bold max-sm:text-[16px]">
                Business Owners
              </p>
            </div>
            <div className="border-green-200 border-2 mb-5 ml-5 mt-5 flex items-center bg-green-100 h-[100px] w-[420px] p-6 rounded-xl gap-5 shadow-md max-md:w-[90%] max-md:h-auto max-md:py-4 max-md:mt-3 max-md:ml-0 max-sm:w-[95%] max-sm:h-auto max-sm:py-3 max-sm:ml-0 max-sm:mb-2">
              <span className="text-2xl max-sm:text-xl">🎯</span>
              <p className="text-black text-[18px] text-[20px] font-bold max-sm:text-[16px]">
                Freelancers
              </p>
            </div>
            <div className="border-green-200 border-2 mb-5 ml-5 mt-5 flex items-center bg-green-100 h-[100px] w-[420px] p-6 rounded-xl gap-5 shadow-md max-md:w-[90%] max-md:h-auto max-md:py-4 max-md:mt-3 max-md:ml-0 max-sm:w-[95%] max-sm:h-auto max-sm:py-3 max-sm:ml-0 max-sm:mb-2">
              <span className="text-2xl max-sm:text-xl">🎯</span>
              <p className="text-black text-[18px] text-[20px] font-bold max-sm:text-[16px]">
                Coaches
              </p>
            </div>
          </div>

          {/* --- ROW 2 --- */}
          <div className="flex max-md:flex-col max-md:items-center max-sm:flex-col max-sm:items-center">
            <div className="border-green-200 border-2 mb-5 ml-5 mt-2 flex items-center bg-green-100 h-[100px] w-[420px] p-6 rounded-xl gap-5 shadow-md max-md:w-[90%] max-md:h-auto max-md:py-4 max-md:mt-2 max-md:ml-0 max-sm:w-[95%] max-sm:h-auto max-sm:py-3 max-sm:ml-0 max-sm:mb-2">
              <span className="text-2xl max-sm:text-xl">🎯</span>
              <p className="text-black text-[18px] text-[20px] font-bold max-sm:text-[16px]">
                Homemakers
              </p>
            </div>
            <div className="border-green-200 border-2 mb-5 ml-5 mt-2 flex items-center bg-green-100 h-[100px] w-[420px] p-6 rounded-xl gap-5 shadow-md max-md:w-[90%] max-md:h-auto max-md:py-4 max-md:mt-2 max-md:ml-0 max-sm:w-[95%] max-sm:h-auto max-sm:py-3 max-sm:ml-0 max-sm:mb-2">
              <span className="text-2xl max-sm:text-xl">🎯</span>
              <p className="text-black text-[18px] text-[20px] font-bold max-sm:text-[16px]">
                Consultants
              </p>
            </div>
            <div className="border-green-200 border-2 mb-5 ml-5 mt-2 flex items-center bg-green-100 h-[100px] w-[420px] p-6 rounded-xl gap-5 shadow-md max-md:w-[90%] max-md:h-auto max-md:py-4 max-md:mt-2 max-md:ml-0 max-sm:w-[95%] max-sm:h-auto max-sm:py-3 max-sm:ml-0 max-sm:mb-2">
              <span className="text-2xl max-sm:text-xl">🎯</span>
              <p className="text-black text-[18px] text-[20px] font-bold max-sm:text-[16px]">
                Students
              </p>
            </div>
          </div>

          {/* --- ROW 3 --- */}
          <div className="flex max-md:flex-col max-md:items-center max-sm:flex-col max-sm:items-center">
            <div className="border-green-200 border-2 mb-5 ml-5 mt-2 flex items-center bg-green-100 h-[100px] w-[420px] p-6 rounded-xl gap-5 shadow-md max-md:w-[90%] max-md:h-auto max-md:py-4 max-md:mt-2 max-md:ml-0 max-sm:w-[95%] max-sm:h-auto max-sm:py-3 max-sm:ml-0 max-sm:mb-2">
              <span className="text-2xl max-sm:text-xl">🎯</span>
              <p className="text-black text-[18px] text-[20px] font-bold max-sm:text-[16px]">
                Authors
              </p>
            </div>
            <div className="border-green-200 border-2 mb-5 ml-5 mt-2 flex items-center bg-green-100 h-[100px] w-[420px] p-6 rounded-xl gap-5 shadow-md max-md:w-[90%] max-md:h-auto max-md:py-4 max-md:mt-2 max-md:ml-0 max-sm:w-[95%] max-sm:h-auto max-sm:py-3 max-sm:ml-0 max-sm:mb-2">
              <span className="text-2xl max-sm:text-xl">🎯</span>
              <p className="text-black text-[18px] text-[20px] font-bold max-sm:text-[16px]">
                Doctors
              </p>
            </div>
            <div className="border-green-200 border-2 mb-5 ml-5 mt-2 flex items-center bg-green-100 h-[100px] w-[420px] p-6 rounded-xl gap-5 shadow-md max-md:w-[90%] max-md:h-auto max-md:py-4 max-md:mt-2 max-md:ml-0 max-sm:w-[95%] max-sm:h-auto max-sm:py-3 max-sm:ml-0 max-sm:mb-2">
              <span className="text-2xl max-sm:text-xl">🎯</span>
              <p className="text-black text-[18px] text-[20px] font-bold max-sm:text-[16px]">
                Professionals
              </p>
            </div>
          </div>

          {/* --- ROW 4 --- */}
          <div className="flex max-md:flex-col max-md:items-center max-sm:flex-col max-sm:items-center">
            <div className="border-green-200 border-2 mb-5 ml-5 mt-2 flex items-center bg-green-100 h-[100px] w-[420px] p-6 rounded-xl gap-5 shadow-md max-md:w-[90%] max-md:h-auto max-md:py-4 max-md:mt-2 max-md:ml-0 max-sm:w-[95%] max-sm:h-auto max-sm:py-3 max-sm:ml-0 max-sm:mb-2">
              <span className="text-2xl max-sm:text-xl">🎯</span>
              <p className="text-black text-[18px] text-[20px] font-bold max-sm:text-[16px]">
                Content Creators
              </p>
            </div>
            <div className="border-green-200 border-2 mb-5 ml-5 mt-2 flex items-center bg-green-100 h-[100px] w-[420px] p-6 rounded-xl gap-5 shadow-md max-md:w-[90%] max-md:h-auto max-md:py-4 max-md:mt-2 max-md:ml-0 max-sm:w-[95%] max-sm:h-auto max-sm:py-3 max-sm:ml-0 max-sm:mb-2">
              <span className="text-2xl max-sm:text-xl">🎯</span>
              <p className="text-black text-[18px] text-[20px] font-bold max-sm:text-[14px]">
                Anyone who wants to do tension free trading
              </p>
            </div>
          </div>
        </div>

        {/* --- MEET YOUR MENTOR TITLE --- */}
        <p className="flex text-[50px] font-bold ml-[440px] mt-10 mb-5 pt-10 text-black max-md:text-[35px] max-md:ml-10 max-md:mt-8 max-md:mb-3 max-md:pt-5 max-sm:text-[28px] max-sm:ml-5 max-sm:mt-6 max-sm:mb-2 max-sm:pt-3">
          Meet Your <span className="ml-2 text-green-500">Mentor</span>
        </p>

        {/* --- MENTOR SECTION --- */}
        <div className="flex max-md:flex-col max-md:items-center max-sm:flex-col max-sm:items-center">
          <img
            src={sir}
            alt=""
            className="h-110 ml-30 mt-5 rounded-4xl max-md:h-80 max-md:ml-0 max-md:mt-0 max-sm:h-60 max-sm:ml-0 max-sm:mt-0 max-sm:rounded-2xl"
          />
          <div className="mt-5 ml-10 mr-15 max-md:mt-5 max-md:ml-0 max-md:mr-0 max-md:w-[90%] max-sm:mt-4 max-sm:ml-0 max-sm:mr-0 max-sm:w-[95%]">
            <h1 className="text-green-500 text-[30px] font-bold max-md:text-[26px] max-sm:text-[22px]">
              Gokul Chhabra
            </h1>
            <p className="font-bold text-[20px] max-md:text-[18px] max-sm:text-[16px]">
              Founder – Dil Se Trader Pvt Ltd || SEBI Registered Analyst
            </p>
            <br />
            <div className="text-[20px] max-md:text-[16px] max-sm:text-[14px]">
              <p>
                Dil Se Trader was established with a vision to empower traders.
                As a SEBI-registered Research Analyst (INH000014827), we've
                grown to help traders achieve their financial goals through
                data-driven, transparent, and compliant market research across
                India.
              </p>
              <br />
              <p>
                Gokul Chhabra is a dynamic Angel Investor, CEO of multi-million
                dollar companies, and a recognized Social Entrepreneur by
                Godrej. With an MBA from MDI and BCOM from Ramjas College, he
                stands out as one of India's top-rated Financial Analysts — all
                by the age of 28.
              </p>
              <br />
              <p>
                As a full-time Trader and Investor, he has mentored over 1
                million students and empowered more than 500,000 traders through
                his renowned "Zero To Hero Program" and advanced price action
                strategies.
              </p>
              <br />
              <p>
                Gokul Chhabra aims to revolutionize stock research with
                tech-assisted analysis for retail investors, working toward
                building India's largest research ecosystem.
              </p>
              <br />
              <p>
                We are registered with SEBI as a Research Analyst under SEBI
                (Research Analysts) Regulations, 2014.
              </p>
              <br />
              <p>
                {" "}
                Join us in this journey of financial growth and innovation with
                our visionary leader.
              </p>
            </div>

            {/* --- REGISTER BUTTON --- */}
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
        w-160
        border-green-200
        border-2
        max-md:w-[300px] max-md:p-6 max-md:mt-8 max-sm:w-[250px] max-sm:p-5 max-sm:mt-6
        "
            >
              <span className="text-white text-[20px] flex ml-30 max-sm:text-[16px] max-sm:ml-0 max-sm:justify-center">
                Register Now <p className="text-red-400 max-sm:ml-1"> @Rs.99.00/- </p>Only
              </span>
            </button>

            {/* --- HURRY MESSAGE --- */}
            <p className="text-xl mt-5 max-md:text-lg max-sm:text-base max-sm:mt-3">
              <span className="text-red-700 font-bold ml-50 max-md:block max-md:text-center max-md:ml-0 max-sm:block max-sm:text-center max-sm:ml-0">
                Hurry! Only few seats left
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage3;

