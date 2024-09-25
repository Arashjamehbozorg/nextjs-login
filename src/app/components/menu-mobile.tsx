import { PiHouseSimpleBold } from "react-icons/pi";
import { MdOutlineMedicalServices } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import ChatFooter from "./chat-footer";
import HomeIcon from "../../../public/icons/ICON-16.svg";
import ServiceIcon from "../../../public/icons/ICON-17.svg";
import NotifIcon from "../../../public/icons/ICON-18.svg";
import ProfIcon from "../../../public/icons/ICON-19.svg";

export default function MenuMobile() {
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full">
      <ChatFooter />
      <nav
        className="w-full h-[74px] flex bg-[#fff] items-center px-9 py-5"
        dir="ltr"
      >
        <ul className="flex flex-row w-full justify-around">
          <li className="p-4">
            <HomeIcon width={27} height={27} />
          </li>
          <li className="p-4">
            <ServiceIcon width={27} height={27} />
          </li>
          <li className="p-4">
            <NotifIcon width={27} height={27} />
          </li>
          <li className="p-4">
            <ProfIcon width={27} height={27} />
          </li>
        </ul>
      </nav>
    </div>
  );
}
