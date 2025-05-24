import React, { useState } from "react";
import { roomsDummyData } from "../../assets/assets";
import Title from "../../components/Title";

const ListRoom = () => {
  const [rooms, setRooms] = useState(roomsDummyData);

  const handleToggle = (index) => {
    const updatedRooms = [...rooms];
    updatedRooms[index].isAvailable = !updatedRooms[index].isAvailable;
    setRooms(updatedRooms);
  };

  return (
    <div>
      <Title
        align="left"
        font="outfit"
        title="Room Listings"
        subTitle="View, edit or manage all listed rooms. Keep the information up-to-date to provide the best experience for users."
      />
      <p className="mt-8 text-gray-500">All Rooms</p>
      <div className="mt-3 max-h-80 w-full max-w-3xl overflow-y-scroll rounded-lg border border-gray-300 text-left">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 font-medium text-gray-600">Name</th>
              <th className="px-4 py-3 font-medium text-gray-600 max-sm:hidden">
                Facility
              </th>
              <th className="px-4 py-3 font-medium text-gray-600">
                Price / night
              </th>
              <th className="px-4 py-3 text-center font-medium text-gray-600">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {rooms.map((item, index) => (
              <tr key={index}>
                <td className="border-t border-gray-300 px-4 py-3 text-gray-700">
                  {item.roomType}
                </td>
                <td className="border-t border-gray-300 px-4 py-3 text-gray-700 max-sm:hidden">
                  {item.amenities.join(", ")}
                </td>
                <td className="border-t border-gray-300 px-4 py-3 text-gray-700">
                  ₹{item.pricePerNight}
                </td>
                <td className="border-t border-gray-300 px-4 py-3 text-center text-sm text-red-500">
                  <label className="relative inline-flex cursor-pointer items-center gap-3 text-gray-900">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      checked={item.isAvailable}
                      onChange={() => handleToggle(index)}
                    />
                    <div className="peer h-7 w-12 rounded-full bg-slate-300 transition-colors duration-200 peer-checked:bg-blue-600"></div>
                    <span className="dot absolute top-1 left-1 h-5 w-5 rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRoom;
