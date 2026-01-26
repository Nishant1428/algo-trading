import React from 'react'

function Footer() {
  return (
    <>
        <div
          className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 w-[1400px] h-[130px] flex text-[18px] px-8 py-4 text-white rounded-tl-xl rounded-tr-xl  font-bold"
          style={{ backgroundColor: "green" }}
        >
         <p className='mt-10 ml-5'>Zoom Webinar is on <span className='text-yellow-400'>November 29, 2025 (Sat) </span><span className='text-white'>from</span><span className='text-yellow-400'> 12:00</span></p>
         <button
              className="
         rounded-4xl font-bold text-black
        bg-green-400
        animate-pulse
        cursor-pointer
        transition-all duration-300
        hover:scale-110

        w-120
        border-green-200
        border-2
        ml-[300px]
        "
            >
              <span className="text-white text-[20px] flex ml-10">
                Register Now <p className="text-red-400"> @Rs.99.00/- </p>Only
              </span>
            </button>
        </div>
    </>
  )
}

export default Footer
