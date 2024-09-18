import Members from "./member/members";
import ProfileCard from "./profile-card";
import UserOptions from "./user-options";
export default function Profile() {
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
        <div className="flex  rounded-full bg-[#F0F0F0] py-3 justify-center items-center h-[45]  mt-2 w-2/3">
          <span className="text-base font-normal text-[#002361]">
            اعلام نقص اطلاعات اعضای خانواده
          </span>
        </div>
        <div className="flex  rounded-full bg-[#F0F0F0] py-3 justify-center items-center h-[45]  mt-2 w-2/3">
          <span className="text-base font-normal text-[#002361] ">
            بروز رسانی مجدد اطلاعات اعضای خانواده
          </span>
        </div>
      </div>
    </div>
  );
}
