"use client";
import Members from "./member/members";
import { useEffect, useState } from "react";
import ProfileCard from "./profile-card";
import UserOptions from "./user-options";
import axios from "axios";

export default function Profile() {
  const [userData, setUserData] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found!");
        return;
      }
      try {
        const response = await axios.get(
          "http://79.175.167.223/insurance/insurance/api/v1/users/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        setUserData(response.data);
        console.log(token);
      } catch (error) {
        setError("Failed to fetch user data!");
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className="container-page mx-auto">
      <div className="">
        <ProfileCard />
        <h2 className="text-[#002361] ">اعضای تحت پوشش</h2>
        <Members />
        <UserOptions
          text="مریم محمدی / اصلی
"
        />
        <div className="flex  rounded-full bg-[#F0F0F0] py-3 justify-center items-center h-[45]  mt-2 w-3/4 px-4">
          <span className="text-base font-normal text-[#002361]">
            اعلام نقص اطلاعات اعضای خانواده
          </span>
        </div>
        <div className="flex  rounded-full bg-[#F0F0F0] py-3 justify-center items-center h-[45]  mt-2 w-3/4 px-4">
          <span className="text-base font-normal text-[#002361] ">
            بروزرسانی مجدد اطلاعات اعضای خانواده
          </span>
        </div>
      </div>
    </div>
  );
}
