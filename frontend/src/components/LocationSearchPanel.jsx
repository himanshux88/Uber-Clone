import React from "react";

const LocationSearchPanel = (props) => {

  const locations = [
    "Wz-283/41,maddi wali gali,vishnu garden",
    "Wz-283/42,maddi wali gali,vishnu garden",
    "Wz-283/43,maddi wali gali,vishnu garden",
    "Wz-283/44,maddi wali gali,vishnu garden",
    "Wz-283/45,maddi wali gali,vishnu garden",
  ];
  return (
    <div>
        {locations.map(function(location,idx){
            return (
              <div key={idx} onClick={()=>{
                props.setVehiclePanelOpen(true);
                props.setPanelOpen(false);
              }} className="flex border-2 p-3 border-gray-50 active:border-black rounded-xl items-center justify-start gap-3 my-2">
                <h2 className="bg-[#eee] h-10 flex items-center justify-center w-10 rounded-full">
                  <i className="ri-map-pin-fill"></i>
                </h2>
                <h4 className="font-medium">
                  {location}
                </h4>
              </div>
            );
        })}
      
    </div>
  );
};

export default LocationSearchPanel;
