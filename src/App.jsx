import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Swal from "sweetalert2";
import fetchData from "./api";
import "./App.css";
import Map from "./Components/Map";

const App = () => {
  const [ipAddressInput, setIpAddressInput] = useState("");
  const [ipAddress, setIpAddress] = useState("103.203.132.14");
  const [location, setLocation] = useState({
    city: "Yangon",
    country: "MM",
    postalCode: "",
    lat: "16.80528",
    lng: "96.15611",
  });
  const [timezone, setTimezone] = useState("+06:30");
  const [isp, setIsp] = useState("Myanmar Country Co., Ltd.");

  const [loading, setLoading] = useState(false);
  const handleFetchData = async () => {
    setLoading(true);
    const responseData = await fetchData(ipAddressInput);
    setLoading(false);
    if (!responseData.hasOwnProperty("message")) {
      setIpAddress(responseData.ip);
      setIsp(responseData.isp);
      setTimezone(responseData.location.timezone);
      setLocation({
        city: responseData.location.city,
        country: responseData.location.country,
        postalCode: responseData.location.postalCode,
        lat: responseData.location.lat,
        lng: responseData.location.lng,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid location",
      });
    }
    console.log(responseData);
  };
  return (
    <>
      {/* loading  */}
      {loading && (
        <div className="absolute flex justify-center items-center top-0 left-0 right-0 bottom-0 m-auto z-50 bg-black opacity-80">
          <div class="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <div className="font-primaryFont">
        <div className="bg-mobile lg:bg-desktop bg-no-repeat bg-cover text-center px-10 md:px-20 lg:px-40 h-[30vh] md:h-[25vh]">
          <h1 className="text-white text-2xl py-5">IP Address Tracker</h1>
          <div className="flex justify-center">
            <input
              defaultValue={ipAddress}
              onChange={(e) => setIpAddressInput(e.target.value)}
              type="text"
              className="px-3 py-3 text-veryDarkGray w-full rounded-l-lg focus:outline-none min-w-[250px] md:w-[75%] max-w-[500px]"
              placeholder="Seach for any ip address or domain"
            />
            <button
              type="button"
              onClick={handleFetchData}
              className="bg-veryDarkGray px-3 py-2 rounded-r-lg "
            >
              <IoIosArrowForward className="text-white" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 py-3 px-2 text-center md:text-start  bg-white rounded-lg relative z-40 -bottom-5">
            <div className="flex flex-col gap-0 md:gap-2 px-3 mb-3 md:border-r">
              <small className="uppercase text-darkGray">IP address</small>
              <div className="font-medium text-xl">{ipAddress}</div>
            </div>
            <div className="flex flex-col gap-0 md:gap-2 px-3 mb-3 md:border-r">
              <small className="uppercase text-darkGray">Location</small>
              <div className="font-medium text-xl">{`${location.city}, ${location.country} ${location.postalCode}`}</div>
            </div>
            <div className="flex flex-col gap-0 md:gap-2 px-3 mb-3 md:border-r">
              <small className="uppercase text-darkGray">timezone</small>
              <div className="font-medium text-xl">UTC {timezone}</div>
            </div>
            <div className="flex flex-col gap-0 md:gap-2 px-3 ">
              <small className="uppercase text-darkGray">isp</small>
              <div className="font-medium text-xl">{isp}</div>
            </div>
          </div>
        </div>
        <Map lat={location.lat} lng={location.lng} />
      </div>
    </>
  );
};

export default App;
