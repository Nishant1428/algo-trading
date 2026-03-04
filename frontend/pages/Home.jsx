import React from "react";
import image from "../images/bg1.png";
import sir from "../images/gokul-sir.webp";
import { CalendarIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/solid";
import { VideoCameraIcon } from "@heroicons/react/24/solid";
import { LanguageIcon } from "@heroicons/react/24/solid";

function Home() {



  
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${image})`,
          height: "850px",
          width: "100vw",
          backgroundSize: "cover",
          color: "black",
          paddingBottom: "200px"
        }}
      >
        <div
          className="mx-100 text-[18px] px-8 py-4 rounded-bl-xl rounded-br-xl border-l-2 border-r-2 border-b-2 border-yellow-400 border-t-0 font-bold"
          style={{ backgroundColor: "lightgoldenrodyellow" }}
        >
          No Hype, Just Results: <u>1000+ Success Stories</u>
        </div>
        <div className="ml-5">
          <p className="text-[50px] font-bold ml-[250px] mt-8">
            Get Trade Calls & Tips Directly From
          </p>
          <p className="text-green-400 ml-[360px] font-bold text-[36px]">
            SEBI Registered Research Analyst
          </p>
          <p className="text-gray-500 ml-[390px] font-bold text-[20px] mt-5">
            Webinar Mei Register Kijiye and Jaaniye Complete Info
          </p>
        </div>
        <div className="flex">
          <div className="ml-5">
            <div className="relative inline-block">
              <img src={sir} alt="" className="h-110 ml-30 mt-5 rounded-4xl" />

              <div
                className="absolute left-1/2 -translate-x-1/2 bottom-0 py-4 ml-16 rounded-xl border-2 border-yellow-400 w-full max-w-xs md:max-w-sm lg:max-w-md"
                style={{ backgroundColor: "lightgoldenrodyellow" }}
              >
                <p className="text-[18px] font-bold text-center pr-6">
                  Founder: Gokul Chabra
                </p>
                <p className="text-center">
                  10+ Years of Trading Experience | Mentored more than 2 Lakh+
                  people worldwide.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-15">
              <div className="flex">
                <div className="bg-gray-200 ml-20 mt-10 rounded-xl h-[120px] w-[250px]">
                  <div className="flex">
                    <div className="ml-5">
                      <CalendarIcon className="w-10 text-green-700 mt-10" />
                    </div>
                    <div className="ml-5 mt-5">
                      <p className="text-gray-500">Date</p>
                      <p className="text-[18px] font-bold">
                        November 29, 2025 (Sat)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-200 ml-10 mt-10 rounded-xl h-[120px] w-[250px]">
                  <div className="flex">
                    <div className="ml-5">
                      <ClockIcon className="w-10 text-green-700 mt-10" />
                    </div>
                    <div className="ml-5 mt-8">
                      <p className="text-gray-500">Time</p>
                      <p className="text-[18px] font-bold">12:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="bg-gray-200 ml-20 mt-10 rounded-xl h-[120px] w-[250px]">
                  <div className="flex">
                    <div className="ml-5">
                      <VideoCameraIcon className="w-10 text-green-700 mt-10" />
                    </div>
                    <div className="ml-5 mt-8">
                      <p className="text-gray-500">Platform</p>
                      <p className="text-[18px] font-bold">Zoom</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-200 ml-10 mt-10 rounded-xl h-[120px] w-[250px]">
                  <div className="flex">
                    <div className="ml-5">
                      <LanguageIcon className="w-10 text-green-700 mt-10" />
                    </div>
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
      </div>
    </>
  );
}

export default Home;
