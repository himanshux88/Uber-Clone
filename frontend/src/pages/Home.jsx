import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className=" bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1563282058-c9163e4ab24c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full">
        <img
          className="w-16 ml-8"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffreelogopng.com%2Fimages%2Fall_img%2F1659768779uber-logo-white.png&f=1&nofb=1&ipt=e187394c5b281b6cfc02a4b9d44a95b57caf274cc0b4d1081cb9b25b4774ca4c&ipo=images"
          alt=""
        />
        <div className="bg-white pb-8 py-4 px-4">
          <h2 className="text-[27px] font-bold">Get Started with Uber</h2>
          <Link
            to="/login"
            className=" flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
