import React from "react";
import image from "../images/bg1.png";
import sir from "../images/gokul-sir.webp";
import {
  CalendarIcon,
  ClockIcon,
  VideoCameraIcon,
  LanguageIcon,
} from "@heroicons/react/24/solid";

function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="w-screen bg-cover text-black h-auto lg:h-[850px]"
      >
        {/* Top Badge */}
        <div className="flex justify-center">
          <div
            className="text-[14px] sm:text-[16px] lg:text-[18px] px-4 py-3 rounded-bl-xl rounded-br-xl border-l-2 border-r-2 border-b-2 border-yellow-400 border-t-0 font-bold text-center"
            style={{ backgroundColor: "lightgoldenrodyellow" }}
          >
            No Hype, Just Results: <u>1000+ Success Stories</u>
          </div>
        </div>

        {/* Heading Section */}
        <div className="text-center lg:text-left px-4">
          <p className="text-[28px] sm:text-[36px] lg:text-[50px] font-bold lg:ml-[250px] mt-8">
            Get Trade Calls & Tips Directly From
          </p>
          <p className="text-green-400 font-bold text-[22px] sm:text-[28px] lg:text-[36px] lg:ml-[360px]">
            SEBI Registered Research Analyst
          </p>
          <p className="text-gray-500 font-bold text-[14px] sm:text-[16px] lg:text-[20px] lg:ml-[390px] mt-5">
            Webinar Mei Register Kijiye and Jaaniye Complete Info
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Image Section */}
          <div className="relative mt-10 lg:ml-5">
            <img
              src={sir}
              alt=""
              className="h-[300px] sm:h-[400px] lg:h-110 rounded-4xl mx-auto lg:ml-30"
            />

            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-0 py-4 rounded-xl border-2 border-yellow-400 w-[90%] sm:w-[80%] lg:w-full max-w-md"
              style={{ backgroundColor: "lightgoldenrodyellow" }}
            >
              <p className="text-[16px] lg:text-[18px] font-bold text-center">
                Founder: Gokul Chabra
              </p>
              <p className="text-center text-[14px] lg:text-[16px] px-2">
                10+ Years of Trading Experience | Mentored more than 2 Lakh+
                people worldwide.
              </p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="mt-10 lg:mt-15 px-4">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="bg-gray-200 rounded-xl h-[120px] w-full sm:w-[250px] lg:ml-20">
                <div className="flex">
                  <CalendarIcon className="w-10 text-green-700 mt-10 ml-5" />
                  <div className="ml-5 mt-5">
                    <p className="text-gray-500">Date</p>
                    <p className="text-[18px] font-bold">
                      November 29, 2025 (Sat)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-200 rounded-xl h-[120px] w-full sm:w-[250px]">
                <div className="flex">
                  <ClockIcon className="w-10 text-green-700 mt-10 ml-5" />
                  <div className="ml-5 mt-8">
                    <p className="text-gray-500">Time</p>
                    <p className="text-[18px] font-bold">12:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mt-6">
              <div className="bg-gray-200 rounded-xl h-[120px] w-full sm:w-[250px] lg:ml-20">
                <div className="flex">
                  <VideoCameraIcon className="w-10 text-green-700 mt-10 ml-5" />
                  <div className="ml-5 mt-8">
                    <p className="text-gray-500">Platform</p>
                    <p className="text-[18px] font-bold">Zoom</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-200 rounded-xl h-[120px] w-full sm:w-[250px]">
                <div className="flex">
                  <LanguageIcon className="w-10 text-green-700 mt-10 ml-5" />
                  <div className="ml-5 mt-8">
                    <p className="text-gray-500">Language</p>
                    <p className="text-[18px] font-bold">Hindi & English</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
