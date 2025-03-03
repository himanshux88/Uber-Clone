import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setWaitingForDriver(false);
        }}
        className="p-1 text-center absolute top-0 w-full"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <div className='flex items-center justify-between'> 
        <img
          className="h-12"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />
        <div className='text-right'>
          <h2 className='text-lg font-medium '>Himanshu</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>DL10SR2658</h4>
          <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-col justify-between">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">565/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Vishnu Garden,New Delhi
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">565/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Vishnu Garden,New Delhi
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹192.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaitingForDriver
