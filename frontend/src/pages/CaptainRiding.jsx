import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef=useRef(null)
  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );
  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.recruitics.com%2Fhubfs%2Fuber%2520Logo.png&f=1&nofb=1&ipt=f2cf2754ec90059d3a702f16bb1b104fb00aaa193351083e09df112b59c00548&ipo=images"
          alt=""
        />
        <Link
          to="/captain-logout"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div onClick={()=>{
        setFinishRidePanel(true)
      }}  className="h-1/5 p-6 flex items-center justify-between relative bg-yellow-400">
        <h5
          onClick={() => {}}
          className="p-1 text-center absolute top-0 w-[90%]"
        >
          <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
        </h5>
        <h4 className="text-xl font-semibold">4KM Away</h4>
        <button className=" p-2 bg-green-600 px-12 text-white font-semibold rounded-lg">
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel}/>
      </div>
    </div>
  );
};

export default CaptainRiding;
