import React, { useState } from "react";
import Title from "../components/Title";
import { assets, userBookingsDummyData } from "../assets/assets";

const MyBookings = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData);

  return (
    <div className="px-4 py-28 md:px-16 md:pt-32 md:pb-35 lg:px-24 xl:px-32">
      <Title
        title="My Bookings"
        subTitle="Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks"
        align="left"
      />
      <div className="mt-8 w-full max-w-6xl text-gray-800">
        <div className="hidden w-full border-b border-gray-300 py-3 text-base font-medium md:grid md:grid-cols-[3fr_2fr_1fr]">
          <div className="w-1/3">Hotels</div>
          <div className="w-1/3">Date & Timings</div>
          <div className="w-1/3">Payment</div>
        </div>
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="grid w-full grid-cols-1 border-b border-gray-300 py-6 first:border-t md:grid-cols-[3fr_2fr_1fr]"
          >
            {/* Hotel Details */}
            <div className="flex flex-col md:flex-row">
              <img
                src={booking.room.images[0]}
                alt="Hotel Image"
                className="rounded object-cover shadow min-md:w-44"
              />
              <div className="flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4">
                <p className="font-playfair text-2xl">
                  {booking.hotel.name}
                  <span className="font-inter mx-1 text-sm">
                    ({booking.room.roomType})
                  </span>
                </p>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img src={assets.locationIcon} alt="Location Icon" />
                  <span>{booking.hotel.address}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img src={assets.guestsIcon} alt="Guests Icon" />
                  <span>Guests: {booking.guests}</span>
                </div>
                <p className="text-base">Total ${booking.totalPrice}</p>
              </div>
            </div>

            {/* Date & Timings */}
            <div className="mt-3 flex flex-row gap-8 md:items-center md:gap-12">
              <div>
                <p>Check-In:</p>
                <p className="text-sm text-gray-500">
                  {new Date(booking.checkInDate).toDateString()}
                </p>
              </div>
              <div>
                <p>Check-Out:</p>
                <p className="text-sm text-gray-500">
                  {new Date(booking.checkOutDate).toDateString()}
                </p>
              </div>
            </div>

            {/* Payment Status */}
            <div className="flex flex-col items-start justify-center pt-3">
              <div className="flex items-center gap-2">
                <div
                  className={`h-3 w-3 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"}`}
                ></div>
                <p
                  className={`text-sm ${booking.isPaid ? "text-green-500" : "text-red-500"}`}
                >
                  {booking.isPaid ? "Paid" : "Unpaid"}
                </p>
              </div>
              {!booking.isPaid && (
                <button className="mt-4 cursor-pointer rounded-full border border-gray-400 px-4 py-1.5 text-xs transition-all hover:bg-gray-50">
                  Pay Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
