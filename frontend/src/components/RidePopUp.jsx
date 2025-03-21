import React from "react";


const RidePopUp = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
        className="p-1 text-center absolute top-0 w-full"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">A Ride Available!</h3>
      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://i.pinimg.com/originals/0f/3c/3c/0f3c3c76a16f10d43bf0b0c144cea281.png"
            alt=""
          />
          <h2 className="text-lg font-medium">{props.ride?.user.fullname.firstname + " "+props.ride?.user.fullname.lastname}</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2KM</h5>
      </div>
      <div className="flex items-center gap-2 flex-col justify-between">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">565/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                {props.ride?.pickup}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">565/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                {props.ride?.destination}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹{props.ride?.fare}</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between mt-5">
          <button
            onClick={() => {
              props.setRidePopupPanel(false);
              
            }}
            className=" mt-1 p-2 bg-gray-300 px-12 text-gray-700 font-semibold rounded-lg"
          >
            Ignore
          </button>
          <button
            onClick={() => {
              props.setConfirmRidePopupPanel(true);
              props.confirmRide();
            }}
            className=" p-2 bg-green-600 px-12 text-white font-semibold rounded-lg"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
