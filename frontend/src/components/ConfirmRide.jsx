import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setConfirmRidePanel(false);
        }}
        className="p-1 text-center absolute top-0 w-full"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm your Ride</h3>
      <div className="flex items-center gap-2 flex-col justify-between">
        <img
          className="h-20"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">
                {props.confirmRidePickup?.structured_formatting
                  ?.main_text || "Pickup location not selected"}
              </h3>
              <p className="text-sm -mt-1 text-gray-600">
                {props.confirmRidePickup?.structured_formatting
                  ?.secondary_text || "Pickup location not selected"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">
                {props.confirmRideDestination?.structured_formatting
                  ?.main_text || "Destination not selected"}
              </h3>
              <p className="text-sm -mt-1 text-gray-600">
                {props.confirmRideDestination?.structured_formatting
                  ?.secondary_text || "Destination not selected"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">
                ₹{props.fare[props.vehicleType]}
              </h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            props.setVehicleFound(true);
            props.setConfirmRidePanel(false);
            props.createRide();
          }}
          className="w-full mt-5 p-2 bg-green-600 text-white font-semibold rounded-lg"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default ConfirmRide
