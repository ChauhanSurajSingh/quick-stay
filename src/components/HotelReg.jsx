import React from "react";
import { assets, cities } from "../assets/assets";

const HotelReg = () => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-100 flex items-center justify-center bg-black/70">
      <form className="flex max-w-4xl rounded-xl bg-white max-md:mx-2">
        <img
          src={assets.regImage}
          alt="reg-image"
          className="hidden w-1/2 rounded-xl md:block"
        />
        <div className="relative flex flex-col items-center p-8 md:w-1/2 md:p-10">
          <img
            src={assets.closeIcon}
            alt="Close Icon"
            className="absolute top-4 right-4 h-4 w-4 cursor-pointer"
          />
          <p className="mt-6 text-2xl font-semibold">Register Your Hotel</p>

          {/* Hotel Name */}
          <div className="mt-4 w-full">
            <label htmlFor="name" className="font-medium text-gray-500">
              Hotel Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Type here"
              className="mt-1 w-full rounded border border-gray-200 px-3 py-2.5 font-light outline-indigo-500"
              required
            />
          </div>

          {/* Phone */}
          <div className="mt-4 w-full">
            <label htmlFor="contact" className="font-medium text-gray-500">
              Phone
            </label>
            <input
              id="contact"
              type="tel"
              placeholder="Type here"
              className="mt-1 w-full rounded border border-gray-200 px-3 py-2.5 font-light outline-indigo-500"
              required
            />
          </div>

          {/* Address */}
          <div className="mt-4 w-full">
            <label htmlFor="address" className="font-medium text-gray-500">
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="Type here"
              className="mt-1 w-full rounded border border-gray-200 px-3 py-2.5 font-light outline-indigo-500"
              required
            />
          </div>

          {/* Select City Drop Down */}
          <div className="mt-4 mr-auto w-full max-w-60">
            <label htmlFor="city" className="font-medium text-gray-500">
              City
            </label>
            <select
              id="city"
              className="mt-1 w-full rounded border border-gray-200 px-3 py-2.5 font-light outline-indigo-500"
              required
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <button className="mt-6 mr-auto cursor-pointer rounded bg-indigo-500 px-6 py-2 text-white transition-all hover:bg-indigo-600">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
