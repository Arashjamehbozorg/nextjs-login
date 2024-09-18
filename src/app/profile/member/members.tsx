import MemberAvatar from "./member-avatar";
import { IoAddOutline } from "react-icons/io5";

export default function Members() {
  return (
    <div className="flex flex-row bg-[#e5f0fa] p-3 rounded-full mt-5 w-full">
      <div className="flex flex-grow flex-row gap-3">
        <MemberAvatar />
        <MemberAvatar />
        <MemberAvatar />
      </div>
      <div className="flex">
        <div className="rounded-full h-14 w-14 relative border-2 border-[#79B4E4] flex justify-center items-center overflow-hidden ">
          <IoAddOutline size={30} style={{ color: "#79B4E4" }} />
        </div>
      </div>
    </div>
  );
}
