import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";
import StarRating from "../components/StarRating";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    room && setRoom(room);
    setMainImage(room.images[0]);
  }, []);

  return (
    room && (
      <div className="px-4 py-28 md:px-16 md:py-35 lg:px-24 xl:px-32">
        {/* Room Details */}
        <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
          <h1 className="font-playfair text-3xl md:text-4xl">
            {room.hotel.name}
            <span className="font-inter text-sm">{room.roomType}</span>
          </h1>
          <p className="font-inter rounded-full bg-orange-500 px-3 py-1.5 text-xs text-white">
            20% OFF
          </p>
        </div>

        {/* Room Rating */}
        <div className="mt-2 flex items-center gap-1">
          <StarRating rating={room.roomRating} />
          <p className="ml-2">200+ reviews</p>
        </div>

        {/* Room Address */}
        <div className="mt-2 flex items-center gap-1 text-gray-500">
          <img src={assets.locationIcon} alt="location-icon" />
          <span>{room.hotel.address}</span>
        </div>

        {/* Room Image */}
        <div className="mt-6 flex flex-col gap-6 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <img
              src={mainImage}
              alt="Room Image"
              className="w-full rounded-xl object-cover shadow-lg"
            />
          </div>
          <div className="grid w-full grid-cols-2 gap-4 lg:w-1/2">
            {room?.images.length > 1 &&
              room.images.map((image, index) => (
                <img
                  onClick={() => setMainImage(image)}
                  key={index}
                  src={image}
                  alt="Room Image"
                  className={`odject-cover w-full cursor-pointer rounded-xl shadow-md ${
                    mainImage === image && "outline-3 outline-orange-500"
                  }`}
                />
              ))}
          </div>
        </div>
        {/* Room Highlights */}
        <div className="mt-10 flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col">
            <h2 className="font-playfair text-3xl md:text-4xl">
              Experience Luxury Like Never Before
            </h2>
            <div className="mt-3 mb-6 flex flex-wrap items-center gap-4">
              {room.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-lg bg-gray-100 py-2"
                >
                  <img
                    src={facilityIcons[item]}
                    alt={item}
                    className="h-5 w-5"
                  />
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Room Price */}
          <p className="text-2xl font-medium">${room.pricePerNight}/night</p>
        </div>
        {/* CheckIn CheckOut Form */}
        <form className="mx-auto mt-16 flex max-w-6xl flex-col items-start justify-between rounded-xl bg-white p-6 shadow-[0px_0px_20px_rgba(0,0,0,0.15)] md:flex-row md:items-center">
          <div className="flex flex-col flex-wrap items-start gap-4 text-gray-500 md:flex-row md:items-center md:gap-10">
            <div className="flex flex-col">
              <label htmlFor="checkInDate" className="font-medium">
                Check-In
              </label>
              <input
                type="date"
                id="checkInDate"
                placeholder="Check-In"
                className="mt-1.5 w-full rounded border border-gray-300 px-3 py-2 outline-none"
                required
              />
            </div>
            <div className="h-15 w-px bg-gray-300/70 max-md:hidden"></div>
            <div className="flex flex-col">
              <label htmlFor="checkOutDate" className="font-medium">
                Check-Out
              </label>
              <input
                type="date"
                id="checkOutDate"
                placeholder="Check-Out"
                className="mt-1.5 w-full rounded border border-gray-300 px-3 py-2 outline-none"
                required
              />
            </div>
            <div className="h-15 w-px bg-gray-300/70 max-md:hidden"></div>
            <div className="flex flex-col">
              <label htmlFor="guests" className="font-medium">
                Guests
              </label>
              <input
                type="number"
                id="guests"
                placeholder="0"
                className="mt-1.5 max-w-20 rounded border border-gray-300 px-3 py-2 outline-none"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-primary-dull cursor-pointer rounded-md py-3 text-base text-white transition-all active:scale-95 max-md:mt-6 max-md:w-full md:px-25 md:py-4"
          >
            Check Availability
          </button>
        </form>

        {/* Common Specification */}
        <div className="mt-25 space-y-4">
          {roomCommonData.map((spec, index) => (
            <div key={index} className="flex items-start gap-2">
              <img
                src={spec.icon}
                alt={`${spec.title}-icon`}
                className="w-6.5"
              />
              <div>
                <p className="text-base">{spec.title}</p>
                <p className="text-gray-500">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="my-15 max-w-3xl border-y border-gray-300 py-10 text-gray-500">
          <p>
            Guests will be allocated on the ground floor according to
            availability. You get a comfortable Two bedroom apartment has a true
            city feeling. The price quoted is for two guest, at the guest slot
            please mark the number of guests to get the exact price for groups.
            The Guests will be allocated ground floor according to availability.
            You get the comfortable two bedroom apartment that has a true city
            feeling.
          </p>
        </div>

        {/* Hosted by */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex gap-4">
            <img
              src={room.hotel.owner.image}
              alt="Host"
              className="h-14 w-14 rounded-full md:h-18 md:w-18"
            />
            <div>
              <p className="text-lg md:text-xl">Hoested by {room.hotel.name}</p>
              <div className="mt-1 flex items-center">
                <StarRating />
                <p className="ml-2">200+ reviews</p>
              </div>
            </div>
          </div>
          <button className="bg-primary hover:bg-primary-dull mt-4 cursor-pointer rounded px-6 py-2.5 text-white transition-all">
            Contact Now
          </button>
        </div>
      </div>
    )
  );
};

export default RoomDetails;
