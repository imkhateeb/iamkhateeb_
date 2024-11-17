import React from "react";
import { BsHeartFill } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gradient-to-t from-gray-800 to-black text-white py-5 px-10 max-sm:px-2">
      <div className="flex flex-col items-center justify-center">
        <p className="text-gray-400">
          Email me at{" "}
          <span className="text-gray-200 font-bold">
            luckykhateeb4@gmail.com
          </span>
        </p>
        <p className="text-gray-400">
          Contact me at{" "}
          <span className="text-gray-200 font-bold">+91 9905522972</span>
        </p>
      </div>

      <div className="flex items-center justify-center mt-5">
        <p className="flex items-center">
          Made with <BsHeartFill fontSize={20} color="red" className="mx-2" />
          in IIIT Ranchi
        </p>
      </div>
    </div>
  );
}
