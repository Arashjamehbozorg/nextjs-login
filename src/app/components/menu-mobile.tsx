import { PiHouseSimpleBold } from "react-icons/pi";
import { MdOutlineMedicalServices } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

export default function MenuMobile() {
  return (
    <nav className="w-full h-[74px] flex bg-[#fff] items-center px-9 py-5">
      <ul className="flex flex-row w-full justify-around">
        <li className="p-4">
          <PiHouseSimpleBold size={30} />
        </li>
        <li className="p-4">
          <MdOutlineMedicalServices size={30} />
        </li>
        <li className="p-4">
          <IoMdNotificationsOutline size={30} />
        </li>
        <li className="p-4">
          <FaUserCircle size={30} />
        </li>
      </ul>
    </nav>
  );
}
