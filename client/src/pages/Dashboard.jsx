import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { dummyCreationData } from "../assets/assets";
import { Gem, Sparkles } from "lucide-react";
import { useUser } from "@clerk/react";
import CreationItem from "../components/CreationItem";

const Dashboard = () => {
  const [creations, setCreations] = useState([]);

  const getDashboardData = async () => {
    setCreations(dummyCreationData);
  };

  useEffect(() => {
    getDashboardData();
  }, []);
  const { user } = useUser();

  return (
    <div>
      {/* <Navbar /> */}
      <div className="h-full overflow-y-scroll p-6">
        <div className="flex justify-start gap-4 flex-wrap">
          {/* Total Creations */}
          <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200">
            <div className="text-slate-600">
              <p className="text-sm">Total Creations</p>
              <h2 className="text-xl font-semibold">{creations.length}</h2>
            </div>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3588f2] to-[#0bb0d7] text-white flex justify-center items-center ">
              <Sparkles className="w-5 text-white" />
            </div>
          </div>
          {/* Active Plan Name */}
          <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200">
            <div className="text-slate-600">
              <p className="text-sm">Active Plan Name</p>
              <h2 className="text-xl font-semibold first-letter:capitalize">
                {user.publicMetadata?.plan || "unknown"} Plan
              </h2>
            </div>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff61c5] to-[#9e53ee] text-white flex justify-center items-center ">
              <Gem className="w-5 text-white" />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <p className="mt-6 mb-4">Recent Creations</p>
          {creations.map((item, index) => (
            <CreationItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
