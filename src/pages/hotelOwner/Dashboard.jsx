import React, { useState } from "react";
import Title from "../../components/Title";
import { assets, dashboardDummyData } from "../../assets/assets";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(dashboardDummyData);

  return (
    <div>
      <Title
        align="left"
        font="outfit"
        title="Dashboard"
        subTitle="Monitor your room listings, track bookings, and analyze revenue — all in one place. Stay updated with real-time insights to ensure smooth operations."
      />
      <div className="my-8 flex gap-4">
        {/* Total Bookings */}
        <div className="bg-primary/3 border-primary/10 flex rounded border p-4 pr-8">
          <img
            src={assets.totalBookingIcon}
            alt="total booking icon"
            className="h-10 max-sm:hidden"
          />
          <div className="flex flex-col font-medium sm:ml-4">
            <p className="text-lg text-blue-500">Total Bookings</p>
            <p className="text-base text-neutral-400">
              {dashboardData.totalBookings}
            </p>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="bg-primary/3 border-primary/10 flex rounded border p-4 pr-8">
          <img
            src={assets.totalRevenueIcon}
            alt="total revenue icon"
            className="h-10 max-sm:hidden"
          />
          <div className="flex flex-col font-medium sm:ml-4">
            <p className="text-lg text-blue-500">Total Revenue</p>
            <p className="text-base text-neutral-400">
              $ {dashboardData.totalRevenue}
            </p>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <h2 className="mb-5 text-xl font-medium text-blue-950/70">
        Recent Bookings
      </h2>
      <div className="max-h-80 w-full max-w-3xl overflow-y-scroll rounded-lg border border-gray-300 text-left">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 font-medium text-gray-600">User Name</th>
              <th className="px-4 py-3 font-medium text-gray-600 max-sm:hidden">
                Room Name
              </th>
              <th className="px-4 py-3 text-center font-medium text-gray-600">
                Total Amount
              </th>
              <th className="px-4 py-3 text-center font-medium text-gray-600">
                Payment Status
              </th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {dashboardData.bookings.map((item, index) => (
              <tr key={index}>
                <td className="border-t border-gray-300 px-4 py-3 text-gray-700">
                  {item.user.username}
                </td>

                <td className="border-t border-gray-300 px-4 py-3 text-gray-700 max-sm:hidden">
                  {item.room.roomType}
                </td>

                <td className="border-t border-gray-300 px-4 py-3 text-center text-gray-700">
                  $ {item.totalPrice}
                </td>

                <td className="flex border-t border-gray-300 px-4 py-3">
                  <button
                    className={`mx-auto rounded-full px-3 py-1 text-xs ${item.isPaid ? "bg-green-200 text-green-600" : "bg-amber-200 text-yellow-600"}`}
                  >
                    {item.isPaid ? "Completed" : "Pending"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
